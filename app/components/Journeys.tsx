'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { itineraries } from '../itineraries/itineraries';

type JourneyTag = 'Luxury Hotels' | 'On Tour Guidance' | 'Local Guides' | 'Small Group' | 'Private Group' | 'Cultural' | 'Heritage' | 'Wildlife' | 'Nature' | 'Spiritual';

interface Journey {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: JourneyTag[];
  price: number;
  duration: string;
  type: 'small-group' | 'private';
}

const journeys: Journey[] = [
  // ...existing code...
  // Replace with mapped itineraries
  ...itineraries.map(it => ({
    id: it.slug,
    title: it.title,
    description: it.subtitle || it.overview?.[0] || '',
    image: it.heroImage || it.overviewImage || '',
    tags: (it.categories as JourneyTag[]),
    price: parseInt(it.startingPrice.replace(/[^\d]/g, '')) || 0,
    duration: it.duration,
    type: it.durationDays > 10 ? ('small-group' as 'small-group') : ('private' as 'private'), // Fix type assignment
  })),
];

const tagColors: Record<JourneyTag, string> = {
  'Luxury Hotels': 'bg-amber-100 text-amber-800',
  'On Tour Guidance': 'bg-blue-100 text-blue-800',
  'Local Guides': 'bg-green-100 text-green-800',
  'Small Group': 'bg-purple-100 text-purple-800',
  'Private Group': 'bg-rose-100 text-rose-800',
  'Cultural': 'bg-orange-100 text-orange-800',
  'Heritage': 'bg-red-100 text-red-800',
  'Wildlife': 'bg-emerald-100 text-emerald-800',
  'Nature': 'bg-teal-100 text-teal-800',
  'Spiritual': 'bg-indigo-100 text-indigo-800',
};

export default function Journeys() {
  const [activeTab, setActiveTab] = useState<'small-group' | 'private' | 'all'>('small-group');
  const [showFilters, setShowFilters] = useState(true);

  const filteredJourneys =
    activeTab === 'all'
      ? journeys
      : journeys.filter((journey) => journey.type === activeTab);

  return (
    <section
      id="journeys"
      className="w-full bg-white py-16 md:py-20 lg:py-24"
      aria-labelledby="journeys-heading"
    >
      <div className="max-w-[90%] mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2
            id="journeys-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-8"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Journeys
          </h2>

          {/* Toggle Buttons - hide when showing all */}
          {showFilters && (
            <div className="inline-flex rounded-full border border-gray-300 p-1 bg-gray-50">
              <button
                onClick={() => setActiveTab('private')}
                className={`px-6 py-2.5 md:px-8 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === 'private'
                    ? 'bg-[#E07B39] text-white shadow-md'
                    : 'bg-transparent text-gray-600 hover:text-gray-900'
                }`}
                style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
              >
                Private Group Journeys
              </button>
              <button
                onClick={() => setActiveTab('small-group')}
                className={`px-6 py-2.5 md:px-8 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === 'small-group'
                    ? 'bg-[#E07B39] text-white shadow-md'
                    : 'bg-transparent text-gray-600 hover:text-gray-900'
                }`}
                style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
              >
                Small Group Journeys
              </button>
            </div>
          )}
        </div>

        {/* Journeys Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredJourneys.map((journey) => {
            // Find matching itinerary by slug
            const matchingItinerary = itineraries.find(
              (itinerary) => itinerary.slug === journey.id
            );
            const linkHref = matchingItinerary
              ? `/itineraries/${matchingItinerary.slug}`
              : undefined;
            const cardContent = (
              <div
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <Image
                    src={journey.image}
                    alt={journey.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {journey.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className={`px-2 py-0.5 text-[10px] md:text-xs font-medium rounded-full ${tagColors[tag]}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg md:text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#E07B39] transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                  >
                    {journey.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm text-gray-600 font-light leading-relaxed mb-4 line-clamp-3"
                    style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                  >
                    {journey.description}
                  </p>

                  {/* Price & Duration */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <span
                        className="text-xl md:text-2xl font-semibold text-[#E07B39]"
                        style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                      >
                        ${journey.price.toLocaleString()}
                      </span>
                      <span className="text-sm text-gray-500 ml-1">per person</span>
                    </div>
                    <div className="text-right">
                      <span
                        className="text-sm font-medium text-gray-700"
                        style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                      >
                        {journey.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
            return linkHref ? (
              <Link href={linkHref} key={journey.id} passHref legacyBehavior>
                <a style={{ textDecoration: 'none' }}>{cardContent}</a>
              </Link>
            ) : (
              <div key={journey.id}>{cardContent}</div>
            );
          })}
        </div>

        {/* Toggle View Button */}
        <div className="text-center mt-12">
          {showFilters ? (
            <button
              className="inline-block px-10 py-3.5 text-base font-medium text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              style={{
                backgroundColor: '#E07B39',
                fontFamily: 'var(--font-merriweather), Georgia, serif',
              }}
              onClick={() => {
                setActiveTab('all');
                setShowFilters(false);
              }}
            >
              View All Journeys
            </button>
          ) : (
            <button
              className="inline-block px-10 py-3.5 text-base font-medium text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              style={{
                backgroundColor: '#E07B39',
                fontFamily: 'var(--font-merriweather), Georgia, serif',
              }}
              onClick={() => {
                setActiveTab('small-group');
                setShowFilters(true);
              }}
            >
              Hide Journeys
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
