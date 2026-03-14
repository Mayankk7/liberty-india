"use client";

import Image from 'next/image';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ItineraryCards from '../components/ItineraryCards';


export default function CruiseHandlingPage() {
  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Navbar */}
      <Navbar variant="white" />

      {/* Hero Section */}
      <section className="relative w-[105vw] bg-[#FDF8E8] pt-0">
        <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <Image
            src="https://ik.imagekit.io/libertyindia/services/cruise/cruise-bg.jpg"
            alt="Cruise Handling Hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-light tracking-wide drop-shadow-lg"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Cruise Handling
            </h1>
          </div>
        </div>
      </section>


      {/* Wellness Title Section */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-[#FDF8E8]">
        <div className="w-full max-w-5xl mx-auto text-center">
          <p className="text-5xl md:text-5xl lg:text-5xl xl:text-[2.5rem] font-normal text-gray-900 leading-tight" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Seamless Integration of River & Coastal Voyages
          </p>
        </div>
      </section>


      <section className="bg-[#FDF8E8] py-0 m-0 p-0 w-screen max-w-none overflow-x-hidden">
        <div className="relative w-screen max-w-none m-0 p-0" style={{height:'700px'}}>
          <div className="grid grid-cols-1 md:grid-cols-3 w-screen h-full m-0 p-0">
            <div className="relative h-full w-full">
              <Image src="https://ik.imagekit.io/libertyindia/services/cruise/picture-1.png" alt="Cruise 1" fill className="object-cover object-center" priority={false} />
            </div>
            <div className="relative h-full w-[37vw] md:-ml-8">
              <Image src="https://ik.imagekit.io/libertyindia/services/cruise/picture-2.png" alt="Cruise 2" fill className="object-cover object-center" priority={false} />
            </div>
            <div className="relative h-full w-full">
              <Image src="https://ik.imagekit.io/libertyindia/services/cruise/picture-3.png" alt="Cruise 3" fill className="object-cover object-center" priority={false} />
            </div>
          </div>
          {/* Overlay Card */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 bg-white px-12 py-16 md:px-20 md:py-20 shadow-lg max-w-xl text-left" style={{fontFamily:'var(--font-merriweather), Georgia, serif'}}>
            <p className="text-lg text-gray-800 leading-relaxed">
              Our cruise handling services cover every aspect of port operations, ensuring seamless turnaround and exceptional guest experiences. From pre-arrival planning to on-ground execution, our experienced team manages vessel coordination, logistics, shore excursions, transportation, and guest services with precision and reliability.
            </p>
          </div>
        </div>
      </section>

            <section className="w-full bg-white py-12">
              <div className="max-w-[90vw] mx-auto">
                <h2 className="text-center text-2xl md:text-3xl mt-4 font-semibold mb-2" style={{fontFamily:'var(--font-playfair), Georgia, serif'}}>
                  Discover India from the Water, in Utmost Comfort 
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-8 grid-rows-2 gap-0 rounded overflow-hidden shadow-lg w-full" style={{minHeight:'900px'}}>
                  {/* Top Left */}
                  <div className="relative h-100 md:h-112.5 overflow-hidden">
                    <Image src="https://ik.imagekit.io/libertyindia/services/cruise/shore.svg" alt="Shore Excursion Design & Execution" fill className="object-cover object-center" priority={false} />
                    <div className="absolute bottom-0 right-0 w-2/3 min-h-27.5 bg-white/95 border-t border-r border-gray-200 p-6 md:p-8 z-10 flex flex-col justify-end" style={{boxShadow:'0 4px 24px 0 rgba(0,0,0,0.04)'}}>
                      <h3 className="font-semibold text-lg md:text-xl mb-1 text-left">Shore Excursion Design & Execution</h3>
                      <p className="text-gray-700 text-sm md:text-base text-left whitespace-normal wrap-break-word">Seamlessly planned destination experiences with local expertise</p>
                    </div>
                  </div>
                  {/* Top Right */}
                  <div className="relative h-100 md:h-112.5 overflow-hidden">
                    <Image src="https://ik.imagekit.io/libertyindia/services/cruise/logistics.svg" alt="Ground Transportation & Logistics" fill className="object-cover object-center" priority={false} />
                    <div className="absolute bottom-0 left-0 w-2/3 min-h-27.5 bg-white/95 border-t border-l border-gray-200 p-6 md:p-8 text-left z-10 flex flex-col justify-end" style={{boxShadow:'0 4px 24px 0 rgba(0,0,0,0.04)'}}>
                      <h3 className="font-semibold text-lg md:text-xl mb-1 text-left">Ground Transportation & Logistics</h3>
                      <p className="text-gray-700 text-sm md:text-base text-left whitespace-normal wrap-break-word">Reliable transport solutions ensuring smooth guest movement</p>
                    </div>
                  </div>
                  {/* Bottom Left */}
                  <div className="relative h-100 md:h-112.5 overflow-hidden">
                    <Image src="https://ik.imagekit.io/libertyindia/services/cruise/meet-greet.svg" alt="Meet & Greet & Guest Assistance" fill className="object-cover object-center" priority={false} />
                    <div className="absolute top-0 right-0 w-2/3 min-h-27.5 bg-white/95 border-b border-r border-gray-200 p-6 md:p-11 z-10 flex flex-col justify-start" style={{boxShadow:'0 4px 24px 0 rgba(0,0,0,0.04)'}}>
                      <h3 className="font-semibold text-lg md:text-xl mb-1 text-left">Meet & Greet & Guest Assistance</h3>
                      <p className="text-gray-700 text-sm md:text-base text-left whitespace-normal wrap-break-word">Personalized arrival services with dedicated guest support</p>
                    </div>
                  </div>
                  {/* Bottom Right */}
                  <div className="relative h-100 md:h-112.5 overflow-hidden">
                    <Image src="https://ik.imagekit.io/libertyindia/services/cruise/pre-tours.svg" alt="Pre & Post Tours" fill className="object-cover object-center" priority={false} />
                    <div className="absolute top-0 left-0 w-2/3 min-h-27.5 bg-white/95 border-b border-l border-gray-200 p-6 md:p-8 text-left z-10 flex flex-col justify-start" style={{boxShadow:'0 4px 24px 0 rgba(0,0,0,0.04)'}}>
                      <h3 className="font-semibold text-lg md:text-xl mb-1 text-left">Pre & Post Tours</h3>
                      <p className="text-gray-700 text-sm md:text-base text-left whitespace-normal wrap-break-word">Palace venues and regal hospitality create an inspiring backdrop for intimate</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

      {/* Signature Cruise Experiences Section */}
      <section className="w-screen bg-white py-0 flex flex-col items-center justify-center">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10" style={{fontFamily:'var(--font-playfair), Georgia, serif'}}>
          Signature Cruise Experiences
        </h2>
        <div className="relative w-screen max-w-none flex justify-center items-center" style={{height:'100vh'}}>
          <Image
            src="https://ik.imagekit.io/libertyindia/services/cruise/experiences.png"
            alt="Signature Cruise Experiences"
            fill
            className="object-cover object-center"
            priority={false}
          />
        </div>
      </section>

      {/* Explore Programs Section */}
      <section className="w-full bg-[#FDF8E8] py-16 flex flex-col items-center">
        <ItineraryCards
          heading="Explore Programs"
          subheading="Travel through centuries of history with journeys designed for discerning explorers"
          items={[
            {
              image: 'https://ik.imagekit.io/libertyindia/itineraries/taj-tigers.svg',
              alt: 'Taj & Tigers',
              category: 'Culture & History',
              bestTime: 'October - March',
              title: 'Taj & Tigers',
              description: "Combine India's most iconic monument with thrilling wildlife. This 9-day journey features the Taj Mahal, royal Rajasthan heritage, and India's famous tiger reserve experiences.",
              price: 1850,
              duration: '10 Days',
            },
            {
              image: 'https://ik.imagekit.io/libertyindia/itineraries/golden-triangle.svg',
              alt: 'Golden Triangle of India (Classical)',
              category: 'Adventure Tour',
              bestTime: 'October - March',
              title: 'Golden Triangle of India (Classical)',
              description: "India's most classic itinerary in 7 days. Experience Delhi's history, Agra's romance with the Taj Mahal, and Jaipur's royal splendor in this perfect introduction to India.",
              price: 2150,
              duration: '10 Days',
            },
            {
              image: 'https://ik.imagekit.io/libertyindia/itineraries/north-india.svg',
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
