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
          {/* Overlay layer for dark background */}
          <div className="absolute inset-0 bg-black" style={{ opacity: 0.2 }}></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-extrabold tracking-wide drop-shadow-lg"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontWeight: 'bold', textShadow: '0px 4px 24px rgba(0,0,0,0.2)' }}
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
            Discover India from the Water, in Utmost Comfort
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
          <div className="absolute left-8 top-1/2 -translate-y-1/2 bg-white px-12 py-16 md:px-20 md:py-20 shadow-lg max-w-2xl text-left" style={{fontFamily:'var(--font-merriweather), Georgia, serif'}}>
            <p className="text-xl text-gray-800 leading-relaxed">
              Our cruise handling services cover every aspect of port operations, ensuring seamless turnaround and exceptional guest experiences. From pre-arrival planning to on-ground execution, our experienced team manages vessel coordination, logistics, shore excursions, transportation, and guest services with precision and reliability.
            </p>
          </div>
        </div>
      </section>


      {/* Signature Cruise Experiences Section */}
      <section className="w-full bg-white mx-auto flex mt-12 mb-4 flex-col items-center justify-center">
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10" style={{fontFamily:'var(--font-playfair), Georgia, serif'}}>
          Signature Cruise Experiences
        </h2>
        <div className="relative flex justify-center items-center mx-auto" style={{height:'100vh', width:'70vw'}}>
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
        
      </section>
      <Footer />
    </main>
  );
}
