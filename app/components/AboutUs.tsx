'use client';

import Image from 'next/image';

export default function AboutUs() {
  return (
    <section
      id="about-us"
      className="w-full bg-white"
      aria-labelledby="about-us-heading"
    >
      {/* Top Tagline Strip */}
      <div className="w-full py-6 md:py-8 lg:py-10" style={{ backgroundColor: '#FDF8E8' }}>
        <div className="w-[90%] max-w-6xl mx-auto flex flex-col items-center text-center">
          {/* Mountain Icon */}
          <div className="mb-3 md:mb-4">
            <Image
              src="/images/about-us/top-section-img.svg"
              alt="India heritage icon"
              width={80}
              height={60}
              className="w-16 h-12 md:w-20 md:h-16 lg:w-24 lg:h-18 object-contain"
            />
          </div>
          {/* Tagline */}
          <p
            className="text-sm md:text-base lg:text-lg text-gray-700 font-light leading-relaxed max-w-2xl"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
          >
            Liberty crafts extraordinary India journeys celebrating heritage,
            <br className="hidden sm:block" />
            culture, and authentic encounters
          </p>
        </div>
      </div>

      {/* Main About Section */}
      <div className="w-full bg-white py-12 md:py-16 lg:py-20">
        <div className="w-[90%] max-w-5xl mx-auto flex flex-col items-center text-center">
          {/* Liberty Logo */}
          <div className="mb-6 md:mb-8">
            <Image
              src="/images/about-us/logo.svg"
              alt="Liberty India emblem"
              width={70}
              height={70}
              className="w-14 h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 object-contain"
            />
          </div>

          {/* Main Heading */}
          <h2
            id="about-us-heading"
            className="text-2xl md:text-3xl lg:text-4xl xl:text-[2.75rem] font-semibold text-gray-900 leading-tight mb-5 md:mb-6"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Storytellers of Transformational Experiences
          </h2>

          {/* Description */}
          <p
            className="text-sm md:text-base text-gray-600 font-light leading-relaxed max-w-3xl mb-8 md:mb-10"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
          >
            We design bespoke journeys across India for discerning global travellers — defined by authentic encounters, privileged access, and seamless execution. Every experience reflects a deep understanding of place, culture, and heritage, crafted with care and delivered with quiet excellence
          </p>

          {/* CTA Button */}
          <a
            href="#contact"
            className="inline-block px-8 py-3 md:px-10 md:py-3.5 text-sm md:text-base font-medium text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-110 cursor-pointer transform"
            style={{
              backgroundColor: '#E07B39',
              fontFamily: 'var(--font-merriweather), Georgia, serif',
            }}
            aria-label="Discover more about Liberty India's travel experiences"
          >
            Discover More
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-[95%] max-w-7xl mx-auto overflow-hidden relative mb-8 md:mb-12 lg:mb-16 rounded-lg">
        <Image
          src="/images/about-us/home-page.png"
          alt="Liberty India team - passionate travel experts committed to crafting exceptional India experiences"
          width={1920}
          height={1080}
          className="w-full h-auto object-contain"
          sizes="95vw"
          priority
        />
      </div>

      {/* SEO-friendly structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Liberty India',
            description:
              'Liberty India is a premier Destination Management Company specializing in bespoke journeys across India for discerning global travellers.',
            url: 'https://libertyindia.com',
            logo: 'https://libertyindia.com/images/about-us/logo.svg',
            sameAs: [],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              availableLanguage: ['English', 'Hindi'],
            },
            areaServed: {
              '@type': 'Country',
              name: 'India',
            },
            knowsAbout: [
              'MICE Travel',
              'Luxury Travel',
              'Heritage Tours',
              'Cultural Experiences',
              'Destination Management',
            ],
          }),
        }}
      />
    </section>
  );
}
