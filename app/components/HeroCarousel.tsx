'use client';

import { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';
import Parallax from './Parallax';

/** Month data for the hero carousel - each month maps to a destination & hero image */
const MONTHS = [
  { id: 'jan', name: 'Jan', image: 'https://ik.imagekit.io/libertyindia/hero-section/feb.png', destination: 'Jallikattu, Tamil Nadu' },
  { id: 'feb', name: 'Feb', image: 'https://ik.imagekit.io/libertyindia/hero-section/feb.png', destination: 'Surajkund Crafts & Folk Festival, Haryana' },
  { id: 'mar', name: 'Mar', image: 'https://ik.imagekit.io/libertyindia/hero-section/march.png', destination: 'Pan India' },
  { id: 'apr', name: 'Apr', image: 'https://ik.imagekit.io/libertyindia/hero-section/april.png', destination: 'Baisakhi Rural Games & Wrestling, Punjab' },
  { id: 'may', name: 'May', image: 'https://ik.imagekit.io/libertyindia/hero-section/may.jpg', destination: 'Thrissur Pooram, Kerala' },
  { id: 'jun', name: 'Jun', image: 'https://ik.imagekit.io/libertyindia/hero-section/june.png', destination: 'Hemis Festival, Ladakh' },
  { id: 'jul', name: 'Jul', image: 'https://ik.imagekit.io/libertyindia/hero-section/july.png', destination: 'Behdienkhlam, Meghalaya' },
  { id: 'aug', name: 'Aug', image: 'https://ik.imagekit.io/libertyindia/hero-section/aug.png', destination: 'Onam (Snake Boat Races / Vallam Kali), Kerala' },
  { id: 'sept', name: 'Sept', image: 'https://ik.imagekit.io/libertyindia/hero-section/sept.png', destination: 'Ganesh Chaturthi, Mumbai' },
  { id: 'oct', name: 'Oct', image: 'https://ik.imagekit.io/libertyindia/hero-section/oct.png', destination: 'Dussehra Fairs & Rural Sports, Pan-India' },
  { id: 'nov', name: 'Nov', image: 'https://ik.imagekit.io/libertyindia/hero-section/nov.png', destination: 'Pushkar Camel Fair, Rajasthan' },
  { id: 'dec', name: 'Dec', image: 'https://ik.imagekit.io/libertyindia/hero-section/dec.png', destination: 'Sunburn, Goa' },
];

/** Number of months visible in the bottom slider */
const VISIBLE_MONTHS = 5;

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(2); // March (index 2) as default
  const [prevIndex, setPrevIndex] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeMonth = MONTHS[activeIndex];

  // Respect the user's reduced-motion preference (disables auto-advance)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Calculate the visible window of months centered on the active month
  const visibleMonths = useMemo(() => {
    const half = Math.floor(VISIBLE_MONTHS / 2);
    const indices: number[] = [];
    for (let i = -half; i <= half; i++) {
      indices.push((activeIndex + i + MONTHS.length) % MONTHS.length);
    }
    return indices;
  }, [activeIndex]);

  // Live refs so the auto-advance interval reads current state without
  // resetting itself on every activeIndex/isTransitioning change.
  const activeIndexRef = useRef(activeIndex);
  const isTransitioningRef = useRef(isTransitioning);
  useEffect(() => { activeIndexRef.current = activeIndex; }, [activeIndex]);
  useEffect(() => { isTransitioningRef.current = isTransitioning; }, [isTransitioning]);

  // Smooth crossfade transition — stable reference (uses refs internally).
  const handleTransition = useCallback((newIndex: number) => {
    const currentIndex = activeIndexRef.current;
    if (newIndex === currentIndex || isTransitioningRef.current) return;
    setPrevIndex(currentIndex);
    setIsTransitioning(true);
    setActiveIndex(newIndex);

    // Allow crossfade to complete
    if (transitionTimer.current) clearTimeout(transitionTimer.current);
    transitionTimer.current = setTimeout(() => {
      setIsTransitioning(false);
    }, 1200);
  }, []);

  // Clear any pending crossfade timer on unmount
  useEffect(() => {
    return () => {
      if (transitionTimer.current) clearTimeout(transitionTimer.current);
    };
  }, []);

  const goNext = useCallback(() => {
    const newIndex = (activeIndexRef.current + 1) % MONTHS.length;
    handleTransition(newIndex);
  }, [handleTransition]);

  const goPrev = useCallback(() => {
    const newIndex = (activeIndexRef.current - 1 + MONTHS.length) % MONTHS.length;
    handleTransition(newIndex);
  }, [handleTransition]);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev]);

  // Periodic auto-advance — paused on hover/focus and when the user
  // prefers reduced motion. The interval only re-arms when pause/motion
  // state flips; activeIndex changes do NOT reset it (refs above).
  useEffect(() => {
    if (reducedMotion || isPaused) return;
    const interval = setInterval(() => {
      goNext();
    }, 6000);
    return () => clearInterval(interval);
  }, [goNext, reducedMotion, isPaused]);

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-[#1a1008]"
      aria-label="Hero carousel - Best time to visit India by month"
      role="region"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      {/* Background Images with Crossfade */}
      {/* Previous image (fading out) */}
      {isTransitioning && (
        <div className="absolute inset-0 z-1">
          <Image
            src={MONTHS[prevIndex].image}
            alt=""
            fill
            sizes="100vw"
            quality={90}
            className="object-cover object-center"
            aria-hidden="true"
          />
        </div>
      )}

      {/* Current image (fading in). Parallax stacks on top of the crossfade —
       * lower speed (0.15) since Ken Burns already provides intra-image motion. */}
      <div
        className={`absolute inset-0 z-2 transition-opacity duration-1000 ease-in-out ${
          isTransitioning ? 'opacity-0 animate-hero-fade-in' : 'opacity-100'
        }`}
      >
        <Parallax speed={0.15} className="absolute inset-0">
          <Image
            key={activeMonth.id}
            src={activeMonth.image}
            alt={`Travel destination: ${activeMonth.destination} - Best visited in ${activeMonth.name}`}
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
            placeholder="empty"
          />
        </Parallax>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-3 bg-linear-to-b from-black/60 via-black/30 to-black/55 pointer-events-none" />
      <div className="absolute inset-0 z-3 bg-linear-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />

      {/* ===== Center Content ===== */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 pb-40 pt-12">
        {/* Eyebrow Tagline (above headline) */}
        <p className="relative mb-3 md:mb-4 text-xs md:text-sm lg:text-base text-gray-200 text-center font-normal tracking-[0.1em] uppercase text-shadow-sm" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          Where Ancient Wisdom Meets Modern Luxury
        </p>

        {/* Main Headline */}
        <h1 className="text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] xl:text-[3.25rem] font-semibold text-white text-center max-w-4xl leading-[1.15] md:leading-[1.1] text-shadow-lg" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          India’s Leading
          <br />
          Destination Management Company
        </h1>

        {/* Service Line */}
        <p className="mt-4 md:mt-5 text-[10px] sm:text-xs md:text-sm lg:text-base text-white text-center font-normal tracking-[0.05em] md:tracking-[0.1em] uppercase text-shadow-sm px-2" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          MICE&nbsp;&nbsp;|&nbsp;&nbsp;Leisure&nbsp;&nbsp;|&nbsp;&nbsp;Special Interest Tours&nbsp;&nbsp;|&nbsp;&nbsp;Events &amp; Beyond
        </p>
      </div>

      {/* ===== Bottom Month Selector ===== */}
      <div className="absolute bottom-4 md:bottom-5 left-[5%] right-[5%] z-20">
        <div className="w-full py-1 md:py-2">
          <div className="flex items-center justify-between">
            {/* Month Slider (left side) - with inline bg */}
            <div 
              className="flex items-center gap-2 md:gap-3 px-4 md:px-6 py-1.5 md:py-2 rounded-lg" 
              role="tablist" 
              aria-label="Select travel month"
              style={{ backgroundColor: 'rgba(73, 73, 73, 0.5)' }}
            >
              {/* Year label */}
              <span
                className="text-white/70 text-[10px] md:text-xs tracking-[0.12em] font-light pr-2 md:pr-3 mr-0.5 md:mr-1 border-r border-white/25 select-none"
                style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
              >
                2026
              </span>

              {/* Previous Arrow */}
              <button
                onClick={goPrev}
                aria-label="Previous month"
                className="p-1 md:p-1.5 text-white/60 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                <svg className="w-3 h-3 md:w-3.5 md:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Visible Months */}
              <div className="flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
                {visibleMonths.map((mIndex) => {
                  const month = MONTHS[mIndex];
                  const isActive = mIndex === activeIndex;
                  return (
                    <button
                      key={month.id}
                      role="tab"
                      aria-selected={isActive}
                      aria-label={`View ${month.name} destinations`}
                      onClick={() => handleTransition(mIndex)}
                      style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                      className={`relative text-[10px] md:text-xs tracking-[0.12em] capitalize transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center ${
                        isActive
                          ? 'text-white font-bold'
                          : 'text-white/50 font-light hover:text-white/80'
                      }`}
                    >
                      {month.name}
                    </button>
                  );
                })}
              </div>

              {/* Next Arrow */}
              <button
                onClick={goNext}
                aria-label="Next month"
                className="p-1 md:p-1.5 text-white/60 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                <svg className="w-3 h-3 md:w-3.5 md:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Destination Label (right side) — hidden on small screens to prevent overflow */}
            <div
              className={`hidden sm:block transition-opacity duration-500 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <p className="text-white/75 text-[10px] md:text-xs font-light tracking-wide text-right max-w-[200px] md:max-w-[280px] truncate" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
                {activeMonth.destination}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
