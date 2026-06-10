import type { Itinerary, ItineraryCategory } from '../itineraries/itineraries';

export type Region = 'Northern' | 'Southern' | 'Northeastern' | 'Western' | 'Central';
export type TravelStyle = 'Quick Escape' | 'Classic' | 'Extended';
export type WayToTravel = 'Private Group' | 'Small Group';

export type Filters = {
  q: string;
  regions: Region[];
  interests: ItineraryCategory[];
  travelStyles: TravelStyle[];
  waysToTravel: WayToTravel[];
};

export const EMPTY_FILTERS: Filters = {
  q: '',
  regions: [],
  interests: [],
  travelStyles: [],
  waysToTravel: [],
};

/** Manual slug → region map. Routes are too freeform to parse reliably. */
const REGION_BY_SLUG: Record<string, Region> = {
  'eastindia': 'Northeastern',
  'northeast-india-sojourn': 'Northeastern',
  'kairali-ayurvedic-healing-village': 'Southern',
  'unveiling-the-enchanting-south-tamil-nadu': 'Southern',
  'gems-of-south-india': 'Southern',
  'classical-golden-triangle': 'Northern',
  'taj-and-tigers': 'Northern',
  'colourful-rajasthan': 'Northern',
  'vibrant-gujarat-central-india': 'Western',
  // Added 2026-05-26: 9 new itineraries from Word docs
  'safari-and-heritage-trail': 'Northern',
  'incredible-north-east-india': 'Northeastern',
  'golden-triangle-with-ranthambore': 'Northern',
  'enchanting-central-india': 'Central',
  'enchanting-south-india-tamilnadu-kerala': 'Southern',
  'indias-natural-and-historical-treasures': 'Northern',
  'encounter-with-the-royal-bengal-tiger': 'Northern',
  'southern-splendour': 'Southern',
  'footsteps-of-lord-buddha': 'Northern',
};

export function getRegion(it: Itinerary): Region | undefined {
  return REGION_BY_SLUG[it.slug];
}

export function getTravelStyle(it: Itinerary): TravelStyle {
  if (it.durationDays <= 7) return 'Quick Escape';
  if (it.durationDays <= 13) return 'Classic';
  return 'Extended';
}

/** Mirrors the existing Journeys.tsx convention (durationDays > 10 = small group). */
export function getWayToTravel(it: Itinerary): WayToTravel {
  return it.durationDays > 10 ? 'Small Group' : 'Private Group';
}

export function getAvailableRegions(itineraries: Itinerary[]): Region[] {
  const set = new Set<Region>();
  for (const it of itineraries) {
    const r = getRegion(it);
    if (r) set.add(r);
  }
  return Array.from(set);
}

export function getAvailableInterests(itineraries: Itinerary[]): ItineraryCategory[] {
  const set = new Set<ItineraryCategory>();
  for (const it of itineraries) for (const c of it.categories) set.add(c);
  return Array.from(set);
}

export const ALL_TRAVEL_STYLES: TravelStyle[] = ['Quick Escape', 'Classic', 'Extended'];
export const ALL_WAYS_TO_TRAVEL: WayToTravel[] = ['Private Group', 'Small Group'];

/**
 * Former / alternate city names → the canonical name used in our data.
 * Lets a guest search "Bombay", "Calcutta", "Madras" etc. and still match the
 * itineraries that reference the modern spelling. Keys are canonical (lower-
 * case); each value lists the historical aliases to fold into the search.
 */
