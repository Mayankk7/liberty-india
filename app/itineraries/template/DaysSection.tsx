'use client';

import ImageWithLoader from '../../components/ImageWithLoader';
import dynamic from 'next/dynamic';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { Itinerary, Meal } from '../itineraries';

const IndiaMap = dynamic(() => import('../IndiaMap'), { ssr: false });

// ── Meal chips ───────────────────────────────────────────────────────────────
// Pill badges showing the meals included on a day (breakfast / lunch / dinner).
// Icons are inline SVGs in the site's stroked style (lucide-style paths).
const MEAL_META: Record<Meal, { label: string; path: React.ReactNode }> = {
  breakfast: {
    label: 'Breakfast',
    // Coffee cup
    path: (
      <>
        <path d="M10 2v2" />
        <path d="M14 2v2" />
        <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
        <path d="M6 2v2" />
      </>
    ),
  },
  lunch: {
    label: 'Lunch',
    // Fork & knife
    path: (
      <>
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
        <path d="M7 2v20" />
        <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
      </>
    ),
  },
  dinner: {
    label: 'Dinner',
    // Crescent moon
    path: <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />,
  },
};

const MEAL_ORDER: Meal[] = ['breakfast', 'lunch', 'dinner'];

function MealChips({ meals }: { meals?: Meal[] }) {
  if (!meals || meals.length === 0) return null;
  const shown = MEAL_ORDER.filter((m) => meals.includes(m));
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {shown.map((meal) => (
        <span
          key={meal}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8F6E1] border border-[#E9E4BF] text-[12px] tracking-[0.02em] text-[#424242]"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3.5 h-3.5 text-[#E07B39]"
          >
            {MEAL_META[meal].path}
          </svg>
          {MEAL_META[meal].label}
        </span>
      ))}
    </div>
  );
}

/**
 * Itinerary section — matches Figma. Sticky map column on the left, day-by-day
 * cards on the right, then a "Suggested Hotels" 3-card row underneath (only
 * rendered when the itinerary entry has `suggestedHotels` populated).
 *
 * As the day cards scroll, the map follows along: it zooms to the city the
 * traveller stays in that day and highlights the route covered so far.
 */
