'use client';

import ImageWithLoader from './ImageWithLoader';
import Reveal from './Reveal';

interface ImageTextOverlayItem {
  image: string;
  alt: string;
  title: string;
  subtitle?: string;
  description: string;
}

interface ImageTextOverlayProps {
  items: ImageTextOverlayItem[];
  startPosition?: 'left' | 'right';
  /** 'heritage' adopts the agreed font system (Merriweather Bold titles, #424242 text). Default keeps prior styling — other pages unaffected. */
  variant?: 'default' | 'heritage';
}

export default function ImageTextOverlay({ items, startPosition = 'right', variant = 'default' }: ImageTextOverlayProps) {
  const isHeritage = variant === 'heritage';
  // Card titles are headings → always Big Caslon CC (var(--font-playfair)).
  const titleFont = 'var(--font-playfair), Georgia, serif';
  const titleClass = isHeritage
    ? 'text-xl md:text-xl lg:text-2xl font-bold text-[#424242] mb-1'
    : 'text-xl md:text-xl lg:text-2xl font-semibold text-gray-900 mb-1';
  const subtitleClass = isHeritage
    ? 'text-xs md:text-sm text-[#424242] mb-2 italic'
    : 'text-xs md:text-sm text-gray-500 mb-2 italic';
  const descriptionClass = isHeritage
    ? 'text-[13px] md:text-base text-[#424242] leading-loose md:leading-relaxed'
    : 'text-[13px] md:text-base text-gray-600 leading-loose md:leading-relaxed';
  // Banners are wide exports; a fixed height + object-cover fills the full-width
  // container consistently and keeps the image dominant with the caption below.
  const imageClass = 'w-full h-[240px] sm:h-[320px] md:h-[414px] object-cover';
  return (
    <div className="w-[90%] mx-auto flex flex-col">
      {items.map((item, index) => {
        const isRight =
          startPosition === 'right' ? index % 2 === 0 : index % 2 !== 0;

        return (
          <Reveal key={index} className="relative w-full overflow-visible mb-16 md:mb-20 last:mb-0">
            <ImageWithLoader
              src={item.image}
              alt={item.alt}
              width={1600}
              height={900}
              className={imageClass}
            />
            {/* Text Overlay Card — image-on-top, caption flows below and overlaps only the
                bottom edge on mobile (so the banner isn't covered); desktop keeps the floating
                corner overlay. Same layout for both variants (they differ only in typography). */}
            <div
              className={`relative md:absolute z-10 -mt-12 md:mt-0 mx-auto md:mx-0 md:-bottom-10 w-[90%] md:w-[38%] bg-white px-5 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 shadow-md text-left ${
                isRight ? 'md:right-8 lg:right-12' : 'md:left-8 lg:left-12'
              }`}
            >
              <h3
                className={titleClass}
                style={{ fontFamily: titleFont }}
              >
                {item.title}
              </h3>
              {item.subtitle && (
                <p
                  className={subtitleClass}
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  {item.subtitle}
                </p>
              )}
              <p
                className={descriptionClass}
                style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
              >
                {item.description}
              </p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
