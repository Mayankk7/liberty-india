"use client";

import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageTextOverlay from '../components/ImageTextOverlay';
import ItineraryCards from '../components/ItineraryCards';

export default function SpiritualPage() {
  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Navbar */}
      <Navbar variant="white" />

      {/* Hero Section */}
      <section className="relative w-full pt-0">
        <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <Image
            src="/images/about-india/spiritual/spiritual-bg.svg"
            alt="Spiritual India Hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-light tracking-wide drop-shadow-lg"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Spiritual
            </h1>
          </div>
        </div>
      </section>

      {/* Spirituality Title Section */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-[#FDF8E8]">
        <div className="w-full max-w-5xl mt-4 mx-auto text-center">
          <h2 className="text-2xl  md:text-3xl lg:text-4xl xl:text-[2.5rem] font-normal text-gray-900 leading-tight" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            The Eternal Quest for Understanding
          </h2>
        </div>
      </section>

      {/* Nature Destinations Section - Minimal spacing */}
            {/* Section Title */}
            <section className="w-full py-8 md:py-12 lg:py-16 bg-[#FDF8E8]">
              {/* Image Grid with Text Card */}
              <div className="w-full relative h-96 md:h-[420px] lg:h-[500px] xl:h-[560px]">
                {/* Images Grid */}
                <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-0 w-full h-full">
                  <div className="relative h-full w-full">
                    <Image
                      src="/images/about-india/spiritual/picture-1.svg"
                      alt="Nature 1"
                      fill
                      className="object-cover object-center"
                      priority={false}
                    />
                  </div>
                  <div className="relative h-full w-full">
                    <Image
                      src="/images/about-india/spiritual/picture-2.svg"
                      alt="Nature 2"
                      fill
                      className="object-cover object-center"
                      priority={false}
                    />
                  </div>
                  <div className="relative h-full w-full">
                    <Image
                      src="/images/about-india/spiritual/picture-3.svg"
                      alt="Nature 3"
                      fill
                      className="object-cover object-center"
                      priority={false}
                    />
                  </div>
                </div>
                {/* Text Card Overlay */}
                <div className="absolute p-8 left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 bg-white px-6 md:px-8 lg:px-10 py-6 md:py-8 lg:py-10 flex items-center z-10 shadow-lg max-w-lg" style={{ width: '40%' }}>
                  <p className="text-sm md:text-base lg:text-[15px] text-gray-700 leading-loose lg:leading-loose" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
                    India is the birthplace of humanity's greatest spiritual and philosophical traditions. For millennia, seekers have traveled here to explore the deepest questions: Who am I? What is the purpose of existence? How do we transcend suffering? These questions remain as vital today as they were thousands of years ago.
                  </p>
                </div>
              </div>
            </section>
      
            {/* Section Footer Text */}
            <section className="w-full pt-2 pb-4 md:pt-3 md:pb-6 lg:pt-4 lg:pb-8 bg-[#FDF8E8] flex items-center justify-center mb-8">
              <div className="w-full max-w-5xl mx-auto text-center">
                <h2 className="text-lg md:text-lg lg:text-lg xl:text-lg font-normal text-gray-900 leading-tight" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                  Liberty India connects you with India's spiritual dimensions authentically and respectfully
                </h2>
              </div>
            </section>

      {/* Majestic Mountain Realms */}
      <section className="w-full mt-4 bg-white pt-2 pb-2">
        <div className="w-full max-w-5xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 font-semibold text-gray-900" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Sacred Hindu Pilgrimage Sites
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mt-1 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
            Destinations of profound spiritual significance in Hindu tradition
          </p>
        </div>
        <ImageTextOverlay
          startPosition="left"
          items={[
            {
              image: '/images/about-india/spiritual/varanasi.svg',
              alt: 'Varanasi Ghats',
              title: 'Varanasi',
              description: 'The holiest city for Hindus, where the Ganges River is believed to cleanse souls of past karma. Witness evening aarti (prayer ceremonies) on the ghats. (Uttar Pradesh)',
            },
            {
              image: '/images/about-india/spiritual/haridwar.svg',
              alt: 'Haridwar Ghat',
              title: 'Haridwar',
              description: 'The northern gateway to the Himalayas, where the Ganges emerges from mountains; pilgrims bathe in sacred waters during the Kumbh Mela. (Uttarakhand)',
            },
          ]}
        />
      </section>

      {/* Coastal Serenity */}
      <section className="w-full bg-white pt-2 pb-2">
        <div className="w-full max-w-5xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 font-semibold text-gray-900" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Buddhist Sacred Journey
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mt-1 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
            Following the footsteps of Buddha and the development of Buddhism in India
          </p>
        </div>
        <ImageTextOverlay
          startPosition="left"
          items={[
            {
              image: '/images/about-india/spiritual/bodh-gaya.svg',
              alt: 'Bodh Gaya Mahabodhi Temple',
              title: 'Bodh Gaya',
              description: 'The place where Buddha attained enlightenment under the Bodhi Tree; the Mahabodhi Temple is one of the world’s oldest brick temples. (Bihar)',
            },
            {
              image: '/images/about-india/spiritual/sarnath.svg',
              alt: 'Sarnath Stupa',
              title: 'Sarnath',
              description: 'Where Buddha delivered his first sermon, now featuring the iconic Lion Capital. (Uttar Pradesh)',
            },
          ]}
        />
      </section>

      {/* Timeless Desert Horizons */}
      <section className="w-full bg-white pt-2 pb-2">
        <div className="w-full max-w-5xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 font-semibold text-gray-900" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Sikh Spirituality & The Golden Temple
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mt-1 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
            The Golden Temple of Amritsar represents Sikhism's core principles of equality and community
          </p>
        </div>
        <ImageTextOverlay
          startPosition="right"
          items={[
             {
              image: '/images/about-india/spiritual/golden-temple.svg',
              alt: 'Golden Temple Amritsar',
              title: 'Golden Temple',
              description: 'The most revered gurdwara (Sikh temple), featuring the Langar (community kitchen) that serves free meals to all visitors regardless of faith or status. (Amritsar, Punjab)',
            },
          ]}
        />
      </section>


      <ItineraryCards
              heading={"Explore the Spirituality\nExperience the Journey"}
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
