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
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold tracking-wide text-shadow-lg"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              About us
            </h1>
          </div>
        </div>
      </section>

      {/* 20 Years Section with Image Grid */}
      <section className="w-full pt-12 md:pt-16 lg:pt-20 pb-0" style={{ backgroundColor: 'rgba(253,243,159,0.3)' }}>
        {/* Heading */}
        <div className="w-[90%] max-w-5xl mx-auto text-center mb-10 md:mb-14">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] font-normal text-[#424242] leading-tight"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            20 Years of Pioneering Luxury Experiential Travel in India
          </h2>
        </div>

        {/* Image Grid with Text Card.
         * Desktop: editorial overlay — the card floats over a 3-up image triptych.
         * Mobile: the three photos stack into a continuous VERTICAL backdrop
         * (grid-rows-3, no gaps) that fills the section, with the white banner on
         * top, centred, framed by equal photo bands top & bottom. The container's
         * vertical padding (not the card) creates those bands, so the backdrop
         * always expands to contain the copy — no overflow, no cream gaps. */}
        <div className="w-full relative h-auto py-32 sm:py-40 md:py-0 md:h-137.5 lg:h-162.5 xl:h-180">
          {/* Background Images — vertical stack on mobile, 3 columns on desktop */}
          <div className="absolute inset-0 grid grid-cols-1 grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-0">
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

          {/* Text Card — banner on top of the vertical photo backdrop (mobile),
           * floating overlay (desktop) */}
          <div
            className="relative md:absolute mx-4 md:mx-0 md:left-8 lg:left-12 md:top-1/2 md:-translate-y-1/2 w-auto md:w-[42%] bg-white p-8 md:p-10 lg:p-14 z-10 shadow-lg"
          >
            <p
              className="text-sm md:text-base lg:text-lg text-[#424242] font-normal tracking-[0.02em] leading-loose lg:leading-loose"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Two decades ago, Liberty India was founded on a singular vision—to craft journeys that connect global travellers with the true soul of India. From the regal grandeur of Rajasthan&apos;s palaces to the serene backwaters of Kerala, we have cultivated enduring relationships that unlock rare, authentic experiences. Today, we are the trusted partner of world-class tour operators and luxury travel advisors seeking journeys that transcend the ordinary. Across India&apos;s most extraordinary destinations, we design bespoke experiences that transform every itinerary into a timeless story.
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
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#424242] mb-4 md:mb-6"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Our Philosophy
            </h2>
            <p
              className="text-base md:text-lg text-[#424242] font-bold mb-3 md:mb-4"
              style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
            >
              True luxury lies in meaningful connection to India&apos;s cultures, landscapes, stories, and people.
            </p>
            <p
              className="text-sm md:text-base text-[#424242] leading-loose lg:leading-loose"
              style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
            >
              We believe travel should go beyond the expected, revealing the depth and spirit of a destination through thoughtfully curated, deeply personal experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="w-full pt-10 md:pt-14 lg:pt-16 pb-16 md:pb-20 bg-white">
        <div className="w-[80%] mx-auto">
          {/* Heading */}
          <div className="text-center mb-8 md:mb-10">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#424242] mb-4"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Our Promise
            </h2>
            <p
              className="text-sm md:text-base text-[#424242]"
              style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
            >
              Every journey we orchestrate is built on three pillars:
            </p>
          </div>

          {/* Three Pillars Grid — stacked with clear spacing on mobile; the tight
           * gap-0 + directional text padding (below) is a desktop-only layout. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0">
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
              <div className="pt-6 md:pr-4">
                <h3
                  className="text-lg md:text-xl font-semibold mb-3 transition-colors duration-300"
                  style={{ color: '#e58021', fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Authenticity
                </h3>
                <p
                  className="text-sm md:text-base text-[#424242] leading-relaxed"
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
              <div className="pt-6 md:px-4">
                <h3
                  className="text-lg md:text-xl font-semibold mb-3 transition-colors duration-300"
                  style={{ color: '#e58021', fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Exclusivity
                </h3>
                <p
                  className="text-sm md:text-base text-[#424242] leading-relaxed"
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
              <div className="pt-6 md:pl-4">
                <h3
                  className="text-lg md:text-xl font-semibold mb-3 transition-colors duration-300"
                  style={{ color: '#e58021', fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Excellence
                </h3>
                <p
                  className="text-sm md:text-base text-[#424242] leading-relaxed"
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
      <section className="w-full py-16 md:py-20 lg:py-24" style={{ backgroundColor: 'rgba(253,243,159,0.2)' }}>
        <div className="w-[80%] mx-auto">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#424242]"
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
                  className="text-lg md:text-xl font-semibold text-[#424242] mb-3"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Local Mastery
                </h3>
                <p
                  className="text-sm md:text-base text-[#424242] leading-relaxed"
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
                  className="text-lg md:text-xl font-semibold text-[#424242] mb-3"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Bespoke Curation
                </h3>
                <p
                  className="text-sm md:text-base text-[#424242] leading-relaxed"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  Each experience is thoughtfully curated by our travel specialists to celebrate local culture and heritage, brought to life with refined attention to detail
                </p>
              </div>
            </div>

            {/* Row 3 - Ground Operations Excellence (Text Left, Image Right) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <div className="bg-white p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <h3
                  className="text-lg md:text-xl font-semibold text-[#424242] mb-3"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Ground Operations Excellence
                </h3>
                <p
                  className="text-sm md:text-base text-[#424242] leading-relaxed"
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
                  className="text-lg md:text-xl font-semibold text-[#424242] mb-3"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Sustainable Tourism Leadership
                </h3>
                <p
                  className="text-sm md:text-base text-[#424242] leading-relaxed"
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