export default function DaysSection({ itinerary }: { itinerary: Itinerary }) {
  const stops = useMemo(
    () =>
      (itinerary.coordinates ?? [])
        .filter((s) => s && Number.isFinite(s.lat) && Number.isFinite(s.lng))
        .map((s) => ({
        name: s.name,
        lat: s.lat,
        lng: s.lng,
        // Keep every transport mode (road/air/rail/water) so the map can show
        // the matching car / flight / train / boat icon on each leg. (Previously
        // rail + water were dropped to null.)
        modeToNext:
          s.modeToNext === 'road' ||
          s.modeToNext === 'air' ||
          s.modeToNext === 'rail' ||
          s.modeToNext === 'water'
            ? s.modeToNext
            : null,
      })),
    [itinerary.coordinates]
  );

  // Map each day to the index of the route stop the traveller is at that day.
  // Matches the day's overnight city (then its title) against the stop names,
  // preferring a stop at or after the previous day's so the journey only moves
  // forward; unmatched days (e.g. departure) inherit the previous day's stop.
  const dayToStop = useMemo(() => {
    if (stops.length === 0) return itinerary.days.map(() => 0);
    const norm = (s: string) => (s || '').toLowerCase();
    const matchIn = (text: string, s: number) => {
      const name = norm(stops[s].name);
      return name.length > 0 && text.includes(name);
    };
    // On a travel-day title ("Ranthambore → Delhi") the destination is the
    // right-most stop mentioned. Later stops win ties so a city appearing twice
    // in the route (start & return) resolves to the return, not the start.
    const destFromTitle = (title: string) => {
      let bestPos = -1;
      let bestIdx = -1;
      for (let s = 0; s < stops.length; s++) {
        const name = norm(stops[s].name);
        if (!name) continue;
        const p = title.lastIndexOf(name);
        if (p >= 0 && p >= bestPos) {
          bestPos = p;
          bestIdx = s;
        }
      }
      return bestIdx;
    };

    let last = 0;
    const arr = itinerary.days.map((day) => {
      // The overnight city is where the traveller actually is that day, so it
      // wins. The title destination is the fallback for departure days.
      const overnight = norm(day.overnight);
      const title = norm(day.title);
      let idx = -1;
      for (let s = last; s < stops.length; s++) if (matchIn(overnight, s)) { idx = s; break; }
      if (idx === -1) for (let s = 0; s < stops.length; s++) if (matchIn(overnight, s)) { idx = s; break; }
      if (idx === -1) idx = destFromTitle(title);
      if (idx === -1) idx = last;
      else last = idx;
      return idx;
    });

    // The route's final coordinate is the journey's end — usually the return to
    // the start. Pin the last day to it so the closing leg back to the starting
    // location is always drawn and highlighted.
    arr[arr.length - 1] = stops.length - 1;
    return arr;
  }, [itinerary.days, stops]);

  // Day currently in view (drives the map). The day whose card has scrolled
  // above a reference line ~38% down the viewport is considered active.
  const [activeDay, setActiveDay] = useState(0);
  const dayRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    let ticking = false;
    const compute = () => {
      ticking = false;
      const ref = window.innerHeight * 0.38;
      let best = 0;
      for (let i = 0; i < dayRefs.current.length; i++) {
        const el = dayRefs.current[i];
        if (el && el.getBoundingClientRect().top <= ref) best = i;
      }
      // setActiveDay no-ops when unchanged, so the map only reacts on real moves.
      setActiveDay(best);
    };
    // Throttle to one measurement per animation frame for smooth tracking.
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(compute);
      }
    };
    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [itinerary.days.length]);

  const activeStop = dayToStop[activeDay] ?? 0;

  return (
    <section id="itinerary" className="w-full bg-white scroll-mt-20 pt-10 md:pt-14 pb-12 md:pb-16">
      <div className="w-[92%] max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-6 lg:gap-8 items-start">
        {/* Sticky map — fills the whole column edge to edge: full width, full
            viewport height below the sticky offset (top-24 = 6rem + 1rem
            breathing room at the bottom), no frame or inner padding. */}
        <div className="hidden lg:block sticky top-24 self-start w-full h-[calc(100vh-7rem)] min-h-[420px] rounded-lg overflow-hidden">
          <IndiaMap coordinates={stops} activeIndex={activeStop} />
        </div>

        {/* Day cards column — cream panel */}
        <div className="w-full min-w-0 bg-[#FFFDEC] border border-[#E9E4BF] rounded-[14px] p-5 md:p-6 lg:p-7">
          <h2
            className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-[#141313] leading-tight mb-6 md:mb-8"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Itinerary
          </h2>

          <div className="flex flex-col gap-4 md:gap-5">
            {itinerary.days.map((day, i) => (
              <article
                key={day.day}
                ref={(el) => { dayRefs.current[i] = el; }}
                className={`group bg-white border-2 rounded-[10px] overflow-hidden transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-14px_rgba(0,0,0,0.18)] ${
                  i === activeDay
                    ? 'border-[#E07B39] shadow-[0_10px_28px_-14px_rgba(224,123,57,0.35)]'
                    : 'border-[#E9E4BF] hover:border-[#E07B39]/40'
                }`}
                style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
              >
                <header className="flex flex-wrap items-center gap-3 md:gap-5 px-3 md:px-4 py-2 md:py-2.5 border-b-2 border-[#E9E4BF]">
                  <span className="inline-flex items-center justify-center px-4 py-2 bg-[#F8F6E1] text-[#424242] text-sm md:text-[15px] tracking-[0.04em] rounded-[10px] whitespace-nowrap">
                    Day {day.day.toString().padStart(2, '0')}
                  </span>
                  <h3 className="flex-1 text-[15px] md:text-base lg:text-[17px] text-[#424242] leading-snug min-w-0 tracking-[0.02em]">
                    {day.title}
                  </h3>
                  <span className="text-[13px] md:text-sm text-[#424242] whitespace-nowrap tracking-[0.02em]">
                    <span className="font-semibold">Overnight</span>{' '}
                    {day.overnight}
                  </span>
                </header>

                <div className="flex flex-col md:flex-row gap-4 md:gap-0 p-4 md:p-0">
                  <div className="flex-1 min-w-0 md:py-4 md:px-5">
                    {/* line-clamp is a layout safeguard only — content is
                        authored to ≤100 words, so it shouldn't trigger. */}
                    <p className="text-[14px] md:text-[15px] leading-[1.7] text-[#424242] font-light md:line-clamp-[10]">
                      {day.description}
                    </p>
                    <MealChips meals={day.meals} />
                  </div>
                  {day.image && (
                    <div className="relative w-full md:w-44 lg:w-52 aspect-[4/3] self-center shrink-0 overflow-hidden md:my-4 md:mr-4 md:rounded-[8px]">
                      <ImageWithLoader
                        src={day.image}
                        alt={day.title}
                        fill
                        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                        sizes="(max-width: 768px) 100vw, 208px"
                      />
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Suggested Hotels — white card so it lifts off the cream panel */}
          {itinerary.suggestedHotels && itinerary.suggestedHotels.length > 0 && (
            <div className="mt-8 md:mt-10 bg-white border border-[#E9E4BF] rounded-[10px] overflow-hidden">
              <div className="bg-[#F8F6E1] px-5 md:px-6 py-3.5 md:py-4 border-b border-[#E9E4BF] flex items-center gap-3">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 text-[#424242]"
                >
                  {/* Hotel building — 3 storeys with window grid + entrance */}
                  <path d="M4 21V6.5a1 1 0 0 1 .55-.9l7-3.5a1 1 0 0 1 .9 0l7 3.5a1 1 0 0 1 .55.9V21" />
                  <path d="M3 21h18" />
                  <path d="M10.5 21v-3.5a1.5 1.5 0 0 1 3 0V21" />
                  <rect x="7" y="8.5" width="2.2" height="2.2" rx="0.3" />
                  <rect x="14.8" y="8.5" width="2.2" height="2.2" rx="0.3" />
                  <rect x="7" y="13" width="2.2" height="2.2" rx="0.3" />
                  <rect x="14.8" y="13" width="2.2" height="2.2" rx="0.3" />
                </svg>
                <h3
                  className="text-lg md:text-xl text-[#141313] tracking-[0.02em]"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Suggested Hotels
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 p-4 md:p-6">
                {itinerary.suggestedHotels.map((hotel, i) => (
                  <div
                    key={i}
                    className="bg-white border border-[#E9E4BF] rounded-[10px] overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    <div className="relative w-full aspect-[4/3]">
                      <ImageWithLoader
                        src={hotel.image}
                        alt={`${hotel.name}, ${hotel.city}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                      />
                    </div>
                    <div className="px-4 py-3 flex items-center justify-between gap-3">
                      <span
                        className="text-base md:text-lg font-semibold text-[#141313] truncate"
                        style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                      >
                        {hotel.name}
                      </span>
                      <span
                        className="text-sm text-[#424242] whitespace-nowrap"
                        style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                      >
                        {hotel.city}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
