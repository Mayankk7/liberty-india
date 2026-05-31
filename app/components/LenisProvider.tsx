'use client';

import { ReactLenis, useLenis } from 'lenis/react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Resets scroll to the very top on every client-side route change. Lenis keeps
 * its own internal scroll offset, so after a <Link> navigation the new page
 * would otherwise open at the previous scroll position and the inertia loop
 * would animate from there. We jump to 0 instantly (no smooth animation) unless
 * the target URL carries a hash, which the in-page hash navigation handles.
 */
function ScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) return;
    if (lenis) lenis.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname, lenis]);

  return null;
}

/**
 * Site-wide momentum scroll. Mounts a single root Lenis instance so any
 * descendant can call `useLenis()` (e.g. Parallax). Disables itself when
 * the user prefers reduced motion — Lenis falls through to native scroll.
 */
export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Always open a freshly-loaded page at the top. Service cards (and other
  // hard navigations) would otherwise restore the previous scroll position,
  // dropping the visitor mid-page instead of at the start of the new page.
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  if (reducedMotion)
    return (
      <>
        <ScrollReset />
        {children}
      </>
    );

  return (
    <ReactLenis
      root
      options={{
        // 0.12 reads crisper than the 0.1 default — fewer intermediate frames
        // for the compositor to chew through, motion still glides.
        lerp: 0.12,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      }}
    >
      <ScrollReset />
      {children}
    </ReactLenis>
  );
}
