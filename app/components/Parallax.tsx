'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { useLenis } from 'lenis/react';

type ParallaxProps = {
  children: ReactNode;
  /** Multiplier on scroll position. 0.1–0.3 reads as subtle depth. */
  speed?: number;
  className?: string;
};

/**
 * Translates its child slower than page scroll for a depth effect.
 * Subscribes to Lenis's scroll callback. Geometry (offsetTop, height) is
 * cached on mount + on resize so the per-tick path is just arithmetic — no
 * getBoundingClientRect every frame. Disabled when reduced-motion is on
 * and on narrow viewports (touch scroll + transform reads worse on phones).
 *
 * The inner element is intentionally taller than the wrapper (OVERSCAN_RATIO
 * above and below) and the translate is clamped to that range so the wrapper
 * edges never reveal empty space when scrolling.
 */
const OVERSCAN_RATIO = 0.25;

export default function Parallax({ children, speed = 0.2, className = '' }: ParallaxProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const geomRef = useRef({ top: 0, height: 0, viewportH: 0 });
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reducedMotionMq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const smallScreenMq = window.matchMedia('(max-width: 768px)');
    const update = () => setDisabled(reducedMotionMq.matches || smallScreenMq.matches);
    update();
    reducedMotionMq.addEventListener('change', update);
    smallScreenMq.addEventListener('change', update);
    return () => {
      reducedMotionMq.removeEventListener('change', update);
      smallScreenMq.removeEventListener('change', update);
    };
  }, []);

  useEffect(() => {
    if (disabled) return;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const measure = () => {
      const rect = wrapper.getBoundingClientRect();
      geomRef.current = {
        top: rect.top + window.scrollY,
        height: rect.height,
        viewportH: window.innerHeight,
      };
    };
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(wrapper);
    window.addEventListener('resize', measure);
    window.addEventListener('orientationchange', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
      window.removeEventListener('orientationchange', measure);
    };
  }, [disabled]);

  useLenis(({ scroll }: { scroll: number }) => {
    if (disabled) return;
    const inner = innerRef.current;
    if (!inner) return;

    // Distance of wrapper center from viewport center, in document coords.
    // Counter-translate the inner element by speed * that distance, clamped
    // to the overscan range so we never reveal empty space at the edges.
    const { top, height, viewportH } = geomRef.current;
    const raw = (top + height / 2 - scroll - viewportH / 2) * speed;
    const maxOffset = height * OVERSCAN_RATIO;
    const offset = raw > maxOffset ? maxOffset : raw < -maxOffset ? -maxOffset : raw;
    inner.style.transform = `translate3d(0, ${offset}px, 0)`;
  });

  return (
    <div ref={wrapperRef} className={`overflow-hidden ${className}`.trim()}>
      {/* When parallax is active the inner is absolutely positioned and
       * extends OVERSCAN_RATIO above and below the wrapper so the translate
       * never exposes empty space. When disabled it falls back to a plain
       * full-size box so Next/Image `fill` keeps its sizing. The wrapper
       * already provides positioning via its caller-passed className
       * (`absolute inset-0` in current usages). */}
      <div
        ref={innerRef}
        className={
          disabled
            ? 'relative h-full w-full'
            : 'absolute inset-x-0 -top-[25%] -bottom-[25%] will-change-transform'
        }
      >
        {children}
      </div>
    </div>
  );
}
