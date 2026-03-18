'use client';

import Image from 'next/image';
import ImageWithLoader from '../components/ImageWithLoader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar with white background */}
      <Navbar variant="white" />

      {/* Hero Section with Team Photo */}
      <section className="relative w-full pt-20">
        {/* Team Photo with Overlay */}
        <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">

            <Image
              src="https://ik.imagekit.io/libertyindia/about-us/section/liberty-group-pic.svg"
              alt="Liberty India team - passionate travel experts committed to crafting exceptional India experiences"
              fill
              className="object-cover object-center"
              priority
            />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30" />
          
          {/* About Us Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-light tracking-wide"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              About us
            </h1>
          </div>
        </div>
      </section>

      {/* 20 Years Section with Image Grid */}
      <section className="w-full pt-12 md:pt-16 lg:pt-20 pb-0" style={{ backgroundColor: '#FDF8E8' }}>
        {/* Heading */}
        <div className="w-[90%] max-w-5xl mx-auto text-center mb-10 md:mb-14">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] font-normal text-gray-900 leading-tight"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            20 Years of Pioneering Luxury Experiential
            <br />
            Travel in India
          </h2>
        </div>

        {/* Image Grid with Text Card */}
        <div className="w-full relative h-96 md:h-137.5 lg:h-162.5 xl:h-180">
          {/* Background Images Grid */}
          <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Image 1 - Palace/Lake */}
            <div 
              className="relative h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://ik.imagekit.io/libertyindia/about-us/section/picture-1.svg')" }}
            />

            {/* Image 2 - Kerala Backwaters */}
            <div 
              className="relative h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://ik.imagekit.io/libertyindia/about-us/section/picture-2.svg')" }}
            />

            {/* Image 3 - Kerala Palm Trees */}
            <div 
              className="relative h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://ik.imagekit.io/libertyindia/about-us/section/picture-3.svg')" }}
            />
          </div>

          {/* Text Card Overlay - Covering first image and half of second with margins */}
          <div 
            className="absolute left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 bg-white px-6 md:px-8 lg:px-10 py-6 md:py-8 lg:py-10 flex items-center z-10 shadow-lg"
            style={{ width: '42%', height: '60%' }}
          >
            <p
              className="text-sm md:text-base lg:text-[15px] text-gray-700 leading-loose lg:leading-loose max-w-lg mx-auto"
              style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
            >
              Twenty years ago, <strong>Liberty India</strong> was born from a simple vision: craft journeys that connect global travelers to India&apos;s soul. From the grandeur of <strong>Rajasthan&apos;s palaces</strong> to the Serenity of <strong>Kerala backwaters</strong>, we&apos;ve nurtured relationships that unlock authentic moments, becoming the trusted partner for <strong>world-class tour operators</strong> and <strong>luxury advisors</strong> who seek more than holidays. Today, we deliver bespoke experiences across India&apos;s extraordinary destinations, turning client trips into <strong>lifelong stories</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="w-full relative h-125 md:h-150 lg:h-175">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://ik.imagekit.io/libertyindia/about-us/section/picture-4.png')" }}
        />

        {/* Centered White Card */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="bg-white px-10 md:px-16 lg:px-20 xl:px-24 py-10 md:py-14 lg:py-16 text-center max-w-3xl lg:max-w-4xl shadow-lg">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 md:mb-6"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Our Philosophy
            </h2>
            <p
              className="text-sm md:text-base text-gray-600 font-medium mb-3 md:mb-4"
              style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
            >
              True luxury lives in connections
            </p>
            <p
              className="text-sm md:text-base text-gray-600 leading-loose lg:leading-loose"
              style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
            >
              to cultures, landscapes, stories, people. Not thread counts or stars. Liberty&apos;s 20 years in India means experts who understand your desires and our destinations profoundly
            </p>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="w-full pt-10 md:pt-14 lg:pt-16 pb-16 md:pb-20" style={{ backgroundColor: '#FDF8E8' }}>
        <div className="w-[80%] mx-auto">
          {/* Heading */}
          <div className="text-center mb-8 md:mb-10">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Our Promise
            </h2>
            <p
              className="text-sm md:text-base text-gray-600"
              style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
            >
              Every journey we orchestrate is built on three pillars
            </p>
          </div>

          {/* Three Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Pillar 1 - Authenticity */}
            <div className="group cursor-pointer">
              <div className="relative h-96 md:h-112.5 lg:h-130 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="https://ik.imagekit.io/libertyindia/about-us/section/picture-5.svg"
                  alt="Authentic elephant experience in India"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="pt-6 pr-4">
                <h3
                  className="text-lg md:text-xl font-semibold mb-3 transition-colors duration-300"
                  style={{ color: '#E07B39', fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Authenticity
                </h3>
                <p
                  className="text-sm md:text-base text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  Real encounters with people, curated to create meaningful exchanges rather than performative tourism
                </p>
              </div>
            </div>

            {/* Pillar 2 - Exclusivity */}
            <div className="group cursor-pointer">
              <div className="relative h-96 md:h-112.5 lg:h-130 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="https://ik.imagekit.io/libertyindia/about-us/section/picture-6.svg"
                  alt="Exclusive heritage site access"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="pt-6 px-4">
                <h3
                  className="text-lg md:text-xl font-semibold mb-3 transition-colors duration-300"
                  style={{ color: '#E07B39', fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Exclusivity
                </h3>
                <p
                  className="text-sm md:text-base text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  Access that isn&apos;t available through standard channels—private audiences with artisans, heritage site exclusivity, community experiences reserved for our guests
                </p>
              </div>
            </div>

            {/* Pillar 3 - Excellence */}
            <div className="group cursor-pointer">
              <div className="relative h-96 md:h-112.5 lg:h-130 overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
                <Image
                  src="https://ik.imagekit.io/libertyindia/about-us/section/picture-7.svg"
                  alt="Excellence in travel experiences"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="pt-6 pl-4">
                <h3
                  className="text-lg md:text-xl font-semibold mb-3 transition-colors duration-300"
                  style={{ color: '#E07B39', fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Excellence
                </h3>
                <p
                  className="text-sm md:text-base text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  Impeccable execution across every detail, from perfectly timed hotel transfers to seamlessly orchestrated multi-city journeys
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="w-full py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#FDF8E8' }}>
        <div className="w-[80%] mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              What Sets Us Apart
            </h2>
          </div>

          {/* Zigzag Grid */}
          <div className="space-y-0">
            {/* Row 1 - Local Mastery (Text Left, Image Right) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="bg-white p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <h3
                  className="text-lg md:text-xl font-semibold text-gray-900 mb-3"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Local Mastery
                </h3>
                <p
                  className="text-sm md:text-base text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  Deep relationships with hotels, guides, artisans, and communities across India
                </p>
              </div>
              <div className="relative h-48 md:h-auto">
                <ImageWithLoader
                  src="https://ik.imagekit.io/libertyindia/about-us/section/picture-8.svg"
                  alt="Local experiences in India"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Row 2 - Bespoke Curation (Image Left, Text Right) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="relative h-48 md:h-auto order-2 md:order-1">
                <ImageWithLoader
                  src="https://ik.imagekit.io/libertyindia/about-us/section/picture-9.svg"
                  alt="Cultural experiences with local artisans"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-white p-8 md:p-10 lg:p-12 flex flex-col justify-center order-1 md:order-2">
                <h3
                  className="text-lg md:text-xl font-semibold text-gray-900 mb-3"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Bespoke Curation
                </h3>
                <p
                  className="text-sm md:text-base text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  Our expert journey designers craft entirely personalized itineraries, not template journeys
                </p>
              </div>
            </div>

            {/* Row 3 - Ground Operations Excellence (Text Left, Image Right) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="bg-white p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <h3
                  className="text-lg md:text-xl font-semibold text-gray-900 mb-3"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Ground Operations Excellence
                </h3>
                <p
                  className="text-sm md:text-base text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  Our own teams manage every aspect of your journey, ensuring consistency and responsiveness
                </p>
              </div>
              <div className="relative h-48 md:h-auto">
                <ImageWithLoader
                  src="https://ik.imagekit.io/libertyindia/about-us/section/picture-10.svg"
                  alt="Professional travel operations team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Row 4 - Sustainable Tourism Leadership (Image Left, Text Right) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="relative h-48 md:h-auto order-2 md:order-1">
                <ImageWithLoader
                  src="https://ik.imagekit.io/libertyindia/about-us/section/picture-11.svg"
                  alt="Sustainable tourism practices"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-white p-8 md:p-10 lg:p-12 flex flex-col justify-center order-1 md:order-2">
                <h3
                  className="text-lg md:text-xl font-semibold text-gray-900 mb-3"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Sustainable Tourism Leadership
                </h3>
                <p
                  className="text-sm md:text-base text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  Community partnerships that benefit local economies and preserve heritage for future generations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
