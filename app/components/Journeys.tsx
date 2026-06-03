'use client';

import { useState } from 'react';
import Link from 'next/link';
import ItineraryCard from './ItineraryCard';
import Reveal from './Reveal';
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


export default function Journeys() {
  const [activeTab, setActiveTab] = useState<'small-group' | 'private'>('private');

  const filteredJourneys = journeys.filter((journey) => journey.type === activeTab);

  return (
    <section
      id="journeys"
      className="w-full bg-[#fdf8e8] py-16 md:py-20 lg:py-24"
      aria-labelledby="journeys-heading"
    >
      <div className="max-w-[90%] mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="text-center mb-10 md:mb-14">
          <h2
            id="journeys-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-8"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Journeys
          </h2>

          {/* Small / Private toggle */}
          <div className="inline-flex items-stretch overflow-hidden rounded-[10px] border border-black bg-white">
            <button
              onClick={() => setActiveTab('small-group')}
              className={`px-5 md:px-7 py-2.5 md:py-3 text-sm md:text-base text-center tracking-[0.3px] transition-colors duration-300 cursor-pointer ${
                activeTab === 'small-group'
                  ? 'bg-[#424242] text-[#fdf39f]'
                  : 'bg-white text-[#424242] hover:bg-gray-50'
              }`}
            >
              Small Group Journeys
            </button>
            <button
              onClick={() => setActiveTab('private')}
              className={`px-5 md:px-7 py-2.5 md:py-3 text-sm md:text-base text-center tracking-[0.3px] transition-colors duration-300 cursor-pointer ${
                activeTab === 'private'
                  ? 'bg-[#424242] text-[#fdf39f]'
                  : 'bg-white text-[#424242] hover:bg-gray-50'
              }`}
            >
              Private Journeys
            </button>
          </div>
        </Reveal>

        {/* Journeys Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredJourneys.map((journey, i) => {
            // Find matching itinerary by slug
            const matchingItinerary = itineraries.find(
              (itinerary) => itinerary.slug === journey.id
            );
            const metaLine = [
              journey.tags.slice(0, 2).join(' & '),
              'Best Time',
              matchingItinerary?.bestTime,
            ]
              .filter(Boolean)
              .join('  |  ');
            return (
              <Reveal key={journey.id} delay={(i % 3) * 80}>
                <ItineraryCard
                  image={journey.image}
                  alt={journey.title}
                  title={journey.title}
                  description={journey.description}
                  metaLine={metaLine}
                  priceLabel="Starting From"
                  priceValue={
                    matchingItinerary?.startingPrice ?? `€${journey.price.toLocaleString()}`
                  }
                  priceNote={matchingItinerary?.startingPriceNote ?? 'per person'}
                  duration={journey.duration}
                  href={
                    matchingItinerary ? `/itineraries/${matchingItinerary.slug}` : undefined
                  }
                />
              </Reveal>
            );
          })}
        </div>

        {/* View-All link to the dedicated /journeys page */}
        <div className="text-center mt-12">
          <Link
            href="/journeys"
            className="inline-block px-10 py-3.5 text-base font-medium text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            style={{
              backgroundColor: '#E07B39',
              fontFamily: 'var(--font-merriweather), Georgia, serif',
            }}
          >
            View All Journeys
          </Link>
        </div>
      </div>
    </section>
  );
}
