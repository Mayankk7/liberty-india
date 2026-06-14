'use client';

import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageTextOverlay from '../components/ImageTextOverlay';
import ItineraryCards from '../components/ItineraryCards';

export default function CulturePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar with white background */}
      <Navbar variant="white" />

      {/* Hero Section with Culture Image */}
      <section className="relative w-full pt-16">
        <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden bg-[#3a2f1f]">
          <Image
            src="https://ik.imagekit.io/libertyindia/about-india/culture/culture-bg.svg"
            alt="Culture of India - Traditional puppets and artistry"
            fill
            className="object-cover scale-[1.25] origin-center"
            style={{ objectPosition: 'center' }}
            priority
          />
          {/* 20% opacity overlay */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl xl:text-7xl text-white font-semibold tracking-wide drop-shadow-lg"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Culture
            </h1>
          </div>
        </div>
      </section>

      {/* The Living, Breathing Soul of India */}
      <section className="w-full pt-6 md:pt-16 lg:pt-20 pb-0" style={{ backgroundColor: '#FDF8E8' }}>
        <div className="w-[90%] max-w-5xl mx-auto text-center mb-12 md:mb-14">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] font-normal text-[#424242] leading-tight"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Where Every Thread Tells a Tale
          </h2>
        </div>

        {/* Image Grid with Text Card.
         * Mobile: photos stack into a continuous vertical backdrop (grid-rows-3)
         * with the white banner centred on top, framed by photo bands (container
         * py); desktop keeps the 3-up triptych + overlay card. */}
        <div className="w-full relative h-auto py-32 sm:py-40 md:py-0 md:h-137.5 lg:h-162.5 xl:h-180">
          <div className="absolute inset-0 grid grid-cols-1 grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-0">
            <div
              className="relative h-full bg-cover bg-center"
              style={{ backgroundImage: "url('https://ik.imagekit.io/libertyindia/about-india/culture/picture-1.svg')" }}
            />
            <div
              className="relative h-full bg-cover bg-center"
              style={{ backgroundImage: "url('https://ik.imagekit.io/libertyindia/about-india/culture/picture-2.svg')" }}
            />
            <div
              className="relative h-full bg-cover bg-center"
              style={{ backgroundImage: "url('https://ik.imagekit.io/libertyindia/about-india/culture/picture-3.svg')" }}
            />
          </div>

          <div className="relative md:absolute mx-4 md:mx-0 md:top-12 lg:top-16 md:left-8 lg:left-12 w-auto md:w-[42%] bg-white px-6 py-6 md:px-9 md:py-8 shadow-md text-left z-10">
            <p
              className="text-lg md:text-xl lg:text-[22px] text-[#424242] leading-loose"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Indian culture is not something you observe—it&apos;s something you experience and are transformed by. From the rhythmic cycles of ancient festivals to the intricate traditions embedded in daily rituals, culture in India is a profound expression of spirituality, community, and human connection
            </p>
          </div>
        </div>
      </section>

      {/* Liberty India connects you with */}
      <section className="w-full py-6 md:py-12" style={{ backgroundColor: '#FDF8E8' }}>
        <div className="w-[90%] max-w-5xl mx-auto text-center">
          <p
            className="text-xl md:text-2xl lg:text-3xl font-bold text-[#424242]"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Liberty India connects you with India&apos;s cultural wealth through
          </p>
        </div>
      </section>

      {/* A Tapestry of Faiths Section */}
      <section className="w-full bg-white pt-6 pb-2 md:py-14">
        <div className="w-full text-center mb-12 md:mb-14">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#424242] mb-2 md:mb-4 mx-auto"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif', width: '70vw' }}
          >
            A Tapestry of Faiths
          </h2>
          <p
            className="text-sm md:text-base text-[#424242] leading-relaxed mx-auto text-center"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif', width: '70vw' }}
          >
            India is the birthplace of Hinduism, Buddhism, Jainism, and Sikhism — traditions rooted in karma and dharma — and is also home to vibrant Muslim, Christian, and Zoroastrian communities that enrich its diverse spiritual landscape
          </p>
        </div>

        <ImageTextOverlay
          variant="heritage"
          startPosition="right"
          items={[
            {
              image: 'https://ik.imagekit.io/libertyindia/about-india/culture/hinduism.png',
              alt: 'Hinduism - Temples and rituals',
              title: 'Hinduism',
              description:
                "The world's oldest living spiritual tradition, Hinduism is rooted in the philosophies of dharma and karma, embracing a vast tapestry of rituals, sacred texts, and paths to spiritual liberation",
            },
            {
              image: 'https://ik.imagekit.io/libertyindia/about-india/culture/buddhism.svg',
              alt: 'Buddhism - Statues and monasteries',
              title: 'Buddhism',
              description:
                'Founded in India by the Buddha, this timeless philosophy teaches mindfulness, compassion, and the pursuit of enlightenment through the path of balance and inner awakening',
            },
            {
              image: 'https://ik.imagekit.io/libertyindia/about-india/culture/jainism.svg',
              alt: 'Jainism - Temples and sculptures',
              title: 'Jainism',
              description:
                "One of India's most ancient faiths, Jainism is centered on non-violence, self-discipline, and spiritual purity, inspiring a profound respect for all living beings",
            },
            {
              image: 'https://ik.imagekit.io/libertyindia/about-india/culture/sikhism.svg',
              alt: 'Sikhism - Golden Temple and community',
              title: 'Sikhism',
              description:
                'Born in the Punjab region, Sikhism is a faith of equality, devotion, and selfless service, guided by the teachings of the Gurus and a strong sense of community',
            },
          ]}
        />
      </section>

      {/* Festival Immersion Experiences Section */}
      <section className="w-full bg-white pt-8 pb-2 md:py-14">
        <div className="w-full text-center mb-12 md:mb-14">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#424242] mb-2 md:mb-4 mx-auto"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif', width: '70vw' }}
          >
            Festival Immersion Experiences
          </h2>
          <p
            className="text-sm md:text-base text-[#424242] leading-relaxed mx-auto text-center"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif', width: '70vw' }}
          >
            Time your journey to coincide with India&apos;s most significant cultural celebrations
          </p>
        </div>

        <ImageTextOverlay
          variant="heritage"
          startPosition="right"
          items={[
            {
              image: 'https://ik.imagekit.io/libertyindia/about-india/culture/diwali.svg',
              alt: 'Diwali - Festival of Lights',
              title: 'Diwali',
              subtitle: 'October - November',
              description:
                'The Festival of Lights, celebrated with prayers, family gatherings, and the symbolic victory of light over darkness',
            },
            {
              image: 'https://ik.imagekit.io/libertyindia/about-india/culture/holi.svg',
              alt: 'Holi - Festival of Colours',
              title: 'Holi',
              subtitle: 'March',
              description:
                'The Festival of Colours, a joyous celebration involving coloured powder, bonfires, and communal gatherings (Pan-India)',
            },
          ]}
        />
      </section>

      {/* Artisan & Craft Traditions Section */}
      <section className="w-full bg-white pt-8 md:pt-4 pb-10 md:pb-14">
        <div className="w-full text-center mb-6 md:mb-8">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#424242] mb-2 md:mb-3"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Artisan &amp; Craft Traditions
          </h2>
          <p
            className="text-sm md:text-base text-[#424242] leading-relaxed"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
          >
            Meet the custodians of India&apos;s living craft heritage
          </p>
        </div>

        {/* Desktop: 2×2 image collage with centred text cards */}
        <div className="hidden md:block mx-auto relative" style={{ width: '85vw' }}>
          {/* 2x2 Image Grid */}
          <div className="grid grid-cols-2 gap-0">
            {/* Top Left - Textile */}
            <div className="relative aspect-square md:aspect-4/3">
              <Image
                src="https://ik.imagekit.io/libertyindia/about-india/culture/textile.svg"
                alt="Textile Traditions"
                fill
                className="object-cover"
              />
            </div>
            {/* Top Right - Pottery */}
            <div className="relative aspect-square md:aspect-4/3">
              <Image
                src="https://ik.imagekit.io/libertyindia/about-india/culture/pottery.svg"
                alt="Pottery & Ceramics"
                fill
                className="object-cover"
              />
            </div>
            {/* Bottom Left - Metal Work */}
            <div className="relative aspect-square md:aspect-4/3">
              <Image
                src="https://ik.imagekit.io/libertyindia/about-india/culture/metal-work.svg"
                alt="Metal Work & Jewellery"
                fill
                className="object-cover"
              />
            </div>
            {/* Bottom Right - Wood Carving */}
            <div className="relative aspect-square md:aspect-4/3">
              <Image
                src="https://ik.imagekit.io/libertyindia/about-india/culture/carving.png"
                alt="Kashmiri Wood Carving"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Center Overlapping Text Cards - 2x2 grid */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-2 gap-0.5 w-[72%] md:w-[60%] z-10">
            <div className="bg-white px-4 py-4 md:px-6 md:py-5">
              <h3
                className="text-sm md:text-base lg:text-lg font-semibold text-[#424242] mb-1"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Textile Traditions
              </h3>
              <p
                className="text-xs md:text-sm text-[#424242] leading-relaxed"
                style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
              >
                Handwoven silks and vibrant fabrics reflecting India&apos;s rich regional craftsmanship
              </p>
            </div>
            <div className="bg-white px-4 py-4 md:px-6 md:py-5">
              <h3
                className="text-sm md:text-base lg:text-lg font-semibold text-[#424242] mb-1"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Pottery &amp; Ceramics
              </h3>
              <p
                className="text-xs md:text-sm text-[#424242] leading-relaxed"
                style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
              >
                Earthy creations shaped by traditional techniques and timeless design
              </p>
            </div>
            <div className="bg-white px-4 py-4 md:px-6 md:py-5">
              <h3
                className="text-sm md:text-base lg:text-lg font-semibold text-[#424242] mb-1"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Metal Work &amp; Jewellery
              </h3>
              <p
                className="text-xs md:text-sm text-[#424242] leading-relaxed"
                style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
              >
                Intricate craftsmanship expressed through ornate metal artefacts and jewellery
              </p>
            </div>
            <div className="bg-white px-4 py-4 md:px-6 md:py-5">
              <h3
                className="text-sm md:text-base lg:text-lg font-semibold text-[#424242] mb-1"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Kashmiri Wood Carving
              </h3>
              <p
                className="text-xs md:text-sm text-[#424242] leading-relaxed"
                style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
              >
                Delicately carved walnut wood creations showcasing timeless artistry
              </p>
            </div>
          </div>
        </div>

        {/* Mobile: stacked image-on-top + caption-below cards — the desktop collage's
            floating centre text cards are too cramped on a phone */}
        <div className="md:hidden w-[90%] mx-auto space-y-12">
          {[
            {
              src: 'https://ik.imagekit.io/libertyindia/about-india/culture/textile.svg',
              alt: 'Textile Traditions',
              title: 'Textile Traditions',
              body: "Handwoven silks and vibrant fabrics reflecting India's rich regional craftsmanship",
            },
            {
              src: 'https://ik.imagekit.io/libertyindia/about-india/culture/pottery.svg',
              alt: 'Pottery & Ceramics',
              title: 'Pottery & Ceramics',
              body: 'Earthy creations shaped by traditional techniques and timeless design',
            },
            {
              src: 'https://ik.imagekit.io/libertyindia/about-india/culture/metal-work.svg',
              alt: 'Metal Work & Jewellery',
              title: 'Metal Work & Jewellery',
              body: 'Intricate craftsmanship expressed through ornate metal artefacts and jewellery',
            },
            {
              src: 'https://ik.imagekit.io/libertyindia/about-india/culture/carving.png',
              alt: 'Kashmiri Wood Carving',
              title: 'Kashmiri Wood Carving',
              body: 'Delicately carved walnut wood creations showcasing timeless artistry',
            },
          ].map((c) => (
            <div key={c.title} className="relative w-full">
              <Image
                src={c.src}
                alt={c.alt}
                width={800}
                height={600}
                className="w-full h-[240px] sm:h-[320px] object-cover"
              />
              <div className="relative z-10 -mt-12 mx-auto w-[90%] bg-white p-5 shadow-md text-left">
                <h3
                  className="text-xl font-bold text-[#424242] mb-2"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  {c.title}
                </h3>
                <p
                  className="text-[13px] text-[#424242] leading-loose"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  {c.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Culture Itineraries Section */}
        <ItineraryCards
          heading={"Explore the Culture.\nExperience the Journey."}
          subheading="Immerse yourself in India's living traditions with journeys designed for the culturally curious"
          bgColor="#FDF39F4D"
          category="Culture"
        />

      {/* Footer */}
      <Footer />
    </main>
  );
}
