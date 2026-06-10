/**
 * "Explore Programs" itinerary cards rendered on each /our-services/* sub-page
 * that uses the Itineraries block (per Figma).
 *
 * Each section gets a curated set of real itinerary slugs that match its theme
 * — premium-leisure surfaces the full luxury range, cruise highlights river /
 * coastal journeys, special-interest leans on wellness + niche experiences,
 * sports highlights safari / adventure trips, and education-tours surfaces the
 * heritage- and culture-rich circuits. Card images still come from each
 * section's ImageKit folder (`services/<folderSlug>/p{N}.png`) so the cards
 * visually echo the section's slideshow imagery; the card destination is the
 * real `/itineraries/<slug>` detail page.
 */

export type ServiceItineraryItem = {
  image: string;
  alt: string;
  category: string;
  bestTime: string;
  title: string;
  description: string;
  price?: number; // Omit for "Price on request"
  duration: string;
  slug?: string;
};

const IMAGEKIT_BASE = 'https://ik.imagekit.io/libertyindia/services';
const TR_QUERY = '?tr=w-1200,q-80,f-auto';

type ItinerarySource = Omit<ServiceItineraryItem, 'image' | 'alt'>;

const ITINERARIES: Record<string, ItinerarySource> = {
  'classical-golden-triangle': {
    category: 'Heritage',
    bestTime: 'October – March',
    title: 'The Classical Golden Triangle of India',
    description:
      "India's most celebrated journey — Delhi's Mughal grandeur, the Taj Mahal at sunrise, and the royal heritage of Jaipur in six unforgettable days.",
    price: 1013,
    duration: '6 Days',
    slug: 'classical-golden-triangle',
  },
  'taj-and-tigers': {
    category: 'Heritage & Wildlife',
    bestTime: 'October – March',
    title: 'Taj & Tigers',
    description:
      "The Golden Triangle elevated with the wild — combine Delhi, Agra and Jaipur with jeep safaris tracking Bengal tigers in Ranthambore National Park.",
    price: 1406,
    duration: '8 Days',
    slug: 'taj-and-tigers',
  },
  'colourful-rajasthan': {
    category: 'Heritage',
    bestTime: 'October – April',
    title: 'Colourful Rajasthan',
    description:
      "Painted havelis, golden ramparts and lake palaces — fourteen days through Rajasthan's most vivid forts, deserts and royal cities, ending at the Taj Mahal.",
    duration: '14 Days',
    slug: 'colourful-rajasthan',
  },
  'unveiling-the-enchanting-south-tamil-nadu': {
    category: 'Architecture',
    bestTime: 'October – March',
    title: 'Unveiling the Enchanting South — Tamil Nadu',
    description:
      "From Mahabalipuram's rock-cut wonders and Pondicherry's French quarter to the Chola temples of Tanjore and Madurai's Meenakshi sanctum.",
    price: 880,
    duration: '10 Days',
    slug: 'unveiling-the-enchanting-south-tamil-nadu',
  },
  'northeast-india-city-of-joy': {
    category: 'Culture & Nature',
    bestTime: 'October – March',
    title: 'Northeast India & The City of Joy',
    description:
      "From colonial Kolkata to the wild grasslands of Kaziranga, the river island of Majuli, and the mist-laced hills of Meghalaya — India at its most poetic and untamed.",
    price: 1330,
    duration: '13 Days',
    slug: 'northeast-india-city-of-joy',
  },
  'kairali-ayurvedic-healing-village': {
    category: 'Wellness',
    bestTime: 'October – March',
    title: 'Kairali Ayurvedic Healing Village',
    description:
      "Restore body, mind and spirit at one of India's most respected Ayurvedic retreats — daily yoga, personalised therapies and wholesome cuisine in Kerala's Pala forests.",
    price: 1230,
    duration: '7 / 14 / 21 Nights',
    slug: 'kairali-ayurvedic-healing-village',
  },
  'northeast-india-sojourn': {
    category: 'Nature & Culture',
    bestTime: 'October – March',
    title: 'Northeast India Sojourn',
    description:
      "Ten Himalayan days from Kolkata through Darjeeling's tea gardens, Sikkim's monasteries and Kalimpong's orchid-filled hills.",
    price: 1310,
    duration: '10 Days',
    slug: 'northeast-india-sojourn',
  },
};

// Per-section curated lists (in card order). Each section repeats from the
// 7-itinerary inventory above — these are the thematic matches.
const SECTION_LISTS: Record<string, string[]> = {
  'premium-leisure': [
    'classical-golden-triangle',
    'taj-and-tigers',
    'colourful-rajasthan',
    'unveiling-the-enchanting-south-tamil-nadu',
    'northeast-india-city-of-joy',
    'kairali-ayurvedic-healing-village',
  ],
  cruise: [
    'northeast-india-city-of-joy',
    'kairali-ayurvedic-healing-village',
    'unveiling-the-enchanting-south-tamil-nadu',
    'northeast-india-sojourn',
  ],
  'special-interest': [
    'kairali-ayurvedic-healing-village',
    'unveiling-the-enchanting-south-tamil-nadu',
    'northeast-india-sojourn',
    'taj-and-tigers',
    'colourful-rajasthan',
    'classical-golden-triangle',
  ],
  sports: [
    'taj-and-tigers',
    'northeast-india-city-of-joy',
    'northeast-india-sojourn',
  ],
  'education-tours': [
    'classical-golden-triangle',
    'unveiling-the-enchanting-south-tamil-nadu',
    'colourful-rajasthan',
    'northeast-india-city-of-joy',
    'taj-and-tigers',
    'kairali-ayurvedic-healing-village',
  ],
};

export function getExploreItems(folderSlug: string): ServiceItineraryItem[] {
  const slugs = SECTION_LISTS[folderSlug] ?? [];
  return slugs.map((itinerarySlug, i) => {
    const source = ITINERARIES[itinerarySlug];
    return {
      ...source,
      image: `${IMAGEKIT_BASE}/${folderSlug}/p${i + 1}.png${TR_QUERY}`,
      alt: source.title,
    };
  });
}

export const EXPLORE_HEADING = 'Explore Programs';
// NOTE: each service page passes its own page-specific Explore subhead (per the
// client review). No shared/generic subhead constant — a pasted generic line
// ("Travel through centuries of history…") was the exact issue they flagged.
export const EXPLORE_BG = '#FDF39F4D';
