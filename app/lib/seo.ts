import type { Metadata } from 'next';

/**
 * Per-page SEO: every page gets its own title, description and canonical.
 *
 * To change a page's title/description, edit its entry in PAGES below — this
 * is the single place to paste the client's approved copy. Paths are written
 * WITH a trailing slash, the site's one canonical URL format.
 */

export const SITE_URL = 'https://liberty-india.com';
export const SITE_NAME = 'Liberty India';
export const DEFAULT_OG_IMAGE = 'https://ik.imagekit.io/libertyindia/hero-section/march.png';

interface PageSeo {
  title: string;
  description: string;
  /** false = keep out of search results and the sitemap. */
  index?: boolean;
}

export const PAGES: Record<string, PageSeo> = {
  '/': {
    title: "Luxury India Tours & Private Trips to India | Liberty India",
    description: "Plan a luxury trip to India with local experts: private tours, palace hotels, tiger safaris and Ayurveda retreats, tailor-made around you and your dates.",
  },
  '/about-us/': {
    title: "About Us: Luxury India Travel Experts | Liberty India",
    description: "Meet Liberty India, local luxury travel experts with two decades of crafting private India tours, backed by the global Liberty International network.",
  },
  '/journeys/': {
    title: "Luxury India Tour Packages & Itineraries | Liberty India",
    description: "Browse luxury India tour packages: Golden Triangle, Rajasthan, Kerala, tiger safaris and more. Private, tailor-made itineraries with five-star stays.",
  },
  '/contact-us/': {
    title: "Plan Your Luxury Trip to India | Liberty India",
    description: "Tell us how you dream of seeing India. A Liberty India travel expert will design your private, tailor-made itinerary and send you a personal proposal.",
  },
  '/our-services/meetings-conferences/': {
    title: "Luxury Conference & Event Venues in India | Liberty India",
    description: "Host your conference or corporate event in India's finest palaces and resorts, with venues, stays, transfers and on-site support handled end to end.",
  },
  '/our-services/incentives/': {
    title: "Incentive Trips & Group Tours to India | Liberty India",
    description: "Reward your team with an unforgettable trip to India: private palace dinners, exclusive access and signature experiences, planned end to end by us.",
  },
  '/our-services/premium-leisure/': {
    title: "Private Luxury Tours of India, Tailor-Made | Liberty India",
    description: "Travel India privately and in style: palace hotels, private guides and drivers, and itineraries tailor-made around your interests, pace and dates.",
  },
  '/our-services/special-interest/': {
    title: "Special Interest Tours of India | Liberty India",
    description: "Explore India through your passion: food, textiles, photography, wildlife, architecture or spirituality, on private tours led by specialist guides.",
  },
  '/our-services/sports-tourism/': {
    title: "Sports & Adventure Travel in India | Liberty India",
    description: "Combine sport and culture in India: competitive, traditional and adventure-led trips for groups and teams, with luxury stays and seamless logistics.",
  },
  '/our-services/education-tours/': {
    title: "Educational Tours & Study Trips to India | Liberty India",
    description: "Study trips to India for schools, universities and executive groups: heritage, culture and immersive learning journeys, safely managed end to end.",
  },
  '/our-services/cruise-handling/': {
    title: "India Shore Excursions & River Cruises | Liberty India",
    description: "Private shore excursions and river and coastal cruise experiences in India, with seamless transfers, expert guides and curated stops along the way.",
  },
  '/heritage/': {
    title: "India Heritage Tours: Taj Mahal & Forts | Liberty India",
    description: "Visit the Taj Mahal, Rajput forts and ancient temples on a private heritage tour of India, with expert guides who bring 5,000 years of history to life.",
  },
  '/culture/': {
    title: "India Culture Tours: Festivals & Local Life | Liberty India",
    description: "See India's festivals, rituals, crafts and cuisine up close on a private cultural tour, with authentic local encounters and luxury stays throughout.",
  },
  '/architecture/': {
    title: "India Architecture Tours: Temples & Palaces | Liberty India",
    description: "From rock-cut temples to the Taj Mahal and royal palaces, explore India's greatest architecture on a private luxury tour with specialist guides.",
  },
  '/nature/': {
    title: "India Nature Tours: Himalayas to Kerala | Liberty India",
    description: "Himalayan peaks, Kerala's backwaters, Thar desert and tea gardens: discover India's most beautiful landscapes on a private luxury nature tour.",
  },
  '/spiritual/': {
    title: "Spiritual Tours of India & Sacred Sites | Liberty India",
    description: "Sacred rivers, ancient temples and living traditions: meaningful private journeys to India's holiest places, with expert guides and luxury stays.",
  },
  '/wellness/': {
    title: "Ayurveda & Yoga Retreats in India | Liberty India",
    description: "Restore body and mind at India's finest Ayurveda and yoga retreats, from Kerala's healing villages to Himalayan sanctuaries, privately arranged.",
  },
  '/wildlife/': {
    title: "Tiger Safari India: Luxury Wildlife Tours | Liberty India",
    description: "See wild tigers in Ranthambore and India's best national parks, staying in luxury jungle lodges with expert naturalists on a private wildlife tour.",
  },
  '/faq/': {
    title: "India Travel FAQs | Liberty India",
    description: "Find answers about planning a private India tour, choosing travel dates, customising an itinerary and requesting a proposal from Liberty India.",
  },
  '/privacy-policy/': {
    title: "Privacy Policy | Liberty India",
    description: "Learn how Liberty India uses your details when you browse, request an itinerary or contact our travel team, and how to make a privacy request.",
  },
  '/cookie-policy/': {
    title: "Cookie Policy | Liberty India",
    description: "Read about necessary, analytics and marketing technologies on Liberty India and how to manage your cookie preferences.",
  },

  // Utility pages — not for search engines
  '/under-development/': {
    title: 'Coming Soon | Liberty India',
    description: 'This page is under development.',
    index: false,
  },
  '/event-prod/': {
    title: 'Coming Soon | Liberty India',
    description: 'This page is under development.',
    index: false,
  },
};

