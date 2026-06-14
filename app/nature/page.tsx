"use client";

import ImageWithLoader from '../components/ImageWithLoader';
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
      <section className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <ImageWithLoader
          src="/images/heroes/nature.jpg"
          alt="Nature Hero"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* 20% opacity overlay */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-7xl text-white font-semibold tracking-wide drop-shadow-lg" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Nature
          </h1>
        </div>
      </section>

      {/* Section Title */}
      <section className="w-full py-6 md:py-16 lg:py-20 bg-[#FDF8E8]">
        <div className="w-[90%] max-w-5xl mx-auto text-center mb-12 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] font-normal text-[#424242] leading-tight" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            The Raw Majesty of India&apos;s Landscapes
          </h2>
        </div>
        {/* Image Grid with Text Card.
         * Mobile: photos stack into a continuous vertical backdrop (grid-rows-3)
         * with the white banner centred on top, framed by photo bands (container
         * py); desktop keeps the 3-up triptych + overlay card. */}
        <div className="w-full relative h-auto py-32 sm:py-40 md:py-0 md:h-[550px] lg:h-[650px] xl:h-[720px]">
          {/* Images Grid */}
          <div className="absolute inset-0 grid grid-cols-1 grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-0 w-full h-full">
            <div className="relative h-full w-full">
              <ImageWithLoader
                sizes="(max-width: 768px) 100vw, 33vw"
                src="https://ik.imagekit.io/libertyindia/about-india/nature/picture-1.svg"
                alt="Nature 1"
                fill
                className="object-cover object-center"
                priority={false}
              />
            </div>
            <div className="relative h-full w-full">
              <ImageWithLoader
                sizes="(max-width: 768px) 100vw, 33vw"
                src="https://ik.imagekit.io/libertyindia/about-india/nature/picture-2.svg"
                alt="Nature 2"
                fill
                className="object-cover object-center"
                priority={false}
              />
            </div>
            <div className="relative h-full w-full">
              <ImageWithLoader
                sizes="(max-width: 768px) 100vw, 33vw"
                src="https://ik.imagekit.io/libertyindia/about-india/nature/picture-3.svg"
                alt="Nature 3"
                fill
                className="object-cover object-center"
                priority={false}
              />
            </div>
          </div>
          {/* Text Card — banner on top of the vertical photo backdrop (mobile), overlay (desktop) */}
          <div className="relative md:absolute mx-4 md:mx-0 md:top-12 lg:top-16 md:left-8 lg:left-12 w-auto md:w-[42%] bg-white px-6 py-6 md:px-9 md:py-8 shadow-md text-left z-10">
            <p className="text-lg md:text-xl lg:text-[22px] text-[#424242] leading-loose" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
              From the snow-capped peaks of the Himalayas to the palm-fringed backwaters of Kerala, India unfolds as a destination of extraordinary range. Retreat into mist-wrapped mountain sanctuaries for world-class wellness, track tigers through legendary national parks on bespoke safaris, or unwind on secluded shores where the Arabian Sea meets untouched sands—every landscape an invitation to journeys that restore, inspire, and transform.
            </p>
          </div>
        </div>
      </section>

      {/* Section Footer Text */}
      <section className="w-full pt-2 pb-4 md:pt-3 md:pb-6 lg:pt-4 lg:pb-8 bg-[#FDF8E8] flex items-center justify-center mb-8">
        <div className="w-full max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#424242]" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Liberty India&apos;s nature experiences immerse you in
          </h2>
        </div>
      </section>
      

      {/* Nature Destinations Section - Minimal spacing */}

      {/* Majestic Mountain Realms */}
      <section className="w-full bg-white py-6 md:py-2">
        <div className="w-[90%] max-w-5xl mx-auto text-center mb-12 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-6 font-bold text-[#424242]" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Majestic Mountain Realms
          </h2>
          <p className="text-sm md:text-sm text-[#424242] mt-1 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
            Journey through some of the world’s most inspiring mountain regions. From the stark, dramatic landscapes of Leh–Ladakh to the lush valleys of Kashmir, experience nature, culture, and adventure at breathtaking altitudes.
          </p>
        </div>
        <ImageTextOverlay
          variant="heritage"
          startPosition="left"
          items={[
            {
              image: 'https://ik.imagekit.io/libertyindia/about-india/nature/leh-ladakh.png',
              alt: 'Leh–Ladakh',
              title: 'Leh–Ladakh',
              description:
                "A high-altitude desert of dramatic landscapes, monasteries, and pristine lakes, offering one of India’s most extraordinary mountain experiences."
            },
            {
              image: 'https://ik.imagekit.io/libertyindia/about-india/nature/kashmir.png',
              alt: 'Kashmir',
              title: 'Kashmir',
              description:
                'Often called “Paradise on Earth”, Kashmir is known for serene valleys, snow-capped peaks, pristine lakes, and timeless Himalayan beauty.'
            },
          ]}
        />
      </section>

      {/* Coastal Serenity */}
      <section className="w-full bg-white py-6 md:py-2">
        <div className="w-[90%] max-w-5xl mx-auto text-center mb-12 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-6 font-bold text-[#424242]" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Coastal Serenity
          </h2>
          <p className="text-sm md:text-sm text-[#424242] mt-1 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
            India’s diverse coastline stretches from vibrant beach hubs to secluded tropical shores, offering sun, culture, and coastal serenity
          </p>
        </div>
        <ImageTextOverlay
          variant="heritage"
          startPosition="right"
          items={[
            {
              image: 'https://ik.imagekit.io/libertyindia/about-india/nature/andaman.svg',
              alt: 'Andaman Islands',
              title: 'Andaman Islands',
              description:
                'Crystal-clear waters, white sand beaches, and untouched natural beauty create a serene tropical escape.'
            },
            {
              image: 'https://ik.imagekit.io/libertyindia/about-india/nature/kovalam.png',
              alt: 'Kovalam',
              title: 'Kovalam',
              description:
                'A serene coastal retreat in Kerala, known for crescent-shaped beaches, swaying palms, and tranquil Arabian Sea sunsets.'
            },
          ]}
        />
      </section>

      {/* Timeless Desert Horizons */}
      <section className="w-full bg-white py-6 md:py-2">
        <div className="w-[90%] max-w-5xl mx-auto text-center mb-12 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-6 font-bold text-[#424242]" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Timeless Desert Horizons
          </h2>
          <p className="text-sm md:text-sm text-[#424242] mt-1 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
            The golden landscapes of India’s desert regions offer royal heritage, vast dunes, and unforgettable cultural experiences
          </p>
        </div>
        <ImageTextOverlay
          variant="heritage"
          startPosition="left"
          items={[
            {
              image: '/images/heroes/jaisalmer.jpg',
              alt: 'Jaisalmer',
              title: 'Jaisalmer',
              description:
                'The Golden City, famed for its sandstone fort, luxury desert camps, and sweeping Thar Desert dunes.'
            },
            {
              image: 'https://ik.imagekit.io/libertyindia/about-india/nature/jodhpur.png',
              alt: 'Jodhpur',
              title: 'Jodhpur',
              description:
                'The Blue City, where grand forts, desert landscapes, and royal heritage create a timeless desert experience.'
            },
          ]}
        />
      </section>

      {/* Serene Backwater Retreats */}
      <section className="w-full bg-white py-6 md:py-2">
        <div className="w-[90%] max-w-5xl mx-auto text-center mb-12 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-6 font-bold text-[#424242]" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Serene Backwater Escapes
          </h2>
          <p className="text-sm md:text-sm text-[#424242] mt-1 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
            Serene networks of lagoons and canals lined with lush greenery offer tranquil journeys through South India’s most peaceful landscapes
          </p>
        </div>
        <ImageTextOverlay
          variant="heritage"
          startPosition="left"
          items={[
            {
              image: 'https://ik.imagekit.io/libertyindia/about-india/nature/alleppy.svg',
              alt: 'Alleppey (Alappuzha)',
              title: 'Alleppey (Alappuzha)',
              description:
                'Known as the Venice of the East, famous for houseboat cruises through palm-lined backwater canals.'
            },
            {
              image: 'https://ik.imagekit.io/libertyindia/about-india/nature/kumarakom.png',
              alt: 'Kumarakom',
              title: 'Kumarakom',
              description:
                'A tranquil backwater retreat on Vembanad Lake, known for luxury resorts and birdlife.'
            },
          ]}
        />
      </section>

        <ItineraryCards
          heading={"Explore the Nature.\nExperience the Journey."}
          subheading="Discover India's landscapes — mountains, backwaters and forests — with journeys designed for nature lovers."
          bgColor="#FDF39F4D"
          category="Nature"
        />


      {/* Footer */}
      <Footer />
    </main>
  );
}