const CITY_ALIASES: Record<string, string[]> = {
  mumbai: ['bombay'],
  kolkata: ['calcutta'],
  chennai: ['madras'],
  bengaluru: ['bangalore'],
  varanasi: ['banaras', 'benares', 'kashi'],
  puducherry: ['pondicherry', 'pondy'],
  mysuru: ['mysore'],
  kochi: ['cochin'],
  alappuzha: ['alleppey'],
  thiruvananthapuram: ['trivandrum'],
  kozhikode: ['calicut'],
  kollam: ['quilon'],
  thrissur: ['trichur'],
  mangaluru: ['mangalore'],
  thanjavur: ['tanjore'],
  tiruchirappalli: ['trichy', 'trichinopoly'],
  mahabalipuram: ['mamallapuram'],
  pune: ['poona'],
  vadodara: ['baroda'],
  gurugram: ['gurgaon'],
  prayagraj: ['allahabad'],
  shimla: ['simla'],
  guwahati: ['gauhati'],
  ujjain: ['avantika'],
  kanpur: ['cawnpore'],
  visakhapatnam: ['vizag', 'waltair'],
  vijayawada: ['bezawada'],
  panaji: ['panjim'],
  kannur: ['cannanore'],
};

/**
 * Builds a search haystack that also matches historical / alternate city names,
 * in BOTH directions — so a guest can search either the old or the new spelling
 * regardless of which the itinerary data happens to use. It scans the WHOLE
 * journey (overview + every day's title, overnight and description, plus the
 * summary highlights), so any city mentioned anywhere in the trip is found.
 */
function searchHaystack(it: Itinerary): string {
  const dayText = (it.days ?? [])
    .map((d) => `${d.title} ${d.overnight} ${d.description}`)
    .join(' ');
  const summaryText = [...(it.summary ?? []), ...(it.summaryRight ?? [])].join(' ');
  const overviewText = (it.overview ?? []).join(' ');
  let hay =
    `${it.title} ${it.subtitle} ${it.route} ${it.categories.join(' ')} ${dayText} ${summaryText} ${overviewText}`.toLowerCase();
  for (const [canonical, aliases] of Object.entries(CITY_ALIASES)) {
    if (hay.includes(canonical)) {
      hay += ' ' + aliases.join(' ');
    } else if (aliases.some((a) => hay.includes(a))) {
      hay += ' ' + canonical;
    }
  }
  return hay;
}

export function applyFilters(itineraries: Itinerary[], f: Filters): Itinerary[] {
  const q = f.q.trim().toLowerCase();
  return itineraries.filter((it) => {
    if (q) {
      const hay = searchHaystack(it);
      if (!hay.includes(q)) return false;
    }
    if (f.regions.length) {
      const r = getRegion(it);
      if (!r || !f.regions.includes(r)) return false;
    }
    if (f.interests.length) {
      if (!f.interests.some((c) => it.categories.includes(c))) return false;
    }
    if (f.travelStyles.length) {
      if (!f.travelStyles.includes(getTravelStyle(it))) return false;
    }
    if (f.waysToTravel.length) {
      if (!f.waysToTravel.includes(getWayToTravel(it))) return false;
    }
    return true;
  });
}

/** Total number of active filters (for the "Showing N Results" counter / chips). */
export function countActiveFilters(f: Filters): number {
  return (
    (f.q ? 1 : 0) +
    f.regions.length +
    f.interests.length +
    f.travelStyles.length +
    f.waysToTravel.length
  );
}

/** Serialize filters to URL search params (omits empty fields for clean URLs). */
export function filtersToParams(f: Filters): URLSearchParams {
  const p = new URLSearchParams();
  if (f.q) p.set('q', f.q);
  if (f.regions.length) p.set('region', f.regions.join(','));
  if (f.interests.length) p.set('interest', f.interests.join(','));
  if (f.travelStyles.length) p.set('style', f.travelStyles.join(','));
  if (f.waysToTravel.length) p.set('way', f.waysToTravel.join(','));
  return p;
}

export function filtersFromParams(p: URLSearchParams): Filters {
  const split = (s: string | null) => (s ? s.split(',').filter(Boolean) : []);
  return {
    q: p.get('q') ?? '',
    regions: split(p.get('region')) as Region[],
    interests: split(p.get('interest')) as ItineraryCategory[],
    travelStyles: split(p.get('style')) as TravelStyle[],
    waysToTravel: split(p.get('way')) as WayToTravel[],
  };
}
