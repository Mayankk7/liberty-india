import type { Metadata } from 'next';

/**
 * Per-page SEO: every page gets its own title, description and canonical.
 *
 * To change a page's title/description, edit its entry in PAGES below — this
 * is the single place to paste the client's approved copy. Paths are written
 * WITH a trailing slash, the site's one canonical URL format.
 */

export const SITE_URL = 'https://libertyindia.com';
export const SITE_NAME = 'Liberty India';
export const DEFAULT_OG_IMAGE = '/images/home-section/mar.jpg';

interface PageSeo {
  title: string;
  description: string;
  /** false = keep out of search results and the sitemap. */
  index?: boolean;
}

export const PAGES: Record<string, PageSeo> = {
  '/': {
    title: "Liberty India | India's Leading Destination Management Company | DMC & MICE",
    description:
      "Liberty India is India's premier Destination Management Company (DMC) specialising in MICE, Leisure travel, Events & Beyond. Experience where ancient wisdom meets modern luxury across India's most iconic destinations.",
  },
  '/about-us/': {
    title: 'About Us | Liberty India – Destination Management Company',
    description:
      'Meet Liberty India, a destination management company delivering MICE programmes, luxury leisure travel and curated journeys across India.',
  },
  '/journeys/': {
    title: 'All Journeys | Liberty India',
    description:
      'Browse every Liberty India journey. Filter by region, interest, travel style, and group format to find your next bespoke India experience.',
  },
  '/contact-us/': {
    title: 'Contact Us | Liberty India',
    description:
      "Request a proposal from Liberty India — India's destination management partner for MICE, luxury leisure and curated journeys.",
  },
  '/faq/': {
    title: 'Frequently Asked Questions | Liberty India',
    description:
      'Answers to common questions about working with Liberty India — our services, itineraries, tailor-made programmes and how to request a proposal.',
  },

  // About India
  '/heritage/': {
    title: 'Heritage of India | 5,000 Years of History | Liberty India',
    description:
      "Explore India's heritage with Liberty India — ancient temple architecture, Mughal monuments, classical dance and living art traditions.",
  },
  '/culture/': {
    title: 'Culture of India | Faiths, Festivals & Crafts | Liberty India',
    description:
      "Experience India's living culture — a tapestry of faiths, festival immersion experiences and centuries-old artisan and craft traditions.",
  },
  '/architecture/': {
    title: 'Architecture of India | Temples, Forts & Palaces | Liberty India',
    description:
      "Discover India's architecture — ancient rock-cut temples, Indo-Islamic monuments, Rajput forts and palaces, and colonial landmarks.",
  },
  '/wildlife/': {
    title: 'Wildlife of India | Safaris & National Parks | Liberty India',
    description:
      "Encounter India's wild heritage — tiger safaris, national parks and wildlife journeys designed by Liberty India.",
  },
  '/wellness/': {
    title: 'Wellness in India | Ayurveda & Retreats | Liberty India',
    description:
      'Ayurveda retreat experiences and wellness retreat locations across India, curated by Liberty India.',
  },
  '/spiritual/': {
    title: 'Spiritual India | Sacred Journeys & Pilgrimage | Liberty India',
    description:
      "Journey through spiritual India — sacred Hindu pilgrimage sites, the Buddhist circuit and Sikh spirituality, with Liberty India.",
  },
  '/nature/': {
    title: 'Nature in India | Mountains, Backwaters & Coasts | Liberty India',
    description:
      "From the Himalayas to the backwaters — explore India's natural landscapes on journeys curated by Liberty India.",
  },

  // Our Services
  '/our-services/meetings-conferences/': {
    title: 'Meetings & Conferences in India | Liberty India DMC',
    description:
      'Meetings and conferences in India, planned and delivered end to end by Liberty India — venues, logistics, delegate management and on-ground support.',
  },
  '/our-services/incentives/': {
    title: 'Incentive Travel in India | Liberty India DMC',
    description:
      'Incentive programmes in India designed to reward and inspire — tailored by Liberty India for corporate groups.',
  },
  '/our-services/premium-leisure/': {
    title: 'Premium Leisure Travel in India | Liberty India',
    description:
      'Premium leisure journeys across India — handpicked stays, private experiences and curated itineraries from Liberty India.',
  },
  '/our-services/cruise-handling/': {
    title: 'Cruise Handling in India | Shore Excursions | Liberty India',
    description:
      'Cruise handling in India by Liberty India — shore excursions and ground arrangements for cruise passengers at Indian ports.',
  },
  '/our-services/special-interest/': {
    title: 'Special Interest Tours in India | Liberty India',
    description:
      'Special interest tours in India built around your passion — from culture and cuisine to wildlife and wellness — by Liberty India.',
  },
  '/our-services/sports-tourism/': {
    title: 'Sports Tourism in India | Liberty India',
    description:
      'Sports tourism in India with Liberty India — travel programmes built around sporting events and active experiences.',
  },
  '/our-services/education-tours/': {
    title: 'Education Tours in India | Liberty India',
    description:
      'Education tours in India for schools, universities and study groups — learning journeys organised by Liberty India.',
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
    alternates: { canonical: path },
    ...(index === false ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: SITE_NAME,
      url: path,
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
