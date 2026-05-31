import ImageWithLoader from '../../components/ImageWithLoader';
import type { Itinerary } from '../itineraries';
import { ITINERARY_FILE_MAP } from './fileMap';
import DownloadActions from './DownloadActions';

/**
 * Overview — matches Figma. Heading + body paragraphs on the left, single
 * landscape image on the right. PDF/DOCX download CTA renders only when a
 * file exists for this slug in fileMap.ts.
 */
export default function OverviewSection({ itinerary }: { itinerary: Itinerary }) {
  const fileName = ITINERARY_FILE_MAP[itinerary.slug];

  return (
    <section id="overview" className="w-full bg-white scroll-mt-20 py-12 md:py-16">
      <div className="w-[90%] max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_640px] gap-8 lg:gap-12 items-start">
        <div>
          <h2
            className="text-2xl md:text-3xl lg:text-[40px] font-semibold text-[#141313] leading-tight mb-6 md:mb-8"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Overview
          </h2>
          <div className="space-y-6">
            {itinerary.overview.map((text, i) => (
              <p
                key={i}
                className="text-[15px] md:text-base leading-[1.75] text-[#424242]"
                style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
              >
                {text}
              </p>
            ))}
          </div>

          <DownloadActions slug={itinerary.slug} title={itinerary.title} fileName={fileName} />
        </div>

        <div className="relative w-full aspect-[16/11] overflow-hidden">
          <ImageWithLoader
            src={itinerary.overviewImage}
            alt={`${itinerary.title} overview`}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 90vw, 640px"
          />
        </div>
      </div>
    </section>
  );
}
