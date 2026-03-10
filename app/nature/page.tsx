"use client";

import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageTextOverlay from '../components/ImageTextOverlay';
import ItineraryCards from '../components/ItineraryCards';

export default function NaturePage() {
  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Navbar */}
      <Navbar variant="white" />

      {/* Hero Section */}
      <section className="relative w-[102vw] h-[50vh] md:h-[60vh] lg:h-[70vh] left-0 right-0 mx-0">
        <Image
          src="/images/about-india/nature/nature-bg.svg"
          alt="Nature Hero"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-light tracking-wide drop-shadow-lg" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Nature
          </h1>
        </div>
      </section>

      {/* Section Title */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-[#FDF8E8]">
        <div className="w-full max-w-5xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] font-normal text-gray-900 leading-tight" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            The Raw Majesty of India's Landscapes
          </h2>
        </div>
        {/* Image Grid with Text Card */}
        <div className="w-full relative h-96 md:h-[420px] lg:h-[500px] xl:h-[560px]">
          {/* Images Grid */}
          <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-0 w-full h-full">
            <div className="relative h-full w-full">
              <Image
                src="/images/about-india/nature/picture-1.svg"
                alt="Nature 1"
                fill
                className="object-cover object-center"
                priority={false}
              />
            </div>
            <div className="relative h-full w-full">
              <Image
                src="/images/about-india/nature/picture-2.svg"
                alt="Nature 2"
                fill
                className="object-cover object-center"
                priority={false}
              />
            </div>
            <div className="relative h-full w-full">
              <Image
                src="/images/about-india/nature/picture-3.svg"
                alt="Nature 3"
                fill
                className="object-cover object-center"
                priority={false}
              />
            </div>
          </div>
          {/* Text Card Overlay */}
          <div className="absolute left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 bg-white px-6 md:px-8 lg:px-10 py-6 md:py-8 lg:py-10 flex items-center z-10 shadow-lg max-w-lg" style={{ width: '40%' }}>
            <p className="text-sm md:text-base lg:text-[15px] text-gray-700 leading-loose lg:leading-loose" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              From the snow-capped peaks of the Himalayas to the tropical shores of Kerala, India encompasses nearly every ecosystem on Earth. Nature in India isn't just scenery—it's a teacher of patience, cycles, and the interconnectedness of all life.
            </p>
          </div>
        </div>
      </section>

      {/* Section Footer Text */}
      <section className="w-full pt-2 pb-4 md:pt-3 md:pb-6 lg:pt-4 lg:pb-8 bg-[#FDF8E8] flex items-center justify-center mb-8">
        <div className="w-full max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] font-normal text-gray-900 leading-tight" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Liberty India's nature experiences immerse you in
          </h2>
        </div>
      </section>
      

      {/* Nature Destinations Section - Minimal spacing */}

      {/* Majestic Mountain Realms */}
      <section className="w-full bg-white pt-2 pb-2">
        <div className="w-full max-w-5xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 font-semibold text-gray-900" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Majestic Mountain Realms
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mt-1 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
            Early structures primarily used wood, later transitioning to rock-cut, such as the Ajanta and Ellora caves (Hindu, Buddhist, Jain) and the monolithic temples at Mahabalipuram
          </p>
        </div>
        <ImageTextOverlay
          startPosition="right"
          items={[
            {
              image: '/images/about-india/nature/leh-ladakh.svg',
              alt: 'Leh–Ladakh',
              title: 'Leh–Ladakh',
              description:
                "A high-altitude desert of dramatic landscapes, monasteries, and pristine lakes, offering one of India’s most extraordinary mountain experiences."
            },
            {
              image: '/images/about-india/nature/kashmir.svg',
              alt: 'Kashmir',
              title: 'Kashmir',
              description:
                'Often called “Paradise on Earth”, Kashmir is known for serene valleys, snow-capped peaks, pristine lakes, and timeless Himalayan beauty.'
            },
          ]}
        />
      </section>

      {/* Coastal Serenity */}
      <section className="w-full bg-white pt-2 pb-2">
        <div className="w-full max-w-5xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 font-semibold text-gray-900" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Coastal Serenity
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mt-1 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
            India’s diverse coastline stretches from vibrant beach hubs to secluded tropical shores, offering sun, culture, and coastal serenity
          </p>
        </div>
        <ImageTextOverlay
          startPosition="left"
          items={[
            {
              image: '/images/about-india/nature/andaman.svg',
              alt: 'Andaman Islands',
              title: 'Andaman Islands',
              description:
                'Crystal-clear waters, white sand beaches, and untouched natural beauty create a serene tropical escape.'
            },
            {
              image: '/images/about-india/nature/kovalam.svg',
              alt: 'Kovalam',
              title: 'Kovalam',
              description:
                'A serene coastal retreat in Kerala, known for crescent-shaped beaches, swaying palms, and tranquil Arabian Sea sunsets.'
            },
          ]}
        />
      </section>

      {/* Timeless Desert Horizons */}
      <section className="w-full bg-white pt-2 pb-2">
        <div className="w-full max-w-5xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 font-semibold text-gray-900" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Timeless Desert Horizons
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mt-1 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
            The golden landscapes of India’s desert regions offer royal heritage, vast dunes, and unforgettable cultural experiences
          </p>
        </div>
        <ImageTextOverlay
          startPosition="right"
          items={[
            {
              image: '/images/about-india/nature/jaisalmer.svg',
              alt: 'Jaisalmer',
              title: 'Jaisalmer',
              description:
                'The Golden City, famed for its sandstone fort, luxury desert camps, and sweeping Thar Desert dunes.'
            },
            {
              image: '/images/about-india/nature/jodhpur.svg',
              alt: 'Jodhpur',
              title: 'Jodhpur',
              description:
                'The Blue City, where grand forts, desert landscapes, and royal heritage create a timeless desert experience.'
            },
          ]}
        />
      </section>

      {/* Serene Backwater Retreats */}
      <section className="w-full bg-white pt-2 pb-2">
        <div className="w-full max-w-5xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 font-semibold text-gray-900" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Serene Backwater Retreats
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mt-1 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
            Serene networks of lagoons and canals lined with lush greenery offer tranquil journeys through South India’s most peaceful landscapes
          </p>
        </div>
        <ImageTextOverlay
          startPosition="left"
          items={[
            {
              image: '/images/about-india/nature/alleppy.svg',
              alt: 'Alleppey (Alappuzha)',
              title: 'Alleppey (Alappuzha)',
              description:
                'Known as the Venice of the East, famous for houseboat cruises through palm-lined backwater canals.'
            },
            {
              image: '/images/about-india/nature/kumarakom.svg',
              alt: 'Kumarakom',
              title: 'Kumarakom',
              description:
                'A tranquil backwater retreat on Vembanad Lake, known for luxury resorts and birdlife.'
            },
          ]}
        />
      </section>

      {/* Itinerary Cards Section */}
      <ItineraryCards
        heading={"Explore the Nature\nExperience the Journey"}
        subheading={"Travel through centuries of history with journeys designed for discerning explorers"}
        bgColor="#FDF8E8"
        items={[
          {
            image: "/images/itineraries/taj-tigers.svg",
            alt: "Taj & Tigers",
            category: "Culture & Nature",
            bestTime: "October - March",
            title: "Taj & Tigers",
            description: "Combine India's most iconic monument with thrilling wildlife. This 9-day journey features the Taj Mahal, royal Rajasthan heritage, and Ranthambore tiger reserve experiences.",
            price: 1330,
            duration: "13 Days",
          },
          {
            image: "/images/itineraries/golden-triangle.svg",
            alt: "Golden Triangle of India (Classical)",
            category: "Adventure Tour",
            bestTime: "October - March",
            title: "Golden Triangle of India (Classical)",
            description: "India's most classic itinerary in 7 days. Experience Delhi history, Agra's romance with the Taj Mahal, and Jaipur's royal splendour in this perfect introduction to India.",
            price: 1330,
            duration: "13 Days",
          },
          {
            image: "/images/itineraries/north-india.svg",
            alt: "Gems of North India",
            category: "Nature & Culture",
            bestTime: "October - March",
            title: "Gems of North India",
            description: "Explore North India's spiritual and natural treasures. From the sacred Ganges in Varanasi to the Himalayan foothills and royal palaces of Rajasthan.",
            price: 1330,
            duration: "13 Days",
          },
        ]}
      />

      {/* Footer */}
      <Footer />
    </main>
  );
}
