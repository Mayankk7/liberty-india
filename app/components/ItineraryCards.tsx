'use client';

import ItineraryCard from './ItineraryCard';
import Reveal from './Reveal';
import { getItinerariesByCategory, type ItineraryCategory } from '../itineraries/itineraries';

interface ItineraryItem {
  image: string;
  alt: string;
  category: string;
  bestTime: string;
  title: string;
  description: string;
  price?: number; // Omit for "Price on request"
  duration: string;
  slug?: string; // Optional slug for linking
}

interface ItineraryCardsProps {
  heading: string;
  subheading: string;
  /** Manual card list (e.g. /our-services/* via getExploreItems). */
  items?: ItineraryItem[];
  /** When set, cards are auto-derived from the real itineraries tagged with
   *  this category — used by the /about-india/* sections so each section only
   *  showcases its own themed journeys (Heritage → Heritage, etc.). */
  category?: ItineraryCategory;
  /** Max cards to show in `category` mode (default 3 — one grid row). */
  limit?: number;
  bgColor?: string;
  /** Retained for call-site compatibility. Card design is unified site-wide
   *  via the shared ItineraryCard, so this is a no-op. */
  variant?: 'default' | 'heritage';
}

/** Normalised shape the card renders from, regardless of source. */
interface CardData {
  image: string;
  alt: string;
  metaLine: string;
  title: string;
  description: string;
  priceLabel: string;
  priceValue: string;
  priceNote: string;
  duration: string;
  href?: string;
}

function fromCategory(category: ItineraryCategory, limit: number): CardData[] {
  return getItinerariesByCategory(category)
    .slice(0, limit)
    .map((it) => {
      // "€1,420" / "$1,330" → priced; "Price on request" → no label/note.
      const hasPrice = /\d/.test(it.startingPrice);
      return {
        image: it.heroImage,
        alt: it.title,
        metaLine: `${category}  |  Best Time  |  ${it.bestTime}`,
        title: it.title,
        description: it.subtitle,
        priceLabel: hasPrice ? 'Starting from' : '',
        priceValue: it.startingPrice,
        priceNote: hasPrice ? 'per person' : '',
        duration: it.duration,
        href: `/itineraries/${it.slug}`,
      };
    });
}

function fromItems(items: ItineraryItem[]): CardData[] {
  return items.map((item) => {
    // Numeric price → "€1,013" (sitewide currency is the euro); a missing
    // price means the trip is quoted on request.
    const hasPrice = typeof item.price === 'number';
    return {
      image: item.image,
      alt: item.alt,
      metaLine: `${item.category}  |  Best Time  |  ${item.bestTime}`,
      title: item.title,
      description: item.description,
      priceLabel: hasPrice ? 'Starting from' : '',
      priceValue: hasPrice ? `€${item.price!.toLocaleString()}` : 'Price on request',
      priceNote: hasPrice ? 'per person' : '',
      duration: item.duration,
      href: item.slug ? `/itineraries/${item.slug}` : undefined,
    };
  });
}

export default function ItineraryCards({ heading, subheading, items, category, limit = 3, bgColor }: ItineraryCardsProps) {
  const cards = category ? fromCategory(category, limit) : fromItems(items ?? []);

  return (
    <section className="w-full py-14 md:py-20" style={{ backgroundColor: bgColor || 'white' }}>
      {/* Section Header */}
      <Reveal className="w-[90%] max-w-5xl mx-auto text-center mb-10 md:mb-14">
        <h2
          className="text-2xl md:text-3xl lg:text-4xl xl:text-[2.75rem] font-semibold text-gray-900 mb-4 leading-snug whitespace-pre-line"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
        >
          {heading}
        </h2>
        <p
          className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
        >
          {subheading}
        </p>
      </Reveal>

      {/* Cards Grid */}
      <div className="w-[90%] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        {cards.map((item, index) => (
          <Reveal key={index} delay={(index % 3) * 80}>
            <ItineraryCard
              image={item.image}
              alt={item.alt}
              title={item.title}
              description={item.description}
              metaLine={item.metaLine}
              priceLabel={item.priceLabel}
              priceValue={item.priceValue}
              priceNote={item.priceNote}
              duration={item.duration}
              href={item.href}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
