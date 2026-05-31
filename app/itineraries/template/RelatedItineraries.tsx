import { itineraries, type Itinerary } from '../itineraries';
import ItineraryCard from '../../components/ItineraryCard';

function scoreOverlap(current: Itinerary, other: Itinerary) {
  return current.categories.filter((c) => other.categories.includes(c)).length;
}

/**
 * More Adventures — three sibling itineraries ranked by shared categories,
 * rendered with the site-wide unified `ItineraryCard` so the cards match
 * every other itinerary surface (homepage, topic pages). Sources only the
 * real itineraries from `itineraries.ts`. Sits on a cream band per Figma.
 */
export default function RelatedItineraries({ current }: { current: Itinerary }) {
  const related = itineraries
    .filter((it) => it.slug !== current.slug)
    .map((it) => ({ it, score: scoreOverlap(current, it) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ it }) => it);

  if (related.length === 0) return null;

  const headingCategories = current.categories.slice(0, 2).join(' & ');

  return (
    <section className="w-full bg-[#FFFDEC] py-14 md:py-20 border-t border-[#E9E4BF]">
      <div className="w-[90%] max-w-6xl mx-auto">
        <h2
          className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-[#141313] text-center leading-tight mb-10 md:mb-14"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
        >
          More {headingCategories} Adventures
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {related.map((it) => (
            <ItineraryCard
              key={it.slug}
              image={it.heroImage}
              alt={it.title}
              title={it.title}
              description={it.subtitle}
              metaLine={`${it.categories[0]}  |  Best Time  |  ${it.bestTime}`}
              priceLabel="Starting from"
              priceValue={it.startingPrice}
              priceNote={it.startingPriceNote}
              duration={it.duration}
              href={`/itineraries/${it.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
