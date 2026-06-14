'use client';

import Image from 'next/image';
import ImageWithLoader from './ImageWithLoader';
import Link from 'next/link';
import Reveal from './Reveal';

export default function AboutIndia() {
  return (
    <section
      id="about-india"
      className="w-full relative"
      aria-labelledby="about-india-heading"
    >
      {/* Background Collage with India Map Overlay */}
      <div id="india-map-band" data-navbar-hide className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[640px] lg:min-h-[720px] mb-8 md:mb-12 lg:mb-16">
        {/* Layer 1: Collage covers full background */}
        <div className="absolute left-0 top-0 w-screen h-full z-0">
          <Image
            src="https://ik.imagekit.io/libertyindia/about-india/home/Collage.png"
            alt="Collage of India's diverse destinations including heritage sites, wildlife, culture, and natural landscapes"
            fill
            className="object-cover object-center w-full h-full"
            sizes="100vw"
            priority
          />
        </div>

        {/* Layer 2: India Map centered, same height as collage */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <Image
            src="https://ik.imagekit.io/libertyindia/about-india/home/india-map.svg"
            alt="India map silhouette"
            fill
            className="h-full w-auto max-h-full object-contain drop-shadow-lg"
            priority
          />
        </div>

      </div>

      {/* India Experience Cards Grid */}
      <div className="w-[88%] max-w-7xl mx-auto pb-12 md:pb-16 lg:pb-20">
        {/* Row 1: Heritage, Culture, Architecture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-2">
          {/* Heritage Card */}
          <Reveal>
          <Link href="/heritage" className="group card-lift relative h-56 sm:h-64 md:h-84 lg:h-96 rounded-lg cursor-pointer shadow-lg block">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <ImageWithLoader
                sizes="(max-width: 768px) 100vw, 33vw"
                src="https://ik.imagekit.io/libertyindia/about-india/home/Heritage.png"
                alt="Heritage - Living Legacies"
                fill
                className="object-cover card-zoom"
              />
            </div>
            {/* Two stacked gradients crossfaded via opacity — animating the
                gradient stops themselves snaps (they aren't transitionable). */}
            <div className="absolute inset-0 rounded-lg bg-linear-to-b from-black/30 via-transparent to-black/40" />
            <div className="absolute inset-0 rounded-lg bg-linear-to-b from-black/50 via-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <div className="absolute inset-0 flex flex-col justify-between items-center text-center p-5 md:p-6">
              <h3
                className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Heritage
              </h3>
              <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
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
          </Reveal>

          {/* Culture Card */}
          <Reveal delay={80}>
          <Link href="/culture" className="group card-lift relative h-56 sm:h-64 md:h-84 lg:h-96 rounded-lg cursor-pointer shadow-lg block">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <ImageWithLoader
                sizes="(max-width: 768px) 100vw, 33vw"
                src="https://ik.imagekit.io/libertyindia/about-india/home/culture.png"
                alt="Culture - The Pulse of India"
                fill
                className="object-cover card-zoom"
              />
            </div>
            {/* Two stacked gradients crossfaded via opacity — animating the
                gradient stops themselves snaps (they aren't transitionable). */}
            <div className="absolute inset-0 rounded-lg bg-linear-to-b from-black/30 via-transparent to-black/40" />
            <div className="absolute inset-0 rounded-lg bg-linear-to-b from-black/50 via-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <div className="absolute inset-0 flex flex-col justify-between items-center text-center p-5 md:p-6">
              <h3
                className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Culture
              </h3>
              <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
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
          </Reveal>

          {/* Architecture Card */}
          <Reveal delay={160}>
          <Link href="/architecture" className="group card-lift relative h-56 sm:h-64 md:h-84 lg:h-96 rounded-lg cursor-pointer shadow-lg block">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <ImageWithLoader
                sizes="(max-width: 768px) 100vw, 33vw"
                src="https://ik.imagekit.io/libertyindia/about-india/home/Architecture.png"
                alt="Architecture - Monuments Beyond Imagination"
                fill
                className="object-cover card-zoom"
              />
            </div>
            {/* Two stacked gradients crossfaded via opacity — animating the
                gradient stops themselves snaps (they aren't transitionable). */}
            <div className="absolute inset-0 rounded-lg bg-linear-to-b from-black/30 via-transparent to-black/40" />
            <div className="absolute inset-0 rounded-lg bg-linear-to-b from-black/50 via-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <div className="absolute inset-0 flex flex-col justify-between items-center text-center p-5 md:p-6">
              <h3
                className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Architecture
              </h3>
              <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
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
          </Link>
          </Reveal>
        </div>

        {/* Row 2: Nature (larger), Spiritual (smaller) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-2">
          {/* Nature Card - 3/5 width */}
          <Reveal className="md:col-span-3">
          <Link href="/nature" className="group card-lift relative h-56 sm:h-64 md:h-84 lg:h-96 rounded-lg cursor-pointer shadow-lg block">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <Image
                  src="https://ik.imagekit.io/libertyindia/about-india/home/nature.png?updatedAt=1773508275329"
                  alt="Nature - Landscapes Without Limits"
                  fill
                  className="object-cover card-zoom"
                />
            </div>
            {/* Two stacked gradients crossfaded via opacity — animating the
                gradient stops themselves snaps (they aren't transitionable). */}
            <div className="absolute inset-0 rounded-lg bg-linear-to-b from-black/30 via-transparent to-black/40" />
            <div className="absolute inset-0 rounded-lg bg-linear-to-b from-black/50 via-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <div className="absolute inset-0 flex flex-col justify-between items-center text-center p-5 md:p-6">
              <h3
                className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Nature
              </h3>
              <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
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
          </Link>
          </Reveal>

          {/* Spiritual Card - 2/5 width */}
          <Reveal className="md:col-span-2" delay={80}>
          <div className="group card-lift relative h-56 sm:h-64 md:h-84 lg:h-96 rounded-lg cursor-pointer shadow-lg">
            <Link href="/spiritual" className="block w-full h-full">
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <Image
                  src="https://ik.imagekit.io/libertyindia/about-india/home/spiritual.svg"
                  alt="Spiritual - Paths of Inner Discovery"
                  fill
                  className="object-cover card-zoom"
                />
              </div>
              {/* Two stacked gradients crossfaded via opacity — animating the
                gradient stops themselves snaps (they aren't transitionable). */}
            <div className="absolute inset-0 rounded-lg bg-linear-to-b from-black/30 via-transparent to-black/40" />
            <div className="absolute inset-0 rounded-lg bg-linear-to-b from-black/50 via-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <div className="absolute inset-0 flex flex-col justify-between items-center text-center p-5 md:p-6">
                <h3
                  className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Spiritual
                </h3>
                <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
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
                    From sacred rivers to ancient temples and spiritual traditions.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          </Reveal>
        </div>

        {/* Row 3: Wellness (smaller), Wildlife (larger) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
          {/* Wellness Card - 2/5 width */}
          <Reveal className="md:col-span-2">
          <Link href="/wellness" className="group card-lift relative h-56 sm:h-64 md:h-84 lg:h-96 rounded-lg cursor-pointer shadow-lg block" onClick={e => { if (!['/wellness'].includes('/wellness')) { e.preventDefault(); window.location.href = '/under-development'; } }}>
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <ImageWithLoader
                sizes="(max-width: 768px) 100vw, 33vw"
                src="https://ik.imagekit.io/libertyindia/about-india/home/wellness.png"
                alt="Wellness - Ancient Wisdom, Modern Renewal"
                fill
                className="object-cover card-zoom"
              />
            </div>
            {/* Two stacked gradients crossfaded via opacity — animating the
                gradient stops themselves snaps (they aren't transitionable). */}
            <div className="absolute inset-0 rounded-lg bg-linear-to-b from-black/30 via-transparent to-black/40" />
            <div className="absolute inset-0 rounded-lg bg-linear-to-b from-black/50 via-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <div className="absolute inset-0 flex flex-col justify-between items-center text-center p-5 md:p-6">
              <h3
                className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Wellness
              </h3>
              <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
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
          </Link>
          </Reveal>

          {/* Wildlife Card - 3/5 width */}
          <Reveal className="md:col-span-3" delay={80}>
          <Link href="/wildlife" className="group card-lift relative h-56 sm:h-64 md:h-84 lg:h-96 rounded-lg cursor-pointer shadow-lg block" onClick={e => { if (!['/wildlife'].includes('/wildlife')) { e.preventDefault(); window.location.href = '/under-development'; } }}>
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <ImageWithLoader
                sizes="(max-width: 768px) 100vw, 33vw"
                src="https://ik.imagekit.io/libertyindia/about-india/home/wildlife.png"
                alt="Wildlife - Into the Wild Heart of India"
                fill
                className="object-cover card-zoom"
              />
            </div>
            {/* Two stacked gradients crossfaded via opacity — animating the
                gradient stops themselves snaps (they aren't transitionable). */}
            <div className="absolute inset-0 rounded-lg bg-linear-to-b from-black/30 via-transparent to-black/40" />
            <div className="absolute inset-0 rounded-lg bg-linear-to-b from-black/50 via-transparent to-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            <div className="absolute inset-0 flex flex-col justify-between items-center text-center p-5 md:p-6">
              <h3
                className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Wildlife
              </h3>
              <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
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
          </Link>
          </Reveal>
        </div>
      </div>

      {/* Quote Divider Section */}
      <Reveal className="relative w-full overflow-hidden">
        <Image
          src="https://ik.imagekit.io/libertyindia/about-india/section-end.svg"
          alt="Mountain landscape with inspirational quote"
          width={1920}
          height={600}
          className="w-full h-auto object-contain"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center w-full">
          <p
            className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white text-center font-medium leading-snug w-full px-2 md:px-6 lg:px-10 drop-shadow-lg"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            &ldquo;Journeys, when crafted with intention,<br />become lifelong memories&rdquo;
          </p>
        </div>
      </Reveal>

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
