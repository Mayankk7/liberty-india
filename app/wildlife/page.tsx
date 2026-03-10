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
        <div className="relative w-[102vw] h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <Image
            src="/images/about-india/wildlife/wildlife.svg"
            alt="Wildlife India Hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-light tracking-wide drop-shadow-lg"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Wildlife
            </h1>
          </div>
        </div>
      </section>

      {/* Wildlife Title Section */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-[#FDF8E8]">
        <div className="w-full max-w-5xl mt-4 mx-auto text-center">
          <h2 className="text-2xl  md:text-3xl lg:text-4xl xl:text-[2.5rem] font-normal text-gray-900 leading-tight" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Encounter with India's Magnificient Creatures
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
                      src="/images/about-india/wildlife/picture-1.svg"
                      alt="Nature 1"
                      fill
                      className="object-cover object-center"
                      priority={false}
                    />
                  </div>
                  <div className="relative h-full w-full">
                    <Image
                      src="/images/about-india/wildlife/picture-2.svg"
                      alt="Nature 2"
                      fill
                      className="object-cover object-center"
                      priority={false}
                    />
                  </div>
                  <div className="relative h-full w-full">
                    <Image
                      src="/images/about-india/wildlife/picture-3.svg"
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
                  Experience India's magnificent wildlife in its natural habitat with Liberty India's expert-guided journeys
                </h2>
              </div>
            </section>

      <div className="relative w-full min-h-150 md:min-h-175 lg:min-h-200 mb-8 md:mb-12 lg:mb-16">
              {/* Layer 1: Background Collage - full width edge to edge */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/images/about-india/wildlife/collage.png"
                  alt="Collage of India's diverse destinations including heritage sites, wildlife, culture, and natural landscapes"
                  fill
                  className="object-cover object-center w-full h-full"
                  sizes="100vw"
                  priority
                />
              </div>
      
              {/* Layer 2: India Map Overlay - semi-transparent white silhouette */}
              <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none -mt-4 md:-mt-5 lg:-mt-6">
                <Image
                  src="/images/about-india/wildlife/lion.svg"
                  alt="India map silhouette"
                  width={600}
                  height={700}
                  className="w-[56%] md:w-[47%] lg:w-[42%] h-auto object-contain drop-shadow-lg"
                  priority
                />
              </div>
      
              {/* Layer 3: Text Content - left-aligned, centered within the map */}
              
            </div>


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
