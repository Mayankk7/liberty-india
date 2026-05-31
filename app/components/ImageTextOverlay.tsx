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
  const titleFont = isHeritage
    ? 'var(--font-merriweather), Georgia, serif'
    : 'var(--font-playfair), Georgia, serif';
  const titleClass = isHeritage
    ? 'text-lg md:text-xl lg:text-2xl font-bold text-[#424242] mb-1'
    : 'text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-1';
  const subtitleClass = isHeritage
    ? 'text-xs md:text-sm text-[#424242] mb-2 italic'
    : 'text-xs md:text-sm text-gray-500 mb-2 italic';
  const descriptionClass = isHeritage
    ? 'text-sm md:text-base text-[#424242] leading-relaxed'
    : 'text-sm md:text-base text-gray-600 leading-relaxed';
  // Heritage banners are wide exports (~2.7:1); a fixed height + object-cover
  // fills the full-width container consistently. Default variant unchanged.
  const imageClass = isHeritage
    ? 'w-full h-[240px] sm:h-[320px] md:h-[414px] object-cover'
    : 'w-full h-auto object-cover';
  return (
    <div className="w-[90%] mx-auto flex flex-col">
      {items.map((item, index) => {
        const isRight =
          startPosition === 'right' ? index % 2 === 0 : index % 2 !== 0;

        return (
          <Reveal key={index} className="relative w-full overflow-visible mb-16 md:mb-20">
            <ImageWithLoader
              src={item.image}
              alt={item.alt}
              width={1600}
              height={900}
              className={imageClass}
            />
            {/* Text Overlay Card */}
            <div
              className={`absolute -bottom-6 sm:-bottom-8 md:-bottom-10 w-[90%] sm:w-[85%] md:w-[38%] bg-white px-5 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 shadow-md text-left ${
                isRight
                  ? 'right-3 sm:right-4 md:right-8 lg:right-12'
                  : 'left-3 sm:left-4 md:left-8 lg:left-12'
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
