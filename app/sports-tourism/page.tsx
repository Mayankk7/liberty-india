"use client";

import Image from 'next/image';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ItineraryCards from '../components/ItineraryCards';


export default function EducationToursPage() {
  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Navbar */}
      <Navbar variant="white" />

      {/* Hero Section */}
      <section className="relative w-[105vw] bg-[#FDF8E8] pt-0">
        <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <Image
            src="/images/services/sports/sports-bg.svg"
            alt="Sports Tourism Hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-light tracking-wide drop-shadow-lg"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Sports Tourism
            </h1>
          </div>
        </div>
      </section>


      {/* Sports Tourism Title Section */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-[#FDF8E8]">
        <div className="w-full max-w-5xl mx-auto text-center">
          <p className="text-5xl md:text-5xl lg:text-5xl xl:text-[2.5rem] font-normal text-gray-900 leading-tight" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Celebrating Excellence Through Transformation
          </p>
        </div>
      </section>


      <section className="bg-[#FDF8E8] py-0 m-0 p-0 w-screen max-w-none overflow-x-hidden">
        <div className="relative w-screen max-w-none m-0 p-0" style={{height:'700px'}}>
          <div className="grid grid-cols-1 md:grid-cols-3 w-screen h-full m-0 p-0">
            <div className="relative h-full w-full">
              <Image src="/images/services/sports/picture-1.svg" alt="Sports Tourism 1" fill className="object-cover object-center" priority={false} />
            </div>
            <div className="relative h-full w-[full] md:-ml-8">
              <Image src="/images/services/sports/picture-2.svg" alt="Sports Tourism 2" fill className="object-cover object-center" priority={false} />
            </div>
            <div className="relative h-full w-full">
              <Image src="/images/services/sports/picture-3.svg" alt="Sports Tourism 3" fill className="object-cover object-center" priority={false} />
            </div>
          </div>
          {/* Overlay Card */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 bg-white px-12 py-16 md:px-20 md:py-20 shadow-lg max-w-xl text-left" style={{fontFamily:'var(--font-merriweather), Georgia, serif'}}>
            <p className="text-lg text-gray-800 leading-relaxed">
              Incentive travel is about recognition and renewal. It's about bringing together your top performers in an environment where they can celebrate achievement, strengthen relationships, and return home energized and recommitted.
            </p>
          </div>
        </div>
      </section>

            <section className="w-full bg-white py-12">
              <div className="max-w-[90vw] mx-auto">
                <h2 className="text-center text-2xl md:text-3xl mt-4 font-semibold mb-2" style={{fontFamily:'var(--font-playfair), Georgia, serif'}}>
                  Special Interest Categories We Curate
                </h2>
                <p className="text-center mt-4 text-base md:text-lg text-gray-700 mb-8" style={{fontFamily:'var(--font-merriweather), Georgia, serif'}}>
                  India offers exquisite settings where business meets elegance-blending world-class venues with culture, leisure and wellness.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-8 grid-rows-2 gap-0 rounded overflow-hidden shadow-lg w-full" style={{minHeight:'900px'}}>
                  {/* Top Left */}
                  <div className="relative h-100 md:h-112.5 overflow-hidden">
                    <Image src="/images/services/sports/yoga.svg" alt="Shore Excursion Design & Execution" fill className="object-cover object-center" priority={false} />
                    <div className="absolute bottom-0 right-0 w-2/3 min-h-27.5 bg-white/95 border-t border-r border-gray-200 p-6 md:p-8 z-10 flex flex-col justify-end" style={{boxShadow:'0 4px 24px 0 rgba(0,0,0,0.04)'}}>
                      <h3 className="font-semibold text-lg md:text-xl mb-1 text-left">Yoga Competitions</h3>
                      <p className="text-gray-700 text-sm md:text-base text-left whitespace-normal wrap-break-word">Participate in or attend yoga festivals and competitions</p>
                    </div>
                  </div>
                  {/* Top Right */}
                  <div className="relative h-100 md:h-112.5 overflow-hidden">
                    <Image src="/images/services/sports/martial-arts.svg" alt="Ground Transportation & Logistics" fill className="object-cover object-center" priority={false} />
                    <div className="absolute bottom-0 left-0 w-2/3 min-h-27.5 bg-white/95 border-t border-l border-gray-200 p-6 md:p-8 text-left z-10 flex flex-col justify-end" style={{boxShadow:'0 4px 24px 0 rgba(0,0,0,0.04)'}}>
                      <h3 className="font-semibold text-lg md:text-xl mb-1 text-left">Martial Arts Training</h3>
                      <p className="text-gray-700 text-sm md:text-base text-left whitespace-normal wrap-break-word">Kalari payattu (Kerala martial art) training</p>
                    </div>
                  </div>
                  {/* Bottom Left */}
                  <div className="relative h-100 md:h-112.5 overflow-hidden">
                    <Image src="/images/services/sports/equestrian.svg" alt="Meet & Greet & Guest Assistance" fill className="object-cover object-center" priority={false} />
                    <div className="absolute top-0 right-0 w-2/3 min-h-27.5 bg-white/95 border-b border-r border-gray-200 p-6 md:p-11 z-10 flex flex-col justify-start" style={{boxShadow:'0 4px 24px 0 rgba(0,0,0,0.04)'}}>
                      <h3 className="font-semibold text-lg md:text-xl mb-1 text-left">Equestrian Events</h3>
                      <p className="text-gray-700 text-sm md:text-base text-left whitespace-normal wrap-break-word">Polo tournaments and training</p>
                    </div>
                  </div>
                  {/* Bottom Right */}
                  <div className="relative h-100 md:h-112.5 overflow-hidden">
                    <Image src="/images/services/sports/running.svg" alt="Pre & Post Tours" fill className="object-cover object-center" priority={false} />
                    <div className="absolute top-0 left-0 w-2/3 min-h-27.5 bg-white/95 border-b border-l border-gray-200 p-6 md:p-11 text-left z-10 flex flex-col justify-start" style={{boxShadow:'0 4px 24px 0 rgba(0,0,0,0.04)'}}>
                      <h3 className="font-semibold text-lg md:text-xl mb-1 text-left">Running Events</h3>
                      <p className="text-gray-700 text-sm md:text-base text-left whitespace-normal wrap-break-word">Marathon and running events across India</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

      {/* Signature Cruise Experiences Section */}
     
      {/* Explore Programs Section */}
      <section className="w-full bg-[#FDF8E8] py-16 flex flex-col items-center">
        <ItineraryCards
          heading="Explore Programs"
          subheading="Travel through centuries of history with journeys designed for discerning explorers"
          items={[
            {
              image: '/images/itineraries/taj-tigers.svg',
              alt: 'Taj & Tigers',
              category: 'Culture & History',
              bestTime: 'October - March',
              title: 'Taj & Tigers',
              description: "Combine India's most iconic monument with thrilling wildlife. This 9-day journey features the Taj Mahal, royal Rajasthan heritage, and India's famous tiger reserve experiences.",
              price: 1850,
              duration: '10 Days',
            },
            {
              image: '/images/itineraries/golden-triangle.svg',
              alt: 'Golden Triangle of India (Classical)',
              category: 'Adventure Tour',
              bestTime: 'October - March',
              title: 'Golden Triangle of India (Classical)',
              description: "India's most classic itinerary in 7 days. Experience Delhi's history, Agra's romance with the Taj Mahal, and Jaipur's royal splendor in this perfect introduction to India.",
              price: 2150,
              duration: '10 Days',
            },
            {
              image: '/images/itineraries/north-india.svg',
              alt: 'Gems of North India',
              category: 'Culture & History',
              bestTime: 'October - March',
              title: 'Gems of North India',
              description: "Explore North India's spiritual and architectural treasures. From the sacred Ganges in Varanasi to the temples of Khajuraho and royal palaces of Rajasthan.",
              price: 2350,
              duration: '10 Days',
            },
          ]}
          bgColor="#FDF8E8"
        />
      </section>
      <Footer />
    </main>
  );
}
