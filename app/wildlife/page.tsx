"use client";

import ImageWithLoader from '../components/ImageWithLoader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ItineraryCards from '../components/ItineraryCards';

export default function WildlifePage() {
  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Navbar */}
      <Navbar variant="white" />

      {/* Hero Section */}
      <section className="relative w-full pt-0">
        <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
          <ImageWithLoader
            src="/images/heroes/wildlife.jpg"
            alt="Wildlife India Hero"
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
              Wildlife
            </h1>
          </div>
        </div>
      </section>

      {/* Wildlife Title Section */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-[#FDF8E8]">
        <div className="w-full max-w-5xl mt-4 mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] font-normal text-[#424242] leading-tight" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Encounters with India&apos;s Magnificent Creatures
          </h2>
        </div>
      </section>

      {/* Image Grid with Top-Overlap Intro Card (heritage benchmark) */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-[#FDF8E8]">
        <div className="w-full relative h-96 md:h-[550px] lg:h-[650px] xl:h-[720px]">
          {/* Images Grid */}
          <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-0 w-full h-full">
            <div className="relative h-full w-full">
              <ImageWithLoader
                sizes="(max-width: 768px) 100vw, 33vw"
                src="https://ik.imagekit.io/libertyindia/about-india/wildlife/picture-1.png"
                alt="Nature 1"
                fill
                className="object-cover object-center"
                priority={false}
              />
            </div>
            <div className="relative h-full w-full">
              <ImageWithLoader
                sizes="(max-width: 768px) 100vw, 33vw"
                src="https://ik.imagekit.io/libertyindia/about-india/wildlife/picture-2.svg"
                alt="Nature 2"
                fill
                className="object-cover object-center"
                priority={false}
              />
            </div>
            <div className="relative h-full w-full">
              <ImageWithLoader
                sizes="(max-width: 768px) 100vw, 33vw"
                src="https://ik.imagekit.io/libertyindia/about-india/wildlife/picture-3.svg"
                alt="Nature 3"
                fill
                className="object-cover object-center"
                priority={false}
              />
            </div>
          </div>
          {/* Text Card Overlay */}
          <div className="absolute top-6 sm:top-8 md:top-12 lg:top-16 left-4 md:left-8 lg:left-12 w-[85%] md:w-[42%] bg-white px-6 py-6 md:px-9 md:py-8 shadow-md text-left z-10">
            <p className="text-lg md:text-xl lg:text-[22px] text-[#424242] leading-loose" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
              India, a premier global biodiversity hotspot, hosts 7-8% of the world&apos;s plant and animal species—including 423 mammals and over 1,200 birds—across just 2.4% of Earth&apos;s land. From Himalayan alpine forests to desert scrub and tropical rainforests, its protected realms of 900+ national parks and sanctuaries safeguard icons like the Royal Bengal Tiger, One-horned Rhinoceros, Asian Elephant, and both tigers and lions found nowhere else, inviting luxury safaris amid untamed splendor.
            </p>
          </div>
        </div>
      </section>

      {/* Section Footer Text (connector to Wild Heritage collage) */}
      <section className="w-full pt-2 pb-4 md:pt-3 md:pb-6 lg:pt-4 lg:pb-8 bg-[#FDF8E8] flex items-center justify-center mb-8">
        <div className="w-full max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#424242]" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Experience India&apos;s magnificent wildlife in its natural habitat with Liberty India&apos;s expert-guided journeys
          </h2>
        </div>
      </section>

      {/* India's Wild Heritage Collage Section — mirrors the home-page India map
          band (collage background + centred overlay). The overlay graphic
          (lion.svg) already contains the "India's Wild Heritage" heading and
          blurb baked in, so we do NOT add a separate HTML text layer — that was
          rendering the text twice. */}
      <div
        data-navbar-hide
        className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[640px] lg:min-h-[720px] mb-8 md:mb-12 lg:mb-16"
      >
        {/* Layer 1: Background Collage - full viewport width, edge to edge (mirrors home) */}
        <div className="absolute left-0 top-0 w-screen h-full z-0">
          <ImageWithLoader
            src="https://ik.imagekit.io/libertyindia/about-india/wildlife/collage.png"
            alt="Collage of India's diverse wildlife — tigers, rhinos, elephants, leopards and birdlife"
            fill
            className="object-cover object-center w-full h-full"
            sizes="100vw"
            priority
          />
        </div>

        {/* Layer 2: "India's Wild Heritage" heading + blurb (baked into the graphic) */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <ImageWithLoader
            src="https://ik.imagekit.io/libertyindia/about-india/wildlife/lion.svg"
            alt="India's Wild Heritage — extraordinary encounters shaped by biodiversity, conservation, and the raw beauty of nature"
            fill
            sizes="100vw"
            className="h-full w-auto max-h-full object-contain drop-shadow-lg"
            priority
          />
        </div>
      </div>

      <ItineraryCards
        heading={"Explore the Wildlife\nExperience the Journey"}
        subheading="Travel through centuries of history with journeys designed for discerning explorers"
        bgColor="#FDF39F4D"
        category="Wildlife"
      />

      {/* Footer */}
      <Footer />
    </main>
  );
}