export const ITINERARY_SEO: Record<string, PageSeo | undefined> = {
  'classical-golden-triangle': {
    title: "Golden Triangle Tour: Delhi, Agra & Jaipur | Liberty India",
    description: "A 6-day private Golden Triangle tour of Delhi, Agra and Jaipur: Taj Mahal at sunrise, Amber Fort and an Old Delhi rickshaw ride, with luxury hotels.",
  },
  'taj-and-tigers': {
    title: "Taj Mahal & Tiger Safari Tour of India | Liberty India",
    description: "See the Taj Mahal at sunrise and track tigers in Ranthambore on this 8-day private India tour of Delhi, Agra, Jaipur and the jungle, with luxury stays.",
  },
  'golden-triangle-with-ranthambore': {
    title: "Golden Triangle & Ranthambore Safari Tour | Liberty India",
    description: "An 8-day private tour of Delhi, Agra and Jaipur with tiger safaris in Ranthambore National Park: India's classic sights and wildlife in one trip.",
  },
  'kairali-ayurvedic-healing-village': {
    title: "Kerala Ayurveda Retreat: 8-Day Kairali Stay | Liberty India",
    description: "Heal and unwind on an 8-day Ayurveda retreat at Kairali in Kerala: authentic treatments, daily yoga and wellness in a peaceful forest setting.",
  },
  'colourful-rajasthan': {
    title: "Rajasthan Tour: 14 Days of Forts & Palaces | Liberty India",
    description: "A 14-day private Rajasthan tour of majestic forts, opulent palace hotels and desert landscapes, tracing the royal heritage of the land of kings.",
  },
  'unveiling-the-enchanting-south-tamil-nadu': {
    title: "Tamil Nadu Tour: South India's Temples | Liberty India",
    description: "A 10-day private South India tour of Tamil Nadu: towering temples, Mahabalipuram's rock-cut monuments, French Pondicherry and Chettinad mansions.",
  },
  'northeast-india-sojourn': {
    title: "Darjeeling & Sikkim Tour from Kolkata | Liberty India",
    description: "A 10-day private tour from Kolkata to Darjeeling's tea gardens, Sikkim's monasteries and Kalimpong's hills: the Himalayas at their most serene.",
  },
  'vibrant-gujarat-central-india': {
    title: "Gujarat & Central India Tour: 20 Days | Liberty India",
    description: "A 20-day cultural tour of Gujarat, Madhya Pradesh, Prayagraj and Ayodhya: stepwells, temples, tribal crafts and India's spiritual heartland.",
  },
  'eastindia': {
    title: "Kolkata & East India Tour: 13 Days | Liberty India",
    description: "A 13-day private tour of East India, starting in Kolkata, the City of Joy: colonial heritage, temples and landscapes far from the usual tourist trail.",
  },
};

interface BuildArgs extends PageSeo {
  path: string;
  image?: string;
}

/** Full Metadata object (title, description, canonical, Open Graph, Twitter). */
export function buildMetadata({ title, description, path, image, index }: BuildArgs): Metadata {
  const img = image ?? DEFAULT_OG_IMAGE;
  return {
    title,
    description,
    alternates: { canonical: SITE_URL + path },
    ...(index === false ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: SITE_NAME,
      url: SITE_URL + path,
      title,
      description,
      images: [{ url: img, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [img],
    },
  };
}

/** Metadata for a page listed in PAGES. Path must include the trailing slash. */
export function pageMetadata(path: keyof typeof PAGES & string): Metadata {
  const page = PAGES[path];
  if (!page) throw new Error(`No SEO entry for "${path}" in app/lib/seo.ts`);
  return buildMetadata({ ...page, path });
}

/** Trim to a search-snippet length without cutting a word in half. */
export function toDescription(text: string, max = 158): string {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  const cut = clean.slice(0, max - 1);
  return `${cut.slice(0, cut.lastIndexOf(' '))}…`;
}
