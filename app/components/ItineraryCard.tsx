'use client';

import ImageWithLoader from './ImageWithLoader';
import Link from 'next/link';

interface ItineraryCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  /** Pre-joined meta line, e.g. "Heritage & Culture  |  Best Time  |  October – March" */
  metaLine: string;
  priceLabel: string; // "Starting From"
  priceValue: string; // "€390" / "$1,200" — caller formats
  priceNote: string; // "per person"
  duration: string; // "7 Days"
  /** When present the card links here; otherwise it routes to /under-development. */
  href?: string;
  /** Optional pill rendered top-left over the image (e.g. "Private Group Journeys"). */
  badge?: string;
  /** Optional card background color. Defaults to white. */
  bgColor?: string;
}

/**
 * Shared itinerary card — the single card design used everywhere on the site
 * (homepage Journeys + every topic page via ItineraryCards). Keep this in sync
 * across the site rather than re-implementing card markup per section.
 */
export default function ItineraryCard({
  image,
  alt,
  title,
  description,
  metaLine,
  priceLabel,
  priceValue,
  priceNote,
  duration,
  href,
  badge,
  bgColor,
}: ItineraryCardProps) {
  const card = (
    <div
      className="group rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100 flex flex-col h-full"
      style={{ backgroundColor: bgColor ?? '#ffffff' }}
    >
      {/* Image */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <ImageWithLoader
          src={image}
          alt={alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        {badge && (
          <span
            className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[#424242] text-[11px] md:text-xs font-medium tracking-wide px-3 py-1.5 rounded-full shadow-sm"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
          >
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 flex flex-col flex-1">
        {/* Meta line: category | Best Time | season */}
        <p
          className="text-[11px] md:text-xs text-[#E07B39] font-medium tracking-wide mb-2"
          style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
        >
          {metaLine}
        </p>

        {/* Title */}
        <h3
          className="text-lg md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#E07B39] transition-colors duration-300"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="text-sm text-gray-600 font-light leading-relaxed mb-4 line-clamp-3"
          style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
        >
          {description}
        </p>

        {/* Price & Duration */}
        <div className="mt-auto flex items-end justify-between pt-4 border-t border-gray-100">
          <div>
            <span
              className="block text-[11px] md:text-xs text-gray-500 mb-0.5"
              style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
            >
              {priceLabel}
            </span>
            <span
              className="text-base md:text-lg font-semibold text-[#E07B39]"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              {priceValue}
            </span>
            <span className="text-xs text-gray-500 ml-1">{priceNote}</span>
          </div>
          <div className="text-right">
            <span
              className="text-sm font-medium text-gray-700"
              style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
            >
              {duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="h-full block" style={{ textDecoration: 'none' }}>
        {card}
      </Link>
    );
  }

  return (
    <div
      className="h-full"
      role="button"
      tabIndex={0}
      aria-label={`${title} (under development)`}
      onClick={() => {
        window.location.href = '/under-development';
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.location.href = '/under-development';
        }
      }}
    >
      {card}
    </div>
  );
}
