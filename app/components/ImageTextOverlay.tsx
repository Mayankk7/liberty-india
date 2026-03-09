'use client';

import Image from 'next/image';

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
}

export default function ImageTextOverlay({ items, startPosition = 'right' }: ImageTextOverlayProps) {
  return (
    <div className="w-[90%] mx-auto flex flex-col">
      {items.map((item, index) => {
        const isRight =
          startPosition === 'right' ? index % 2 === 0 : index % 2 !== 0;

        return (
          <div key={index} className="relative w-full overflow-visible mb-16 md:mb-20">
            <Image
              src={item.image}
              alt={item.alt}
              width={1600}
              height={900}
              className="w-full h-auto object-cover"
            />
            {/* Text Overlay Card */}
            <div
              className={`absolute -bottom-8 md:-bottom-10 w-[85%] md:w-[38%] bg-white px-6 py-5 md:px-8 md:py-6 shadow-md text-left ${
                isRight
                  ? 'right-4 md:right-8 lg:right-12'
                  : 'left-4 md:left-8 lg:left-12'
              }`}
            >
              <h3
                className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-1"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                {item.title}
              </h3>
              {item.subtitle && (
                <p
                  className="text-xs md:text-sm text-gray-500 mb-2 italic"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  {item.subtitle}
                </p>
              )}
              <p
                className="text-sm md:text-base text-gray-600 leading-relaxed"
                style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
              >
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
