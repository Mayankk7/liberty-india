"use client";

import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function WellnessPage() {
  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Navbar */}
      <Navbar variant="white" />

      {/* Hero Section */}
      <section className="relative w-[105vw] bg-[#FDF8E8] pt-0">
        <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <Image
            src="https://ik.imagekit.io/libertyindia/about-india/wellness/wellness-bg.svg"
            alt="Wellness India Hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-light tracking-wide drop-shadow-lg"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Wellness
            </h1>
          </div>
        </div>
      </section>

      {/* Wellness Title Section */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-[#FDF8E8]">
        <div className="w-full max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] font-normal text-gray-900 leading-tight" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Ancient Healing. Modern Vitality
          </h2>
        </div>
      </section>

      {/* Wellness Image Grid with Text Card */}
      <div className="w-full bg-[#FDF8E8] relative h-96 md:h-105 lg:h-125 xl:h-140 mb-0">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-0 w-full h-full">
          <div className="relative h-full w-full">
            <Image
              src="https://ik.imagekit.io/libertyindia/about-india/wellness/picture-1.svg"
              alt="Wellness 1"
              fill
              className="object-cover object-center"
              priority={false}
            />
          </div>
          <div className="relative h-full w-full">
            <Image
              src="https://ik.imagekit.io/libertyindia/about-india/wellness/picture-2.svg"
              alt="Wellness 2"
              fill
              className="object-cover object-center"
              priority={false}
            />
          </div>
          <div className="relative h-full w-full">
            <Image
              src="https://ik.imagekit.io/libertyindia/about-india/wellness/picture-3.svg"
              alt="Wellness 3"
              fill
              className="object-cover object-center"
              priority={false}
            />
          </div>
        </div>
        {/* Text Card Overlay */}
        <div className="absolute left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 bg-white px-6 md:px-8 lg:px-10 py-6 md:py-8 lg:py-10 flex items-center z-10 shadow-lg max-w-lg" style={{ width: '40%' }}>
          <p className="text-sm md:text-base lg:text-[15px] text-gray-700 leading-loose lg:leading-loose" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
            India gave the world Yoga and Ayurveda–sophisticated systems of wellness developed over millennia. These aren&apos;t trends; they&apos;re complete frameworks for living in harmony with natural rhythms, preventing disease, and optimizing human potential.
          </p>
        </div>
      </div>

      <section className="w-full p-12 bg-[#FDF8E8] flex items-center justify-center mb-8">
        <div className="w-full max-w-5xl mx-auto text-center">
          <h2 className="text-lg md:text-lg lg:text-lg xl:text-lg font-normal text-gray-900 leading-tight" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Liberty India wellness journey combines ancient wisdom with modern comfort
          </h2>
        </div>
      </section>

       <div className="w-full max-w-5xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 font-semibold text-gray-900" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Ayurveda Retreat Experiences
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mt-1 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
            The ancient medical system that views each person as a unique constitution (dosha)
          </p>
        </div>

      {/* Ayurveda Retreat Locations Section */}

      <section className="w-[100vw] bg-white py-0 mb-6" style={{ position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
        <div className="relative w-[100vw] h-[100vh] mx-auto">
          <Image
            src="https://ik.imagekit.io/libertyindia/about-india/wellness/experiences.png"
            alt="Ayurveda Retreat Locations"
            fill
            className="object-cover object-center"
            priority={false}
          />
        </div>
      </section>

      {/* Wellness Retreat Locations Section */}
      <section className="relative w-full py-16 md:py-20">
        <div className="relative w-full flex flex-col items-center" style={{ zIndex: 1 }}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-2" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Wellness Retreat Locations
          </h2>
          <p className="text-xs md:text-sm text-center mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
            Specialized programs for specific health concerns (stress, insomnia, digestive issues, etc.)
          </p>
          <div className="absolute inset-0 md:mt-24 w-[110vw] h-full -z-10">
            <Image
              src="https://ik.imagekit.io/libertyindia/about-india/wellness/location-bg.svg"
              alt="Wellness Retreat Locations Background"
              fill
              className="object-cover object-center w-full h-full"
              priority={false}
            />
          </div>
          {/* Ananda Spa - Top */}
          <div className="flex flex-col md:flex-row w-[97vw] md:mt-12 max-w-7xl bg-white bg-opacity-95 overflow-hidden shadow-lg mx-auto">
            <div className="md:w-1/2 w-full h-72 md:h-80 relative">
              <Image src="https://ik.imagekit.io/libertyindia/about-india/wellness/ananda-spa.svg" alt="Ananda Spa" fill className="object-cover object-center" />
            </div>
            <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-2" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Ananda Spa</h3>
              <p className="text-base text-gray-800 mb-2" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
                Ananda in the Himalayas is one of the world’s most revered holistic wellness retreats. Set in a former palace estate amidst 100 acres of forest and gardens, it harmonises traditional <b>Ayurveda</b>, <b>yoga</b>, <b>Vedanta</b>, and meditation with global wellness.<br /><br />
                <b>(Rishikesh)</b>
              </p>
            </div>
          </div>
          {/* Six Senses Vana - Middle */}
          <div className="flex flex-col md:flex-row w-[97vw] max-w-7xl bg-white bg-opacity-95 overflow-hidden shadow-lg mx-auto">
            
            <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-2" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Six Senses Vana</h3>
              <p className="text-base text-gray-800 mb-2" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
                <b>Six Senses Vana</b> in Dehradun is a luxury wellness retreat focused on personal transformation and holistic wellbeing. Rooted in <b>Ayurveda</b>, <b>yoga</b>, <b>Tibetan medicine (Sowa Rigpa)</b> and natural healing therapies, Vana provides bespoke wellness journeys crafted for each guest.<br /><br />
                <b>(Dehradun)</b>
              </p>
            </div>
            <div className="md:w-1/2 w-full h-72 md:h-80 relative">
              <Image src="https://ik.imagekit.io/libertyindia/about-india/wellness/vana.svg" alt="Six Senses Vana" fill className="object-cover object-center" />
            </div>
          </div>
          {/* SwaSwara Wellness - Bottom */}
          <div className="flex flex-col md:flex-row w-[97vw] max-w-7xl bg-white bg-opacity-95 overflow-hidden shadow-lg mx-auto">
            <div className="md:w-1/2 w-full h-72 md:h-80 relative">
              <Image src="https://ik.imagekit.io/libertyindia/about-india/wellness/swa-swara.svg" alt="SwaSwara Wellness" fill className="object-cover object-center" />
            </div>
            <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-2" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>SwaSwara Wellness</h3>
              <p className="text-base text-gray-800 mb-2" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
                <b>SwaSwara</b>, nestled on the iconic Om Beach in Gokarna, offers a soulful wellness escape harmonising nature, Ayurveda and yoga. Retreat encourages mindful living through nature walks, creative arts, conscious cuisine.<br /><br />
                <b>(Karnataka)</b>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
