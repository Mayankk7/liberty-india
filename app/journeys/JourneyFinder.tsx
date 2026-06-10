'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ItineraryCard from '../components/ItineraryCard';
import Reveal from '../components/Reveal';
import { itineraries, type Itinerary, type ItineraryCategory } from '../itineraries/itineraries';
import {
  ALL_TRAVEL_STYLES,
  ALL_WAYS_TO_TRAVEL,
  applyFilters,
  countActiveFilters,
  EMPTY_FILTERS,
  filtersFromParams,
  filtersToParams,
  getAvailableInterests,
  getAvailableRegions,
  getWayToTravel,
  type Filters,
  type Region,
  type TravelStyle,
  type WayToTravel,
} from './filters';

export default function JourneyFinder() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<Filters>(EMPTY_FILTERS);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Hydrate filters from URL on mount and whenever the URL changes externally.
  useEffect(() => {
    setFilters(filtersFromParams(new URLSearchParams(searchParams?.toString() ?? '')));
  }, [searchParams]);

  const regions = useMemo(() => getAvailableRegions(itineraries), []);
  const interests = useMemo(() => getAvailableInterests(itineraries), []);
  const results = useMemo(() => applyFilters(itineraries, filters), [filters]);
  const activeCount = countActiveFilters(filters);

  const updateFilters = useCallback(
    (next: Filters) => {
      setFilters(next);
      const params = filtersToParams(next).toString();
      router.replace(params ? `/journeys?${params}` : '/journeys', { scroll: false });
    },
    [router]
  );

  const toggle = <T extends string>(arr: T[], v: T): T[] =>
    arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v];

  return (
    <div className="w-full">
      {/* Filter bar */}
      <div className="w-[92%] max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-2 lg:gap-0 bg-white border border-[#e5e0d6] rounded-3xl lg:rounded-full p-2 shadow-sm">
          {/* Search + mobile toggle row */}
          <div className="flex items-center gap-2 lg:contents">
            <div className="flex items-center flex-1 min-w-0 px-4 py-2 lg:border-r lg:border-[#ece6d8]">
              <input
                type="text"
                value={filters.q}
                onChange={(e) => updateFilters({ ...filters, q: e.target.value })}
                placeholder="Type here…"
                aria-label="Search journeys"
                className="flex-1 min-w-0 bg-transparent outline-none text-sm md:text-[15px] text-[#424242] placeholder:text-[#8d8d8d]"
                style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
              />
              <button
                type="button"
                aria-label="Search"
                className="ml-2 flex items-center justify-center w-9 h-9 rounded-full bg-[#E07B39] text-white hover:brightness-110 transition-all"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
                </svg>
              </button>
            </div>

            {/* Mobile-only Filters toggle */}
            <button
              type="button"
              onClick={() => setMobileFiltersOpen((o) => !o)}
              aria-expanded={mobileFiltersOpen}
              className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-full bg-[#FDF8E8] border border-[#ece6d8] text-[#424242] text-sm font-medium whitespace-nowrap cursor-pointer hover:bg-[#fcefcf] transition-colors"
              style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-.293.707L15 12.414V19a1 1 0 0 1-.553.894l-4 2A1 1 0 0 1 9 21v-8.586L3.293 6.707A1 1 0 0 1 3 6V4z" />
              </svg>
              Filters{activeCount > 0 ? ` (${activeCount})` : ''}
              <svg className={`w-3 h-3 transition-transform ${mobileFiltersOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Dropdowns — always visible on lg+, collapsed on smaller screens */}
          <div className={`${mobileFiltersOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row lg:contents`}>
            <FilterDropdown
              label="Region"
              options={regions}
              selected={filters.regions}
              onChange={(next) => updateFilters({ ...filters, regions: next as Region[] })}
            />
            <FilterDropdown
              label="Interests"
              options={interests}
              selected={filters.interests}
              onChange={(next) => updateFilters({ ...filters, interests: next as ItineraryCategory[] })}
            />
            <FilterDropdown
              label="Travel Style"
              options={ALL_TRAVEL_STYLES}
              selected={filters.travelStyles}
              onChange={(next) => updateFilters({ ...filters, travelStyles: next as TravelStyle[] })}
            />
            <FilterDropdown
              label="Ways To Travel"
              options={ALL_WAYS_TO_TRAVEL}
              selected={filters.waysToTravel}
              onChange={(next) => updateFilters({ ...filters, waysToTravel: next as WayToTravel[] })}
              last
            />
          </div>
        </div>

        {/* Active chips + result count */}
        <ActiveFilters
          filters={filters}
          onRemove={(patch) => updateFilters({ ...filters, ...patch })}
          onClear={() => updateFilters(EMPTY_FILTERS)}
        />

        <p
          className="mt-6 mb-8 text-sm md:text-base text-[#424242] italic"
          style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
        >
          Showing {results.length} {results.length === 1 ? 'Result' : 'Results'}
        </p>
      </div>

      {/* Results grid */}
      <div className="w-[92%] max-w-7xl mx-auto pb-16 md:pb-24">
        {results.length === 0 ? (
          <EmptyState onClear={() => updateFilters(EMPTY_FILTERS)} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {results.map((it, i) => (
              <Reveal key={it.slug} delay={(i % 3) * 80}>
                <CardForItinerary it={it} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CardForItinerary({ it }: { it: Itinerary }) {
  const metaLine = `${it.categories.slice(0, 2).join(' & ')}  |  Best Time  |  ${it.bestTime}`;
  const isPrivate = getWayToTravel(it) === 'Private Group';
  return (
    <ItineraryCard
      image={it.heroImage || it.overviewImage}
      alt={it.title}
      title={it.title}
      description={it.subtitle}
      metaLine={metaLine}
      priceLabel="Starting From"
      priceValue={it.startingPrice}
      priceNote={it.startingPriceNote}
      duration={it.duration}
      href={`/itineraries/${it.slug}`}
      badge={isPrivate ? 'Private Journeys' : 'Small Group Journeys'}
      bgColor={isPrivate ? '#fdf8e8' : undefined}
    />
  );
}

// ── Dropdown ────────────────────────────────────────────────────────────────

function FilterDropdown({
  label,
  options,
  selected,
  onChange,
  last,
}: {
  label: string;
  options: string[];
  selected: string[];
  onChange: (next: string[]) => void;
  last?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [open]);

  const summary = selected.length === 0 ? 'All' : selected.length === 1 ? selected[0] : `${selected.length} selected`;

  return (
    <div
      ref={ref}
      className={`relative flex items-center px-4 py-2 ${last ? '' : 'lg:border-r lg:border-[#ece6d8]'}`}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-3 w-full text-left text-[#424242] hover:text-[#E07B39] transition-colors cursor-pointer"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span
          className="text-sm md:text-[15px] font-medium whitespace-nowrap"
          style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
        >
          {label}
        </span>
        <span
          className="ml-auto lg:ml-2 text-xs md:text-sm text-[#8d8d8d] whitespace-nowrap"
          style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
        >
          {summary}
        </span>
        <svg
          className={`w-3 h-3 text-[#8d8d8d] transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div
          className="absolute top-full left-0 mt-2 min-w-[200px] max-w-[calc(100vw-2rem)] max-h-[320px] overflow-auto bg-white border border-[#e5e0d6] rounded-lg shadow-xl z-30 py-2"
          role="listbox"
        >
          {options.map((opt) => {
            const isOn = selected.includes(opt);
            return (
              <button
                key={opt}
                type="button"
                onClick={() => onChange(isOn ? selected.filter((s) => s !== opt) : [...selected, opt])}
                className={`flex items-center gap-3 w-full text-left px-4 py-2 text-sm hover:bg-[#FDF8E8] transition-colors cursor-pointer ${
                  isOn ? 'text-[#E07B39] font-medium' : 'text-[#424242]'
                }`}
                style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                role="option"
                aria-selected={isOn}
              >
                <span
                  className={`w-4 h-4 rounded border flex items-center justify-center ${
                    isOn ? 'bg-[#E07B39] border-[#E07B39]' : 'border-[#cfc8b8]'
                  }`}
                >
                  {isOn && (
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </span>
                {opt}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ── Active filter chips ─────────────────────────────────────────────────────

type ChipPatch = Partial<Filters>;

function ActiveFilters({
  filters,
  onRemove,
  onClear,
}: {
  filters: Filters;
  onRemove: (patch: ChipPatch) => void;
  onClear: () => void;
}) {
  if (countActiveFilters(filters) === 0) return null;

  const chips: { key: string; label: string; patch: ChipPatch }[] = [];
  if (filters.q) chips.push({ key: `q:${filters.q}`, label: `"${filters.q}"`, patch: { q: '' } });
  for (const r of filters.regions)
    chips.push({ key: `r:${r}`, label: r, patch: { regions: filters.regions.filter((x) => x !== r) } });
  for (const i of filters.interests)
    chips.push({ key: `i:${i}`, label: i, patch: { interests: filters.interests.filter((x) => x !== i) } });
  for (const s of filters.travelStyles)
    chips.push({ key: `s:${s}`, label: s, patch: { travelStyles: filters.travelStyles.filter((x) => x !== s) } });
  for (const w of filters.waysToTravel)
    chips.push({ key: `w:${w}`, label: w, patch: { waysToTravel: filters.waysToTravel.filter((x) => x !== w) } });

  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      {chips.map((c) => (
        <button
          key={c.key}
          type="button"
          onClick={() => onRemove(c.patch)}
          className="inline-flex items-center gap-2 bg-[#FDF8E8] text-[#424242] text-xs md:text-sm px-3 py-1.5 rounded-full border border-[#ece6d8] hover:bg-[#fcefcf] transition-colors cursor-pointer"
          style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
        >
          {c.label}
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      ))}
      <button
        type="button"
        onClick={onClear}
        className="text-xs md:text-sm text-[#E07B39] hover:underline ml-2 cursor-pointer"
        style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
      >
        Clear all
      </button>
    </div>
  );
}

// ── Empty state ─────────────────────────────────────────────────────────────

function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <div className="text-center py-20">
      <p
        className="text-lg md:text-xl text-[#424242] mb-2"
        style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
      >
        No journeys match your filters.
      </p>
      <p
        className="text-sm text-[#8d8d8d] mb-6"
        style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
      >
        Try removing a filter, or clear them all to start fresh.
      </p>
      <button
        type="button"
        onClick={onClear}
        className="inline-block px-8 py-3 text-sm font-medium text-white rounded-full bg-[#E07B39] hover:brightness-110 transition-all cursor-pointer"
        style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
      >
        Clear all filters
      </button>
    </div>
  );
}
