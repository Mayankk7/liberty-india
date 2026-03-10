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
        <div className="relative w-[102vw] h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <Image
            src="/images/about-india/culture/culture-bg.svg"
            alt="Culture of India - Traditional puppets and artistry"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-light tracking-wide drop-shadow-lg"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Culture
            </h1>
          </div>
        </div>
      </section>

      {/* The Living, Breathing Soul of India */}
      <section className="w-full pt-12 md:pt-16 lg:pt-20 pb-0" style={{ backgroundColor: '#FDF8E8' }}>
        <div className="w-[90%] max-w-5xl mx-auto text-center mb-10 md:mb-14">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] font-normal text-gray-900 leading-tight"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            The Living, Breathing Soul of India
          </h2>
        </div>

        {/* Image Grid with Text Card */}
        <div className="w-full relative h-96 md:h-137.5 lg:h-162.5 xl:h-180">
          <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-0">
            <div
              className="relative h-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/about-india/culture/picture-1.svg')" }}
            />
            <div
              className="relative h-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/about-india/culture/picture-2.svg')" }}
            />
            <div
              className="relative h-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/about-india/culture/picture-3.svg')" }}
            />
          </div>

          <div
            className="absolute left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 bg-white px-6 md:px-8 lg:px-10 py-6 md:py-8 lg:py-10 flex items-center z-10 shadow-lg"
            style={{ width: '42%', height: '60%' }}
          >
            <p
              className="text-sm md:text-base lg:text-[15px] text-gray-700 leading-loose lg:leading-loose max-w-lg mx-auto"
              style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
            >
              Indian culture is not something you observe—it&apos;s something you experience and are transformed by. From the rhythmic cycles of ancient festivals to the intricate traditions embedded in daily rituals, culture in India is a profound expression of spirituality, community, and human connection
            </p>
          </div>
        </div>
      </section>

      {/* Liberty India connects you with */}
      <section className="w-full py-10 md:py-12" style={{ backgroundColor: '#FDF8E8' }}>
        <div className="w-[90%] max-w-5xl mx-auto text-center">
          <p
            className="text-base md:text-lg lg:text-xl text-gray-800"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
          >
            Liberty India connects you with India&apos;s cultural wealth through
          </p>
        </div>
      </section>

      {/* A Tapestry of Faiths Section */}
      <section className="w-full bg-white py-10 md:py-14">
        <div className="w-full text-center mb-10 md:mb-14">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            A Tapestry of Faiths
          </h2>
          <p
            className="text-sm md:text-base text-gray-600 leading-relaxed mx-auto text-center"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif', width: '70vw' }}
          >
            India is the birthplace of Hinduism, Buddhism, Jainism, and Sikhism — traditions rooted in karma and dharma — and is also home to vibrant Muslim, Christian, and Zoroastrian communities that enrich its diverse spiritual landscape
          </p>
        </div>

        <ImageTextOverlay
          startPosition="right"
          items={[
            {
              image: '/images/about-india/culture/hinduism.svg',
              alt: 'Hinduism - Temples and rituals',
              title: 'Hinduism',
              description:
                "The world's oldest living spiritual tradition, Hinduism is rooted in the philosophies of dharma and karma, embracing a vast tapestry of rituals, sacred texts, and paths to spiritual liberation",
            },
            {
              image: '/images/about-india/culture/buddhism.svg',
              alt: 'Buddhism - Statues and monasteries',
              title: 'Buddhism',
              description:
                'Founded in India by the Buddha, this timeless philosophy teaches mindfulness, compassion, and the pursuit of enlightenment through the path of balance and inner awakening',
            },
            {
              image: '/images/about-india/culture/jainism.svg',
              alt: 'Jainism - Temples and sculptures',
              title: 'Jainism',
              description:
                "One of India's most ancient faiths, Jainism is centered on non-violence, self-discipline, and spiritual purity, inspiring a profound respect for all living beings",
            },
            {
              image: '/images/about-india/culture/sikhism.svg',
              alt: 'Sikhism - Golden Temple and community',
              title: 'Sikhism',
              description:
                'Born in the Punjab region, Sikhism is a faith of equality, devotion, and selfless service, guided by the teachings of the Gurus and a strong sense of community',
            },
          ]}
        />
      </section>

      {/* Festival Immersion Experiences Section */}
      <section className="w-full bg-white py-10 md:py-14">
        <div className="w-full text-center mb-10 md:mb-14">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Festival Immersion Experiences
          </h2>
          <p
            className="text-sm md:text-base text-gray-600 leading-relaxed mx-auto text-center"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif', width: '70vw' }}
          >
            Time your journey to coincide with India&apos;s most significant cultural celebrations
          </p>
        </div>

        <ImageTextOverlay
          startPosition="right"
          items={[
            {
              image: '/images/about-india/culture/diwali.svg',
              alt: 'Diwali - Festival of Lights',
              title: 'Diwali',
              subtitle: 'October - November',
              description:
                'The Festival of Lights, celebrated with prayers, family gatherings, and the symbolic victory of light over darkness',
            },
            {
              image: '/images/about-india/culture/holi.svg',
              alt: 'Holi - Festival of Colors',
              title: 'Holi',
              subtitle: 'March',
              description:
                'The Festival of Colors, a joyous celebration involving colored powder, bonfires, and communal gatherings (Pan-India)',
            },
          ]}
        />
      </section>

      {/* Artisan & Craft Traditions Section */}
      <section className="w-full bg-white py-10 md:py-14">
        <div className="w-full text-center mb-10 md:mb-14">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-3"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Artisan &amp; Craft Traditions
          </h2>
          <p
            className="text-sm md:text-base text-gray-600 leading-relaxed"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
          >
            Meet the custodians of India&apos;s living craft heritage
          </p>
        </div>

        <div className="mx-auto relative" style={{ width: '70vw' }}>
          {/* 2x2 Image Grid */}
          <div className="grid grid-cols-2 gap-0">
            {/* Top Left - Textile */}
            <div className="relative aspect-4/3">
              <Image
                src="/images/about-india/culture/textile.svg"
                alt="Textile Traditions"
                fill
                className="object-cover"
              />
            </div>
            {/* Top Right - Pottery */}
            <div className="relative aspect-4/3">
              <Image
                src="/images/about-india/culture/pottery.svg"
                alt="Pottery & Ceramics"
                fill
                className="object-cover"
              />
            </div>
            {/* Bottom Left - Metal Work */}
            <div className="relative aspect-4/3">
              <Image
                src="/images/about-india/culture/metal-work.svg"
                alt="Metal Work & Jewellery"
                fill
                className="object-cover"
              />
            </div>
            {/* Bottom Right - Wood Carving */}
            <div className="relative aspect-4/3">
              <Image
                src="/images/about-india/culture/carving.svg"
                alt="Kashmiri Wood Carving"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Center Overlapping Text Cards - 2x2 grid */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-2 gap-0.5 w-[55%] md:w-[50%] z-10">
            <div className="bg-white/95 px-4 py-4 md:px-6 md:py-5">
              <h3
                className="text-sm md:text-base lg:text-lg font-semibold text-gray-900 mb-1"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Textile Traditions
              </h3>
              <p
                className="text-xs md:text-sm text-gray-600 leading-relaxed"
                style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
              >
                Handwoven silks and vibrant fabrics reflecting India&apos;s rich regional craftsmanship
              </p>
            </div>
            <div className="bg-white/95 px-4 py-4 md:px-6 md:py-5">
              <h3
                className="text-sm md:text-base lg:text-lg font-semibold text-gray-900 mb-1"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Pottery &amp; Ceramics
              </h3>
              <p
                className="text-xs md:text-sm text-gray-600 leading-relaxed"
                style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
              >
                Earthy creations shaped by traditional techniques and timeless design
              </p>
            </div>
            <div className="bg-white/95 px-4 py-4 md:px-6 md:py-5">
              <h3
                className="text-sm md:text-base lg:text-lg font-semibold text-gray-900 mb-1"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Metal Work &amp; Jewellery
              </h3>
              <p
                className="text-xs md:text-sm text-gray-600 leading-relaxed"
                style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
              >
                Intricate craftsmanship expressed through ornate metal artefacts and jewellery
              </p>
            </div>
            <div className="bg-white/95 px-4 py-4 md:px-6 md:py-5">
              <h3
                className="text-sm md:text-base lg:text-lg font-semibold text-gray-900 mb-1"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Kashmiri Wood Carving
              </h3>
              <p
                className="text-xs md:text-sm text-gray-600 leading-relaxed"
                style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
              >
                Delicately carved walnut wood creations showcasing timeless artistry
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Itineraries Section */}
      <ItineraryCards
        heading={"Explore the Culture\nExperience the Journey"}
        subheading="Immerse yourself in India's living traditions with journeys designed for the culturally curious"
        bgColor="#FDF39F4D"
        items={[
          {
            image: '/images/itineraries/rajasthan.svg',
            alt: 'Colourful Rajasthan',
            category: 'Culture & Heritage',
            bestTime: 'October - March',
            title: 'Colourful Rajasthan',
            description: "Traverse inward to Rajasthan's regal palaces and royal heritage. From desert forts to palace lakes, experience majestic Jodhpur, Udaipur, Jaipur, and authentic cultural encounters.",
            price: 1330,
            duration: '14 Days',
          },
          {
            image: '/images/itineraries/north-india.svg',
            alt: 'Gems of North India',
            category: 'Spiritual & Cultural',
            bestTime: 'October - March',
            title: 'Gems of North India',
            description: "Explore North India's sacred soil and cultural tapestry. From the red fort of Agra to Varanasi's timeless ghats, explore Hindu temples and shrines of Rishikesh and Haridwar.",
            price: 1330,
            duration: '9 Days',
          },
          {
            image: '/images/itineraries/south-india.svg',
            alt: 'Gems of South India',
            category: 'Culture & History',
            bestTime: 'October - March',
            title: 'Gems of South India',
            description: "See the best South India has to offer including the holy towns, coastal temples, historic hill stations, magnificent temples, and pristine coastal shores.",
            price: 1330,
            duration: '12 Days',
          },
        ]}
      />

      {/* Footer */}
      <Footer />
    </main>
  );
}
