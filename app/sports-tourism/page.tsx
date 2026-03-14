"use client";

import Image from 'next/image';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ItineraryCards from '../components/ItineraryCards';
import { getItinerariesByCategory } from '../itineraries/itineraries';

export default function EducationToursPage() {
  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Navbar */}
      <Navbar variant="white" />

      {/* Hero Section */}
      <section className="relative w-[105vw] bg-[#FDF8E8] pt-0">
        <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <Image
            src="https://ik.imagekit.io/libertyindia/services/sports/sports-bg.svg"
            alt="Sports Tourism Hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black" style={{ opacity: 0.2 }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-extrabold tracking-wide drop-shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif', textShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
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
              <Image src="https://ik.imagekit.io/libertyindia/services/sports/picture-1.svg" alt="Sports Tourism 1" fill className="object-cover object-center" priority={false} />
            </div>
            <div className="relative h-full w-[full] md:-ml-8">
              <Image src="https://ik.imagekit.io/libertyindia/services/sports/picture-2.png" alt="Sports Tourism 2" fill className="object-cover object-center" priority={false} />
            </div>
            <div className="relative h-full w-full">
              <Image src="https://ik.imagekit.io/libertyindia/services/sports/picture-3.svg" alt="Sports Tourism 3" fill className="object-cover object-center" priority={false} />
            </div>
          </div>
          {/* Overlay Card */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 bg-white px-12 py-16 md:px-20 md:py-20 shadow-lg max-w-2xl text-left" style={{fontFamily:'var(--font-merriweather), Georgia, serif'}}>
            <p className="text-xl text-gray-800 leading-relaxed">
              Sports tourism in India blends the excitement of athletic experiences with meaningful cultural immersion, offering guests the opportunity to participate in or witness the country's vibrant and diverse sporting traditions.
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
                  India offers exquisite settings where sports meet culture, blending world-class venues with rich traditions and vibrant experiences.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-8 grid-rows-2 gap-0 rounded overflow-hidden shadow-lg w-full" style={{minHeight:'900px'}}>
                  {/* Top Left */}
                  <div className="relative h-100 md:h-112.5 overflow-hidden">
                    <Image src="https://ik.imagekit.io/libertyindia/services/sports/yoga.svg" alt="Shore Excursion Design & Execution" fill className="object-cover object-center" priority={false} />
                    <div className="absolute bottom-0 right-0 w-2/3 min-h-27.5 bg-white/95 border-t border-r border-gray-200 p-6 md:p-8 z-10 flex flex-col justify-end" style={{boxShadow:'0 4px 24px 0 rgba(0,0,0,0.04)'}}>
                      <h3 className="font-semibold text-lg md:text-xl mb-1 text-left">Yoga Competitions</h3>
                      <p className="text-gray-700 text-sm md:text-base text-left whitespace-normal wrap-break-word">Participate in or attend yoga festivals and competitions</p>
                    </div>
                  </div>
                  {/* Top Right */}
                  <div className="relative h-100 md:h-112.5 overflow-hidden">
                    <Image src="https://ik.imagekit.io/libertyindia/services/sports/martial-arts.svg" alt="Ground Transportation & Logistics" fill className="object-cover object-center" priority={false} />
                    <div className="absolute bottom-0 left-0 w-2/3 min-h-27.5 bg-white/95 border-t border-l border-gray-200 p-6 md:p-8 text-left z-10 flex flex-col justify-end" style={{boxShadow:'0 4px 24px 0 rgba(0,0,0,0.04)'}}>
                      <h3 className="font-semibold text-lg md:text-xl mb-1 text-left">Martial Arts Training</h3>
                      <p className="text-gray-700 text-sm md:text-base text-left whitespace-normal wrap-break-word">Kalari payattu (Kerala martial art) training</p>
                    </div>
                  </div>
                  {/* Bottom Left */}
                  <div className="relative h-100 md:h-112.5 overflow-hidden">
                    <Image src="https://ik.imagekit.io/libertyindia/services/sports/equestrian.svg" alt="Meet & Greet & Guest Assistance" fill className="object-cover object-center" priority={false} />
                    <div className="absolute top-0 right-0 w-2/3 min-h-27.5 bg-white/95 border-b border-r border-gray-200 p-6 md:p-11 z-10 flex flex-col justify-start" style={{boxShadow:'0 4px 24px 0 rgba(0,0,0,0.04)'}}>
                      <h3 className="font-semibold text-lg md:text-xl mb-1 text-left">Equestrian Events</h3>
                      <p className="text-gray-700 text-sm md:text-base text-left whitespace-normal wrap-break-word">Polo tournaments and training</p>
                    </div>
                  </div>
                  {/* Bottom Right */}
                  <div className="relative h-100 md:h-112.5 overflow-hidden">
                    <Image src="https://ik.imagekit.io/libertyindia/services/sports/running.svg" alt="Pre & Post Tours" fill className="object-cover object-center" priority={false} />
                    <div className="absolute top-0 left-0 w-2/3 min-h-27.5 bg-white/95 border-b border-l border-gray-200 p-6 md:p-11 text-left z-10 flex flex-col justify-start" style={{boxShadow:'0 4px 24px 0 rgba(0,0,0,0.04)'}}>
                      <h3 className="font-semibold text-lg md:text-xl mb-1 text-left">Running Events</h3>
                      <p className="text-gray-700 text-sm md:text-base text-left whitespace-normal wrap-break-word">Marathon and running events across India</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

      {/* Signature Cruise Experiences Section */}
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

     
      {/* Explore Programs Section */}
      <section className="w-full bg-[#FDF8E8] py-16 flex flex-col items-center">
        
      </section>
      <Footer />
    </main>
  );
}
