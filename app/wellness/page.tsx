"use client";

import Image from 'next/image';
import ImageWithLoader from '../components/ImageWithLoader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ItineraryCards from '../components/ItineraryCards';

export default function WellnessPage() {
  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Navbar */}
      <Navbar variant="white" />

      {/* Hero Section */}
      <section className="relative w-full pt-0">
        <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
          <ImageWithLoader
            src="/images/heroes/wellness.jpg"
            alt="Wellness India Hero"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          {/* 20% opacity overlay */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl xl:text-7xl text-white font-semibold tracking-wide drop-shadow-lg"
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
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] font-normal text-[#424242] leading-tight" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Ancient Healing, Modern Vitality
          </h2>
        </div>
      </section>

      {/* Wellness Image Grid with Text Card */}
      <div className="w-full bg-[#FDF8E8] relative h-96 md:h-[550px] lg:h-[650px] xl:h-[720px] mb-0">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-0 w-full h-full">
          <div className="relative h-full w-full">
            <ImageWithLoader
              sizes="(max-width: 768px) 100vw, 33vw"
              src="https://ik.imagekit.io/libertyindia/about-india/wellness/picture-1.svg"
              alt="Wellness 1"
              fill
              className="object-cover object-center"
              priority={false}
            />
          </div>
          <div className="relative h-full w-full">
            <ImageWithLoader
              sizes="(max-width: 768px) 100vw, 33vw"
              src="https://ik.imagekit.io/libertyindia/about-india/wellness/picture-2.svg"
              alt="Wellness 2"
              fill
              className="object-cover object-center"
              priority={false}
            />
          </div>
          <div className="relative h-full w-full">
            <ImageWithLoader
              sizes="(max-width: 768px) 100vw, 33vw"
              src="https://ik.imagekit.io/libertyindia/about-india/wellness/picture-3.svg"
              alt="Wellness 3"
              fill
              className="object-cover object-center"
              priority={false}
            />
          </div>
        </div>
        {/* Text Card Overlay */}
        <div className="absolute top-6 sm:top-8 md:top-12 lg:top-16 left-4 md:left-8 lg:left-12 w-[85%] md:w-[42%] bg-white px-6 py-6 md:px-9 md:py-8 shadow-md text-left z-10">
          <p className="text-lg md:text-xl lg:text-[22px] text-[#424242] leading-loose" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            India gave the world Yoga and Ayurveda–sophisticated systems of wellness developed over millennia. These aren&apos;t trends; they&apos;re complete frameworks for living in harmony with natural rhythms, preventing disease, and optimizing human potential.
          </p>
        </div>
      </div>

      <section className="w-full p-12 bg-[#FDF8E8] flex items-center justify-center mb-8">
        <div className="w-full max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#424242]" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Liberty India wellness journey combines ancient wisdom with modern comfort
          </h2>
        </div>
      </section>

       <div className="w-full max-w-5xl mx-auto text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-6 font-bold text-[#424242]" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Ayurveda Retreat Experiences
          </h2>
          <p className="text-xs md:text-sm text-[#424242] mt-1 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
            The ancient medical system that views each person as a unique constitution (dosha)
          </p>
        </div>

      {/* Ayurveda Retreat Experiences.
          The exported PNG already has the five labelled cards baked in, so on
          desktop we show the image alone. On phones the wide collage text is
          unreadable, so we hide the image and render the same five cards as a
          readable stacked list instead — preventing the text appearing twice. */}
      <section className="relative w-full bg-white py-0 mb-6">
        <Image
          src="https://ik.imagekit.io/libertyindia/about-india/wellness/experiences.png"
          alt="Ayurveda Retreat Experiences — Ayurvedic Consultations, Customized Treatment Programs, Lifestyle Counselling, Herbal Medicine, and Diet & Nutrition"
          width={5760}
          height={2837}
          className="hidden md:block w-full h-auto"
          priority={false}
        />
        {/* Mobile-only readable cards */}
        <div className="md:hidden">
          <ul className="grid grid-cols-1 gap-4 px-4 pb-4">
            {[
              {
                title: 'Ayurvedic Consultations',
                body: 'Individual assessment by experienced Ayurvedic practitioners',
              },
              {
                title: 'Customized Treatment Programs',
                body: 'Personalized therapies based on your constitution (Vata, Pitta, Kapha)',
              },
              {
                title: 'Lifestyle Counselling',
                body: 'Adjustments to sleep, routine, and activities for optimal health',
              },
              {
                title: 'Herbal Medicine',
                body: 'Study and use of India’s vast pharmacopoeia of herbs and minerals',
              },
              {
                title: 'Diet & Nutrition',
                body: 'Ayurvedic dietary principles tailored to your constitution',
              },
            ].map((card) => (
              <li
                key={card.title}
                className="bg-white shadow-md p-5 md:p-6"
              >
                <h3
                  className="text-lg md:text-xl font-bold text-[#424242] mb-2"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm md:text-base text-[#424242] leading-relaxed"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  {card.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Wellness Retreat Locations Section */}
      <section className="relative w-full py-16 md:py-20">
        <div className="relative w-full flex flex-col items-center" style={{ zIndex: 1 }}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#424242] text-center mb-6" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Wellness Retreat Locations
          </h2>
          <p className="text-xs md:text-sm text-[#424242] text-center mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
            Specialized programs for specific health concerns (stress, insomnia, digestive issues, etc.)
          </p>
          <div className="absolute inset-0 md:mt-24 w-full h-full -z-10">
            <ImageWithLoader
              src="/images/heroes/wellness-locations.jpg"
              alt="Wellness Retreat Locations Background"
              fill
              sizes="100vw"
              className="object-cover object-center w-full h-full"
              priority={false}
            />
          </div>
          {/* Ananda Spa - Top */}
          <div className="flex flex-col md:flex-row w-full md:mt-12 max-w-7xl bg-white bg-opacity-95 overflow-hidden shadow-lg mx-auto">
            <div className="md:w-1/2 w-full h-72 md:h-80 relative overflow-hidden">
              <ImageWithLoader src="https://ik.imagekit.io/libertyindia/about-india/wellness/ananda-spa.svg" alt="Ananda Spa" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center" />
            </div>
            <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#424242] mb-2" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Ananda Spa</h3>
              <p className="text-base text-[#424242] mb-2" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
                Ananda in the Himalayas is one of the world’s most revered holistic wellness retreats. Set in a former palace estate amidst 100 acres of forest and gardens, it harmonises traditional <b>Ayurveda</b>, <b>yoga</b>, <b>Vedanta</b>, and meditation with global wellness.<br /><br />
                <b>(Rishikesh)</b>
              </p>
            </div>
          </div>
          {/* Six Senses Vana - Middle */}
          <div className="flex flex-col md:flex-row w-full max-w-7xl bg-white bg-opacity-95 overflow-hidden shadow-lg mx-auto">
            
            <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#424242] mb-2" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Six Senses Vana</h3>
              <p className="text-base text-[#424242] mb-2" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
                <b>Six Senses Vana</b> in Dehradun is a luxury wellness retreat focused on personal transformation and holistic wellbeing. Rooted in <b>Ayurveda</b>, <b>yoga</b>, <b>Tibetan medicine (Sowa Rigpa)</b> and natural healing therapies, Vana provides bespoke wellness journeys crafted for each guest.<br /><br />
                <b>(Dehradun)</b>
              </p>
            </div>
            <div className="md:w-1/2 w-full h-72 md:h-80 relative overflow-hidden">
              <ImageWithLoader src="https://ik.imagekit.io/libertyindia/about-india/wellness/vana.svg" alt="Six Senses Vana" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center" />
            </div>
          </div>
          {/* SwaSwara Wellness - Bottom */}
          <div className="flex flex-col md:flex-row w-full max-w-7xl bg-white bg-opacity-95 overflow-hidden shadow-lg mx-auto">
            <div className="md:w-1/2 w-full h-72 md:h-80 relative overflow-hidden">
              <ImageWithLoader src="https://ik.imagekit.io/libertyindia/about-india/wellness/swa-swara.svg" alt="SwaSwara Wellness" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center" />
            </div>
            <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#424242] mb-2" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>SwaSwara Wellness</h3>
              <p className="text-base text-[#424242] mb-2" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
                <b>SwaSwara</b>, nestled on the iconic Om Beach in Gokarna, offers a soulful wellness escape harmonising nature, Ayurveda and yoga. Retreat encourages mindful living through nature walks, creative arts, conscious cuisine.<br /><br />
                <b>(Karnataka)</b>
              </p>
            </div>
          </div>
        </div>
      </section>

      <ItineraryCards
        heading={"Explore the Wellness\nExperience the Journey"}
        subheading="Travel through centuries of history with journeys designed for discerning explorers"
        bgColor="#FDF39F4D"
        category="Wellness"
      />

      <Footer />
    </main>
  );
}
