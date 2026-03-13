'use client';

import { useState, useCallback, useEffect, useMemo } from 'react';
import Image from 'next/image';

/** Month data for the hero carousel - each month maps to a destination & hero image */
const MONTHS = [
  { id: 'jan', name: 'Jan', image: '/images/hero-section/feb.png', destination: 'Jallikattu, Tamil Nadu' },
  { id: 'feb', name: 'Feb', image: '/images/hero-section/feb.png', destination: 'Surajkund Crafts & Folk Festival, Haryana' },
  { id: 'mar', name: 'Mar', image: '/images/hero-section/march.jpg', destination: 'Auli, Uttarakhand' },
  { id: 'apr', name: 'Apr', image: '/images/hero-section/april.png', destination: 'Baisakhi Rural Games & Wrestling, Punjab' },
  { id: 'may', name: 'May', image: '/images/hero-section/may.jpg', destination: 'Thrissur Pooram, Kerala' },
  { id: 'jun', name: 'Jun', image: '/images/hero-section/june.png', destination: 'Hemis Festival, Ladakh' },
];

/** Number of months visible in the bottom slider */
const VISIBLE_MONTHS = 5;

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(2); // March (index 2) as default
  const [prevIndex, setPrevIndex] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const activeMonth = MONTHS[activeIndex];

  // Calculate the visible window of months centered on the active month
  const visibleMonths = useMemo(() => {
    const half = Math.floor(VISIBLE_MONTHS / 2);
    const indices: number[] = [];
    for (let i = -half; i <= half; i++) {
      indices.push((activeIndex + i + MONTHS.length) % MONTHS.length);
    }
    return indices;
  }, [activeIndex]);

  // Smooth crossfade transition
  const handleTransition = useCallback(
    (newIndex: number) => {
      if (newIndex === activeIndex || isTransitioning) return;
      setPrevIndex(activeIndex);
      setIsTransitioning(true);
      setActiveIndex(newIndex);

      // Allow crossfade to complete
      setTimeout(() => {
        setIsTransitioning(false);
      }, 1200);
    },
    [activeIndex, isTransitioning]
  );

  const goNext = useCallback(() => {
    const newIndex = (activeIndex + 1) % MONTHS.length;
    handleTransition(newIndex);
  }, [activeIndex, handleTransition]);

  const goPrev = useCallback(() => {
    const newIndex = (activeIndex - 1 + MONTHS.length) % MONTHS.length;
    handleTransition(newIndex);
  }, [activeIndex, handleTransition]);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev]);

  // Periodic auto-advance every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [goNext]);

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-[#1a1008]"
      aria-label="Hero carousel - Best time to visit India by month"
      role="region"
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

      {/* Current image (fading in) */}
      <div
        className={`absolute inset-0 z-2 transition-opacity duration-1000 ease-in-out ${
          isTransitioning ? 'opacity-0 animate-hero-fade-in' : 'opacity-100'
        }`}
      >
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
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-3 bg-linear-to-b from-black/60 via-black/30 to-black/55 pointer-events-none" />
      <div className="absolute inset-0 z-3 bg-linear-to-r from-black/40 via-transparent to-black/40 pointer-events-none" />

      {/* ===== Center Content ===== */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 pb-40 pt-12">
        {/* Logo */}
        <div className="mb-6 md:mb-8">
          <Image
            src="/images/hero-section/logo.svg"
            alt="Liberty India logo"
            width={90}
            height={90}
            className="w-17.5 h-17.5 md:w-22.5 md:h-22.5 lg:w-25 lg:h-25 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)] object-contain"
            priority
          />
        </div>

        {/* Main Headline */}
        <h1 className="text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] xl:text-[3.25rem] font-semibold text-white text-center max-w-4xl leading-[1.15] md:leading-[1.1] text-shadow-lg" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          India’s Leading Destination
          <br />
          Management Company
        </h1>

        {/* Service Line */}
        <p className="mt-4 md:mt-5 text-[10px] md:text-xs lg:text-sm text-white/80 text-center font-light tracking-[0.25em] uppercase" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          MICE&nbsp;&nbsp;|&nbsp;&nbsp;Leisure&nbsp;&nbsp;|&nbsp;&nbsp;Events &amp; Beyond
        </p>

        {/* Tagline */}
        <p className="mt-5 md:mt-8 text-xs md:text-sm lg:text-base text-white font-semibold text-center tracking-wide" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
          Where Ancient Wisdom Meets Modern Luxury
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
              <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
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

            {/* Destination Label (right side) */}
            <div
              className={`transition-opacity duration-500 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <p className="text-white/75 text-[10px] md:text-xs font-light tracking-wide text-right" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
                {activeMonth.destination}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
