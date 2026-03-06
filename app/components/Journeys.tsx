'use client';

import { useState } from 'react';
import Image from 'next/image';

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
  // Small Group Journeys
  {
    id: 'northwest-india',
    title: 'Northwest India & The City of Joy',
    description: 'Experience the exotic wonders of Golden Triangle, Varanasi and Kolkata as curated explorer delves beyond tourist stops. Explore the pink city of Jaipur.',
    image: '/images/itineraries/northwest-india.svg',
    tags: ['Luxury Hotels', 'On Tour Guidance', 'Local Guides', 'Small Group'],
    price: 5200,
    duration: '15 Days',
    type: 'small-group',
  },
  {
    id: 'gems-south-india',
    title: 'Gems of South India',
    description: 'See the best South India has to offer including the holy towns, coastal temples, historic hill stations, magnificent temples, Rajasthani water temples, rural Kerala, and pristine coastal shores in this unforgettable adventure.',
    image: '/images/itineraries/south-india.svg',
    tags: ['Luxury Hotels', 'On Tour Guidance', 'Small Group'],
    price: 3895,
    duration: '12 Days',
    type: 'small-group',
  },
  {
    id: 'colourful-rajasthan',
    title: 'Colourful Rajasthan',
    description: "Traverse inward to Rajasthan's regal palaces and royal heritage. From desert forts to palace lakes, experience majestic Jodhpur, Udaipur, Jaipur, Pushkar, Bikaner, and authentic cultural encounters.",
    image: '/images/itineraries/rajasthan.svg',
    tags: ['Cultural', 'Heritage', 'On Tour Guidance', 'Small Group'],
    price: 3695,
    duration: '14 Days',
    type: 'small-group',
  },
  {
    id: 'taj-tigers',
    title: 'Taj & Tigers',
    description: "Combine India's most iconic monument, pulsating wildlife, safari trails, rare tigers and wildlife, the UNESCO-listed Khajuraho temples, and Ganges river sunrise experience.",
    image: '/images/itineraries/taj-tigers.svg',
    tags: ['Wildlife', 'Heritage', 'Local Guides', 'Small Group'],
    price: 3250,
    duration: '10 Days',
    type: 'small-group',
  },
  {
    id: 'golden-triangle-classical',
    title: 'Golden Triangle of India (Classical)',
    description: "India takes you on a mesmerizing story. Spend three nights exploring Delhi's luminous Red Fort. Witness sunrise at the Taj Mahal, and immerse yourself in the sensory tapestry of Jaipur's pink bazaars and timeless Rajasthani hospitality.",
    image: '/images/itineraries/golden-triangle.svg',
    tags: ['Luxury Hotels', 'On Tour Guidance', 'Small Group'],
    price: 1575,
    duration: '6 Days',
    type: 'small-group',
  },
  {
    id: 'gems-north-india',
    title: 'Gems of North India',
    description: "Explore North India's sacred soil and cultural tapestry. From the red fort of Agra to Varanasi's timeless ghats, explore Hindu temples and shrines of Rishikesh and Haridwar.",
    image: '/images/itineraries/north-india.svg',
    tags: ['Spiritual', 'Cultural', 'On Tour Guidance', 'Small Group'],
    price: 2350,
    duration: '9 Days',
    type: 'small-group',
  },
  {
    id: 'india-natural-treasures',
    title: "India's Natural & Historical Treasures",
    description: "Delight in rich wildlife in Ranthambore, Agra's splendid Taj, and historic wildlife reserves like Corbett. World class lodges and custom experiences make this an unforgettable journey.",
    image: '/images/itineraries/natural-treasures.svg',
    tags: ['Wildlife', 'Nature', 'Luxury Hotels', 'Small Group'],
    price: 4450,
    duration: '12 Days',
    type: 'small-group',
  },
  {
    id: 'vibrant-gujarat',
    title: 'Vibrant Gujarat with Central India',
    description: "This begins is a rare combining heritage, wildlife, and culture. Discover Gujarat's hidden gems: Asiatic lions, serene Rann landscapes, cities of the Ahmedabad-Champaner-Sasan triangle.",
    image: '/images/itineraries/gujarat.svg',
    tags: ['Wildlife', 'Cultural', 'Heritage', 'Small Group'],
    price: 5505,
    duration: '14 Days',
    type: 'small-group',
  },
  {
    id: 'northeast-india-retreats',
    title: 'Northeast India Retreats',
    description: 'Experience the mystical face of India—remote and sacred landscapes of Tashigang, Assam, Kaziranga and more. Wildlife, traditions, and tribal culture await.',
    image: '/images/itineraries/northeast.svg',
    tags: ['Nature', 'Wildlife', 'Cultural', 'Small Group'],
    price: 4295,
    duration: '14 Days',
    type: 'small-group',
  },
  // Private Group Journeys
  {
    id: 'private-royal-rajasthan',
    title: 'Royal Rajasthan Private',
    description: 'An exclusive private journey through Rajasthan\'s royal heritage. Stay in palace hotels, enjoy private guided tours, and experience the land of kings with personalized attention.',
    image: '/images/itineraries/rajasthan.svg',
    tags: ['Luxury Hotels', 'Private Group', 'Heritage', 'Cultural'],
    price: 7500,
    duration: '12 Days',
    type: 'private',
  },
  {
    id: 'private-kerala-wellness',
    title: 'Kerala Wellness Retreat',
    description: 'Immerse yourself in Ayurvedic healing, houseboat stays in backwaters, and private beach experiences. A transformative wellness journey tailored to your needs.',
    image: '/images/itineraries/south-india.svg',
    tags: ['Luxury Hotels', 'Private Group', 'Nature', 'Spiritual'],
    price: 5800,
    duration: '10 Days',
    type: 'private',
  },
  {
    id: 'private-himalayan-escape',
    title: 'Himalayan Private Escape',
    description: 'Journey through the majestic Himalayas with private guides. From Shimla to Ladakh, experience breathtaking mountain vistas and Buddhist monasteries.',
    image: '/images/itineraries/northeast.svg',
    tags: ['Nature', 'Private Group', 'Spiritual', 'Cultural'],
    price: 8200,
    duration: '14 Days',
    type: 'private',
  },
  {
    id: 'private-wildlife-safari',
    title: 'Ultimate Wildlife Safari',
    description: 'Private wildlife expeditions across India\'s finest reserves. Track tigers in Ranthambore, spot elephants in Kaziranga, and enjoy luxury jungle lodges.',
    image: '/images/itineraries/taj-tigers.svg',
    tags: ['Wildlife', 'Private Group', 'Luxury Hotels', 'Nature'],
    price: 9500,
    duration: '15 Days',
    type: 'private',
  },
  {
    id: 'private-golden-triangle-luxury',
    title: 'Golden Triangle Luxury',
    description: 'Experience Delhi, Agra, and Jaipur in ultimate luxury. Private chauffeurs, five-star palace stays, and exclusive access to monuments at sunrise.',
    image: '/images/itineraries/golden-triangle.svg',
    tags: ['Luxury Hotels', 'Private Group', 'Heritage', 'Cultural'],
    price: 4500,
    duration: '7 Days',
    type: 'private',
  },
  {
    id: 'private-spiritual-varanasi',
    title: 'Spiritual Varanasi Journey',
    description: 'A deeply personal spiritual experience in India\'s holiest city. Private ceremonies, guided meditation, and exclusive access to ancient temples.',
    image: '/images/itineraries/north-india.svg',
    tags: ['Spiritual', 'Private Group', 'Cultural', 'Heritage'],
    price: 3800,
    duration: '6 Days',
    type: 'private',
  },
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
  const [activeTab, setActiveTab] = useState<'small-group' | 'private'>('small-group');

  const filteredJourneys = journeys.filter((journey) => journey.type === activeTab);

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

          {/* Toggle Buttons */}
          <div className="inline-flex rounded-full border border-gray-300 p-1 bg-gray-50">
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
          </div>
        </div>

        {/* Journeys Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredJourneys.map((journey) => (
            <div
              key={journey.id}
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block px-10 py-3.5 text-base font-medium text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            style={{
              backgroundColor: '#E07B39',
              fontFamily: 'var(--font-merriweather), Georgia, serif',
            }}
          >
            View All Journeys
          </a>
        </div>
      </div>
    </section>
  );
}
