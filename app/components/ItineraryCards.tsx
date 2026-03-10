'use client';

import Image from 'next/image';

interface ItineraryItem {
  image: string;
  alt: string;
  category: string;
  bestTime: string;
  title: string;
  description: string;
  price: number;
  duration: string;
}

interface ItineraryCardsProps {
  heading: string;
  subheading: string;
  items: ItineraryItem[];
  bgColor?: string;
}

export default function ItineraryCards({ heading, subheading, items, bgColor }: ItineraryCardsProps) {
  return (
    <section className="w-full py-14 md:py-20" style={{ backgroundColor: bgColor || 'white' }}>
      {/* Section Header */}
      <div className="w-[90%] max-w-5xl mx-auto text-center mb-10 md:mb-14">
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
      </div>

      {/* Cards Grid */}
      <div className="w-[90%] max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col cursor-pointer hover:shadow-xl transition-shadow duration-200"
            onClick={() => window.location.href = '/under-development'}
            tabIndex={0}
            role="button"
            onKeyPress={e => { if (e.key === 'Enter' || e.key === ' ') window.location.href = '/under-development'; }}
            aria-label={item.title + ' (under development)'}
          >
            {/* Image */}
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                className="object-cover"
              />
            </div>

            {/* Card Content */}
            <div className="pt-4 flex flex-col flex-1">
              {/* Category & Best Time */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className="text-xs md:text-sm text-gray-600"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  {item.category}
                </span>
                <span
                  className="text-xs md:text-sm"
                  style={{
                    fontFamily: 'var(--font-merriweather), Georgia, serif',
                    color: '#E07B39',
                  }}
                >
                  Best Time | {item.bestTime}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-lg md:text-xl font-semibold text-gray-900 mb-2"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm text-gray-600 leading-relaxed mb-4 flex-1"
                style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
              >
                {item.description}
              </p>

              {/* Price & Duration */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                <div>
                  <span
                    className="text-xs text-gray-500 block"
                    style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                  >
                    Starting from
                  </span>
                  <span className="flex items-baseline gap-1">
                    <span
                      className="text-lg md:text-xl font-bold"
                      style={{
                        fontFamily: 'var(--font-playfair), Georgia, serif',
                        color: '#E07B39',
                      }}
                    >
                      ${item.price.toLocaleString()}
                    </span>
                    <span
                      className="text-xs text-gray-500"
                      style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                    >
                      per person
                    </span>
                  </span>
                </div>
                <span
                  className="text-sm text-gray-700 font-medium"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  {item.duration}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
