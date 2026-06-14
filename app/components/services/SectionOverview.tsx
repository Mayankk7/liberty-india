'use client';

import { useEffect, useState } from 'react';

type SectionOverviewProps = {
  images: string[];
  description: string;
  intervalMs?: number;
  fadeMs?: number;
};

export default function SectionOverview({
  images,
  description,
  intervalMs = 7500,
  fadeMs = 1100,
}: SectionOverviewProps) {
  const [idx, setIdx] = useState<{ active: number; prev: number }>({
    active: 0,
    prev: 0,
  });
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    images.forEach((src) => {
      const preload = new window.Image();
      preload.src = src;
    });
  }, [images]);

  useEffect(() => {
    const onVisibility = () => setIsPaused(document.hidden);
    document.addEventListener('visibilitychange', onVisibility);
    setIsPaused(document.hidden);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  useEffect(() => {
    if (reducedMotion || isPaused || images.length <= 1) return;
    const id = setInterval(() => {
      setIdx(({ active }) => ({
        prev: active,
        active: (active + 1) % images.length,
      }));
    }, intervalMs);
    return () => clearInterval(id);
  }, [reducedMotion, isPaused, images.length, intervalMs]);

  if (images.length === 0) return null;

  return (
    <section className="relative w-full bg-[#FDF8E8]" aria-label="Section overview">
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* Previous image — continues its Ken Burns drift during the fade so
            the layer underneath is never visibly frozen while the new active
            image animates in over it. animation-delay = -intervalMs picks the
            curve up where the just-deposed active layer left off, and forwards
            holds the final scale after the fade completes. */}
        <div
          key={`prev-${idx.prev}-${idx.active}`}
          className="absolute inset-0 z-0"
          style={{
            animation: reducedMotion
              ? undefined
              : `kenBurns ${intervalMs + fadeMs}ms ease-out -${intervalMs}ms forwards`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[idx.prev]}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Current image — fades in over the previous one with a subtle Ken
            Burns slow zoom for a cinematic luxury feel. Keyed so it remounts
            on each change, re-running both keyframe animations. */}
        <div
          key={idx.active}
          className="absolute inset-0 z-1"
          style={{
            animation: reducedMotion
              ? undefined
              : `heroFadeIn ${fadeMs}ms cubic-bezier(0.45, 0, 0.55, 1) forwards, ` +
                `kenBurns ${intervalMs + fadeMs}ms ease-out forwards`,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[idx.active]}
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Floating card — overlaid on the slideshow. On mobile it's centred and
            full-width (banner-on-photo, matching the other overview sections);
            on desktop it floats left, vertically offset. */}
        <div className="absolute inset-x-4 md:inset-x-auto md:left-8 lg:left-12 top-1/2 md:top-[calc(50%-60px)] -translate-y-1/2 z-10 bg-white shadow-md md:max-w-md lg:max-w-lg px-8 py-10 md:px-10 md:py-10">
          <p
            className="text-[18px] text-[#424242] leading-loose"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
