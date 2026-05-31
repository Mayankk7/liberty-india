import Image from 'next/image';
import type { Itinerary } from '../itineraries';

/**
 * Signature Experience — matches Figma. 6 photo cards in 2 rows of 3 (or
 * however many `signatureExperiences` are authored, in a 3-up grid). Tall
 * 4:5 photo + small category label + bold serif title beneath the image.
 *
 * Renders nothing if no signature experience has an image set (we treat the
 * image as the authoring signal — without it the section isn't worth showing).
 */
export default function SignatureExperience({ itinerary }: { itinerary: Itinerary }) {
  const items = itinerary.signatureExperiences.filter((e) => !!e.image);
  if (items.length === 0) return null;

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="w-[90%] max-w-6xl mx-auto">
        <h2
          className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-[#141313] text-center leading-tight mb-8 md:mb-10"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
        >
          Signature Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 md:gap-y-10">
          {items.map((item, i) => (
            <article key={i} className="flex flex-col">
              <div className="relative w-full aspect-[5/6] overflow-hidden">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                )}
              </div>
              <p
                className="text-xs md:text-sm text-[#424242] mt-4 mb-1.5"
                style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
              >
                {item.category}
              </p>
              <h3
                className="text-lg md:text-xl font-semibold text-[#141313] leading-snug"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                {item.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
