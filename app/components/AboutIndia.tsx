'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutIndia() {
  return (
    <section
      id="about-india"
      className="w-full relative"
      aria-labelledby="about-india-heading"
    >
      {/* Background Collage with India Map Overlay */}
      <div className="relative w-full min-h-150 md:min-h-175 lg:min-h-200 mb-8 md:mb-12 lg:mb-16">
        {/* Layer 1: Background Collage - full width edge to edge */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-india/home/collage-fixed.png"
            alt="Collage of India's diverse destinations including heritage sites, wildlife, culture, and natural landscapes"
            fill
            className="object-cover object-center w-full h-full"
            sizes="100vw"
            priority
          />
        </div>

        {/* Layer 2: India Map Overlay - semi-transparent white silhouette */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none -mt-4 md:-mt-5 lg:-mt-6">
          <Image
            src="/images/about-india/home/india-map.svg"
            alt="India map silhouette"
            width={600}
            height={700}
            className="w-[55%] md:w-[45%] lg:w-[40%] h-auto object-contain drop-shadow-lg"
            priority
          />
        </div>

        {/* Layer 3: Text Content - left-aligned, centered within the map */}
        <div className="absolute inset-0 z-20 flex items-center justify-center -mt-4 md:-mt-5 lg:-mt-6">
          <div className="flex flex-col items-start justify-center text-left -ml-28 md:-ml-36 lg:-ml-48">
            {/* Heading */}
            <h2
              id="about-india-heading"
              className="text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-800 leading-snug mb-2 md:mb-3"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              India&apos;s
              <br />
              Extraordinary
              <br />
              Tapestry, Woven
              <br />
              by Liberty
            </h2>

            {/* Description */}
            <p
              className="text-[9px] md:text-[10px] lg:text-xs text-gray-600 font-light leading-relaxed max-w-45 md:max-w-50 lg:max-w-56"
              style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
            >
              For 20 years, exclusive relationships with artisans, communities, and heritage custodians have powered our bespoke MICE, weddings, and cultural journeys.
            </p>
          </div>
        </div>
      </div>

      {/* India Experience Cards Grid */}
      <div className="w-full max-w-[70%] mx-auto px-4 md:px-6 lg:px-8 pb-12 md:pb-16 lg:pb-20">
        {/* Row 1: Heritage, Culture, Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
          {/* Heritage Card */}
          <Link href="/heritage" className="group relative h-72 md:h-84 lg:h-96 rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ease-out shadow-lg hover:shadow-2xl hover:-translate-y-1 block">
            <Image
              src="/images/about-india/home/heritage.svg"
              alt="Heritage - Living Legacies"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/40 transition-opacity duration-500 group-hover:from-black/50 group-hover:to-black/70" />
            <div className="absolute inset-0 flex flex-col justify-between items-center text-center p-5 md:p-6">
              <h3
                className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Heritage
              </h3>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <p
                  className="text-lg md:text-xl font-medium text-white mb-1 drop-shadow-md"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Living Legacies
                </p>
                <p
                  className="text-sm md:text-base text-white/90 font-light leading-relaxed drop-shadow"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  5,000 years of history experienced where it still lives.
                </p>
              </div>
            </div>
          </Link>

          {/* Culture Card */}
          <Link href="/culture" className="group relative h-72 md:h-84 lg:h-96 rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ease-out shadow-lg hover:shadow-2xl hover:-translate-y-1">
            <Image
              src="/images/about-india/home/culture.svg"
              alt="Culture - The Pulse of India"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/40 transition-opacity duration-500 group-hover:from-black/50 group-hover:to-black/70" />
            <div className="absolute inset-0 flex flex-col justify-between items-center text-center p-5 md:p-6">
              <h3
                className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Culture
              </h3>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <p
                  className="text-lg md:text-xl font-medium text-white mb-1 drop-shadow-md"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  The Pulse of India
                </p>
                <p
                  className="text-sm md:text-base text-white/90 font-light leading-relaxed drop-shadow"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  Festivals, rituals, and traditions woven into everyday life.
                </p>
              </div>
            </div>
          </Link>

          {/* Architecture Card */}
          <div className="group relative h-72 md:h-84 lg:h-96 rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ease-out shadow-lg hover:shadow-2xl hover:-translate-y-1">
            <Image
              src="/images/about-india/home/architecture.svg"
              alt="Architecture - Monuments Beyond Imagination"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/40 transition-opacity duration-500 group-hover:from-black/50 group-hover:to-black/70" />
            <div className="absolute inset-0 flex flex-col justify-between items-center text-center p-5 md:p-6">
              <h3
                className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Architecture
              </h3>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <p
                  className="text-lg md:text-xl font-medium text-white mb-1 drop-shadow-md"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Monuments Beyond Imagination
                </p>
                <p
                  className="text-sm md:text-base text-white/90 font-light leading-relaxed drop-shadow"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  Temples, palaces, and cities shaped by vision and heritage.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Nature (larger), Spiritual (smaller) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-2">
          {/* Nature Card - 3/5 width */}
          <div className="md:col-span-3 group relative h-72 md:h-84 lg:h-96 rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ease-out shadow-lg hover:shadow-2xl hover:-translate-y-1">
            <Image
              src="/images/about-india/home/nature.svg"
              alt="Nature - Landscapes Without Limits"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/40 transition-opacity duration-500 group-hover:from-black/50 group-hover:to-black/70" />
            <div className="absolute inset-0 flex flex-col justify-between items-center text-center p-5 md:p-6">
              <h3
                className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Nature
              </h3>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <p
                  className="text-lg md:text-xl font-medium text-white mb-1 drop-shadow-md"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Landscapes Without Limits
                </p>
                <p
                  className="text-sm md:text-base text-white/90 font-light leading-relaxed drop-shadow"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  From Himalayan peaks to tropical backwaters and deserts.
                </p>
              </div>
            </div>
          </div>

          {/* Spiritual Card - 2/5 width */}
          <div className="md:col-span-2 group relative h-72 md:h-84 lg:h-96 rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ease-out shadow-lg hover:shadow-2xl hover:-translate-y-1">
            <Image
              src="/images/about-india/home/spiritual.svg"
              alt="Spiritual - Paths of Inner Discovery"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/40 transition-opacity duration-500 group-hover:from-black/50 group-hover:to-black/70" />
            <div className="absolute inset-0 flex flex-col justify-between items-center text-center p-5 md:p-6">
              <h3
                className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Spiritual
              </h3>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <p
                  className="text-lg md:text-xl font-medium text-white mb-1 drop-shadow-md"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Paths of Inner Discovery
                </p>
                <p
                  className="text-sm md:text-base text-white/90 font-light leading-relaxed drop-shadow"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  Sacred journeys through the world&apos;s deepest philosophies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Wellness (smaller), Wildlife (larger) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
          {/* Wellness Card - 2/5 width */}
          <div className="md:col-span-2 group relative h-72 md:h-84 lg:h-96 rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ease-out shadow-lg hover:shadow-2xl hover:-translate-y-1">
            <Image
              src="/images/about-india/home/wellness.svg"
              alt="Wellness - Ancient Wisdom, Modern Renewal"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/40 transition-opacity duration-500 group-hover:from-black/50 group-hover:to-black/70" />
            <div className="absolute inset-0 flex flex-col justify-between items-center text-center p-5 md:p-6">
              <h3
                className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Wellness
              </h3>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <p
                  className="text-lg md:text-xl font-medium text-white mb-1 drop-shadow-md"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Ancient Wisdom, Modern Renewal
                </p>
                <p
                  className="text-sm md:text-base text-white/90 font-light leading-relaxed drop-shadow"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  Yoga, Ayurveda, and healing rooted in centuries of knowledge.
                </p>
              </div>
            </div>
          </div>

          {/* Wildlife Card - 3/5 width */}
          <div className="md:col-span-3 group relative h-72 md:h-84 lg:h-96 rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ease-out shadow-lg hover:shadow-2xl hover:-translate-y-1">
            <Image
              src="/images/about-india/home/wildlife.svg"
              alt="Wildlife - Into the Wild Heart of India"
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/40 transition-opacity duration-500 group-hover:from-black/50 group-hover:to-black/70" />
            <div className="absolute inset-0 flex flex-col justify-between items-center text-center p-5 md:p-6">
              <h3
                className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Wildlife
              </h3>
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <p
                  className="text-lg md:text-xl font-medium text-white mb-1 drop-shadow-md"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Into the Wild Heart of India
                </p>
                <p
                  className="text-sm md:text-base text-white/90 font-light leading-relaxed drop-shadow"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  Rare encounters across forests, mountains, and wetlands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Divider Section */}
      <div className="relative w-full overflow-hidden">
        <Image
          src="/images/about-india/section-end.svg"
          alt="Mountain landscape with inspirational quote"
          width={1920}
          height={600}
          className="w-full h-auto object-contain"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center w-full">
          <p
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white text-center font-medium leading-snug w-full px-2 md:px-6 lg:px-10 drop-shadow-lg"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            &ldquo;Journeys, when crafted with intention,<br />become lifelong memories&rdquo;
          </p>
        </div>
      </div>

      {/* SEO-friendly structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TouristDestination',
            name: 'India',
            description:
              'Explore India\'s extraordinary tapestry of heritage, culture, wildlife, and natural landscapes with Liberty India\'s bespoke travel experiences.',
            touristType: [
              'Cultural Tourist',
              'Heritage Tourist',
              'Wildlife Enthusiast',
              'Wellness Traveler',
              'Adventure Seeker',
            ],
            includesAttraction: [
              {
                '@type': 'TouristAttraction',
                name: 'Heritage Sites',
                description: 'Ancient temples, palaces, and UNESCO World Heritage sites',
              },
              {
                '@type': 'TouristAttraction',
                name: 'Wildlife Sanctuaries',
                description: 'Tiger reserves and diverse wildlife ecosystems',
              },
              {
                '@type': 'TouristAttraction',
                name: 'Cultural Experiences',
                description: 'Traditional arts, crafts, and authentic local encounters',
              },
            ],
          }),
        }}
      />
    </section>
  );
}
