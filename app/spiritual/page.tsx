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
            src="https://ik.imagekit.io/libertyindia/about-india/spiritual/spiritual-bg.svg"
            alt="Spiritual India Hero"
            fill
            className="object-cover object-center"
            priority
          />
          {/* 20% opacity overlay */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-extrabold tracking-wide drop-shadow-lg"
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
                      src="https://ik.imagekit.io/libertyindia/about-india/spiritual/picture-1.png"
                      alt="Nature 1"
                      fill
                      className="object-cover object-center"
                      priority={false}
                    />
                  </div>
                  <div className="relative h-full w-full">
                    <Image
                      src="https://ik.imagekit.io/libertyindia/about-india/spiritual/picture-2.png"
                      alt="Nature 2"
                      fill
                      className="object-cover object-center"
                      priority={false}
                    />
                  </div>
                  <div className="relative h-full w-full">
                    <Image
                      src="https://ik.imagekit.io/libertyindia/about-india/spiritual/picture-3.png"
                      alt="Nature 3"
                      fill
                      className="object-cover object-center"
                      priority={false}
                    />
                  </div>
                </div>
                {/* Text Card Overlay */}
                <div className="absolute p-8 left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 bg-white px-6 md:px-8 lg:px-10 py-6 md:py-8 lg:py-10 flex items-center z-10 shadow-lg max-w-2xl" style={{ width: '40%' }}>
                  <p className="text-sm md:text-base lg:text-xl text-gray-700 leading-loose lg:leading-loose" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
                    India is the birthplace of humanity's greatest spiritual and philosophical traditions. For millennia, seekers have traveled here to explore the deepest questions: Who am I? What is the purpose of existence? How do we transcend suffering? These questions remain as vital today as they were thousands of years ago.
                  </p>
                </div>
              </div>
            </section>
      
            {/* Section Footer Text */}
            <section className="w-full pt-2 pb-4 md:pt-3 md:pb-6 lg:pt-4 lg:pb-8 bg-[#FDF8E8] flex items-center justify-center mb-8">
              <div className="w-full max-w-5xl mx-auto text-center">
                <h2 className="text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-normal text-gray-900 leading-tight" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
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
              image: 'https://ik.imagekit.io/libertyindia/about-india/spiritual/varanasi.svg',
              alt: 'Varanasi Ghats',
              title: 'Varanasi',
              description: 'The holiest city for Hindus, where the Ganges River is believed to cleanse souls of past karma. Witness evening aarti (prayer ceremonies) on the ghats. (Uttar Pradesh)',
            },
            {
              image: 'https://ik.imagekit.io/libertyindia/about-india/spiritual/haridwar.png',
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
              image: 'https://ik.imagekit.io/libertyindia/about-india/spiritual/bodh-gaya.png',
              alt: 'Bodh Gaya Mahabodhi Temple',
              title: 'Bodh Gaya',
              description: 'The place where Buddha attained enlightenment under the Bodhi Tree; the Mahabodhi Temple is one of the world’s oldest brick temples. (Bihar)',
            },
            {
              image: 'https://ik.imagekit.io/libertyindia/about-india/spiritual/sarnath.svg',
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
              image: 'https://ik.imagekit.io/libertyindia/about-india/spiritual/golden-temple.png',
              alt: 'Golden Temple Amritsar',
              title: 'Golden Temple',
              description: 'The most revered gurdwara (Sikh temple), featuring the Langar (community kitchen) that serves free meals to all visitors regardless of faith or status. (Amritsar, Punjab)',
            },
          ]}
        />
      </section>


        <ItineraryCards
          heading={"Explore the Culture\nExperience the Journey"}
          subheading="Immerse yourself in India's living traditions with journeys designed for the culturally curious"
          bgColor="#FDF39F4D"
          items={[
            {
              image: 'https://ik.imagekit.io/libertyindia/itineraries/north-east/main-bg.svg',
              alt: 'Northeast India & The City of Joy',
              category: 'Culture',
              bestTime: 'October – March',
              title: 'Northeast India & The City of Joy',
              description: 'Experience the iconic wonders of India’s Golden Triangle. Visit the Taj Mahal at sunrise, explore Delhi’s historic sites, and experience the pink city of Jaipur.',
              price: 1330,
              duration: '13 Days',
              slug: 'northeast-india-city-of-joy',
            },
            {
              image: 'https://ik.imagekit.io/libertyindia/itineraries/classical-golden-triangle/main-bg.png',
              alt: 'The Classical Golden Triangle of India',
              category: 'Culture',
              bestTime: 'October – March',
              title: 'The Classical Golden Triangle of India',
              description: 'Experience the iconic wonders of India’s Golden Triangle. Visit the Taj Mahal at sunrise, explore Delhi’s historic sites, and experience the pink city of Jaipur.',
              price: 1013,
              duration: '7 Days',
              slug: 'classical-golden-triangle',
            },
            {
              image: 'https://ik.imagekit.io/libertyindia/itineraries/south-india-tamil-nadu/main-bg.png',
              alt: 'Unveiling the Enchanting South — Tamil Nadu',
              category: 'Culture',
              bestTime: 'October – March',
              title: 'Unveiling the Enchanting South — Tamil Nadu',
              description: 'Discover the magnificent temple architecture, French colonial heritage, and living craft traditions of Tamil Nadu.',
              price: 880,
              duration: '10 Days',
              slug: 'unveiling-the-enchanting-south-tamil-nadu',
            },
          ]}
        />


      {/* Footer */}
      <Footer />
    </main>
  );
}
