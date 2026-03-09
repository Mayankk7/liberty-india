'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageTextOverlay from '../components/ImageTextOverlay';
import ItineraryCards from '../components/ItineraryCards';

export default function HeritagePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar with white background */}
      <Navbar variant="white" />

      {/* Hero Section with Heritage Image */}
      <section className="relative w-full pt-16">
        {/* Heritage Image with Overlay */}
        <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <Image
            src="/images/about-india/heritage/headers-bg.svg"
            alt="Heritage of India - Ancient doors and architecture"
            fill
            className="object-cover object-center"
            priority
          />
          
          {/* Heritage Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-light tracking-wide drop-shadow-lg"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Heritage
            </h1>
          </div>
        </div>
      </section>

      {/* 5,000 Years Section with Image Grid */}
      <section className="w-full pt-12 md:pt-16 lg:pt-20 pb-0" style={{ backgroundColor: '#FDF8E8' }}>
        {/* Heading */}
        <div className="w-[90%] max-w-5xl mx-auto text-center mb-10 md:mb-14">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] font-normal text-gray-900 leading-tight"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            5,000 Years Written in Stone
          </h2>
        </div>

        {/* Image Grid with Text Card */}
        <div className="w-full relative h-96 md:h-[550px] lg:h-[650px] xl:h-[720px]">
          {/* Background Images Grid */}
          <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Image 1 */}
            <div 
              className="relative h-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/about-india/heritage/picture-1.svg')" }}
            />

            {/* Image 2 */}
            <div 
              className="relative h-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/about-india/heritage/picture-2.svg')" }}
            />

            {/* Image 3 */}
            <div 
              className="relative h-full bg-cover bg-center"
              style={{ backgroundImage: "url('/images/about-india/heritage/picture-3.svg')" }}
            />
          </div>

          {/* Text Card Overlay */}
          <div 
            className="absolute left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 bg-white px-6 md:px-8 lg:px-10 py-6 md:py-8 lg:py-10 flex items-center z-10 shadow-lg"
            style={{ width: '42%', height: '60%' }}
          >
            <p
              className="text-sm md:text-base lg:text-[15px] text-gray-700 leading-loose lg:leading-[2] max-w-lg mx-auto"
              style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
            >
              India&apos;s heritage is not confined to museums or preserved ruins—it is living, breathing, and integrated into daily life. From the morning rituals performed at temples that have stood for over a thousand years, to the festivals that bring entire communities together, India&apos;s past isn&apos;t history. It&apos;s the present.
            </p>
          </div>
        </div>
      </section>

      {/* Liberty India Heritage Journeys Section */}
      <section className="w-full py-10 md:py-12" style={{ backgroundColor: '#FDF8E8' }}>
        <div className="w-[90%] max-w-5xl mx-auto text-center">
          <p
            className="text-base md:text-lg lg:text-xl text-gray-800"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
          >
            Liberty India&apos;s heritage journeys connect you with
          </p>
        </div>
      </section>

      {/* Ancient Temple Architecture Section */}
      <section className="w-full bg-white">
        {/* Header with white background */}
        <div className="w-full py-12 md:py-16 bg-white">
          <div className="w-[90%] max-w-4xl mx-auto text-center">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Ancient Temple Architecture
            </h2>
            <p
              className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
            >
              Witness the evolution of spiritual expression through stone and sculpture. For over four centuries these symbolic structures have evolved into distinct regional styles, primarily Nagara (North), Dravida (South), and Vesara (hybrid).
            </p>
          </div>
        </div>

        {/* Temple Images Section - 90% width with overlapping text card */}
        <div className="w-[90%] mx-auto relative pb-16 md:pb-20 lg:pb-24">
          {/* Main container with temple image */}
          <div className="relative w-full">
            <Image
              src="/images/about-india/heritage/picture-4.svg"
              alt="Ancient Temple Architecture"
              width={1600}
              height={900}
              className="w-full h-auto"
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Dravidian Temples Text Card - Overlapping the image */}
          <div className="absolute left-[2%] md:left-[5%] bottom-[-2%] md:bottom-[0%] lg:bottom-[3%] bg-white px-8 md:px-12 lg:px-16 py-12 md:py-14 lg:py-16 w-[72%] md:w-[40%] lg:w-[36%] z-20 shadow-sm">
            <h3
              className="text-xl md:text-2xl lg:text-[1.75rem] font-semibold text-gray-900 mb-4"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Dravidian Temples of South India
            </h3>
            <p
              className="text-sm md:text-base text-gray-600 leading-relaxed"
              style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
            >
              Brihadeeswarar Temple in Thanjavur, a UNESCO World Heritage site and architectural masterpiece; Meenakshi Amman Temple in Madurai, still vibrant with daily worship; the intricate Shore Temple of Mahabalipuram
            </p>
          </div>
        </div>
      </section>

      {/* Northern Nagara & Vesara Temples Section */}
      <section className="w-full bg-white py-12 md:py-16 pb-20 md:pb-24">
        <div className="w-[90%] mx-auto">
          {/* Two Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Northern Nagara Style Temples Card */}
            <div className="relative w-full overflow-visible">
              <Image
                src="/images/about-india/heritage/northern-nagara-temples.svg"
                alt="Northern Nagara Style Temples"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
              {/* Text Overlay Card - 80% width, centered */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] bg-white/95 px-8 py-7 md:px-10 md:py-8 shadow-sm text-left">
                <h3
                  className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-2"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Northern Nagara Style Temples
                </h3>
                <p
                  className="text-sm md:text-base text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  The ornate Sun Temple at Konark, Lingaraj Temple, and the sensually carved temples of Khajuraho
                </p>
              </div>
            </div>

            {/* Vesara Temples Card */}
            <div className="relative w-full overflow-visible">
              <Image
                src="/images/about-india/heritage/vesara-temples.svg"
                alt="Vesara Temples"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
              {/* Text Overlay Card - 80% width, centered */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] bg-white/95 px-8 py-7 md:px-10 md:py-8 shadow-sm text-left">
                <h3
                  className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-2"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Vesara Temples
                </h3>
                <p
                  className="text-sm md:text-base text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  The legendary Hoysala temples at Belur and Halebidu, renowned for their detailed carvings, star-shaped plans, and timeless stone artistry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mughal & Indo-Islamic Heritage Section */}
      <section className="w-full bg-white py-10 md:py-14 pb-20 md:pb-24">
        <div className="w-[90%] mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-10 md:mb-12">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Mughal & Indo-Islamic Heritage
            </h2>
          </div>

          {/* Two Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Taj Mahal Card */}
            <div className="relative w-full overflow-visible">
              <Image
                src="/images/about-india/heritage/taj-mahal.svg"
                alt="Taj Mahal"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
              {/* Text Overlay - 80% width, centered */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] bg-white/95 px-8 py-7 md:px-10 md:py-8 shadow-sm text-left">
                <h3
                  className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-2"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Taj Mahal
                </h3>
                <p
                  className="text-sm md:text-base text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  More than a monument of love; it is an architectural masterpiece of white marble symmetry
                </p>
              </div>
            </div>

            {/* Red Fort Card */}
            <div className="relative w-full overflow-visible">
              <Image
                src="/images/about-india/heritage/red-fort.svg"
                alt="Red Fort"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
              {/* Text Overlay - 80% width, centered */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] bg-white/95 px-8 py-7 md:px-10 md:py-8 shadow-sm text-left">
                <h3
                  className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-2"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Red Fort
                </h3>
                <p
                  className="text-sm md:text-base text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  The seat of Mughal power, with labyrinthine passages and imperial gardens
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Indian Dance Heritage Section */}
      <section className="w-full bg-white py-10 md:py-14">
        <div className="w-full text-center mb-10 md:mb-14">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Indian Dance Heritage
          </h2>
          <p
            className="text-sm md:text-base text-gray-600 leading-relaxed mx-auto text-center"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif', width: '70vw' }}
          >
            From the graceful mudras of Bharatanatyam to the storytelling elegance of Kathak and the vibrant energy of Odissi, India&apos;s classical dances embody centuries of devotion, rhythm, and cultural expression
          </p>
        </div>

        <ImageTextOverlay
          startPosition="right"
          items={[
            {
              image: '/images/about-india/heritage/mohiniyattam.svg',
              alt: 'Mohiniyattam - Classical dance of Kerala',
              title: 'Mohiniyattam',
              description:
                "Kerala's graceful dance form distinguished by soft movements, expressive gestures, and timeless elegance",
            },
            {
              image: '/images/about-india/heritage/kathak.svg',
              alt: 'Kathak - Classical dance of North India',
              title: 'Kathak',
              description:
                "North India's classical dance known for elegant spins, intricate footwork, and lyrical storytelling",
            },
            {
              image: '/images/about-india/heritage/bharatnatayam.svg',
              alt: 'Bharatanatyam - Classical temple dance of Tamil Nadu',
              title: 'Bharatanatyam',
              description:
                "A temple dance of Tamil Nadu celebrated for sculptural poses, expressive storytelling, and rhythmic precision",
            },
          ]}
        />
      </section>

      {/* Living Traditions of Indian Art Section */}
      <section className="w-full bg-white py-10 md:py-14">
        <div className="w-full text-center mb-10 md:mb-14">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Living Traditions of Indian Art
          </h2>
          <p
            className="text-sm md:text-base text-gray-600 leading-relaxed mx-auto text-center"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif', width: '70vw' }}
          >
            From intricate folk expressions to ancient storytelling forms, India&apos;s artistic heritage celebrates craftsmanship, symbolism, and creativity passed down through generations
          </p>
        </div>

        <ImageTextOverlay
          startPosition="right"
          items={[
            {
              image: '/images/about-india/heritage/madhubani.svg',
              alt: 'Madhubani Art - Traditional painting from Bihar',
              title: 'Madhubani Art',
              description:
                "Bihar's vibrant painting tradition, where natural pigments bring intricate patterns and sacred stories to life",
            },
            {
              image: '/images/about-india/heritage/warli.svg',
              alt: 'Warli Art - Tribal art of Maharashtra',
              title: 'Warli Art',
              description:
                "A minimalist tribal expression from Maharashtra, where simple white forms narrate timeless stories of community and ritual",
            },
            {
              image: '/images/about-india/heritage/pattachitra.svg',
              alt: 'Pattachitra Art - Scroll painting of Odisha',
              title: 'Pattachitra Art',
              description:
                "Odisha's ancient scroll painting tradition, renowned for intricate craftsmanship and mythological storytelling in rich natural hues",
            },
          ]}
        />
      </section>

      {/* Heritage Itineraries Section */}
      <ItineraryCards
        heading={"Explore the Heritage\nExperience the Journey"}
        subheading="Travel through centuries of history with journeys designed for discerning explorers"
        bgColor="#FDF39F4D"
        items={[
          {
            image: '/images/itineraries/taj-tigers.svg',
            alt: 'Taj & Tigers',
            category: 'Culture & History',
            bestTime: 'October - March',
            title: 'Taj & Tigers',
            description: "Combine India's most iconic monument with thrilling wildlife. This 9-day journey features the Taj Mahal, royal Rajasthan heritage, and India's famous tiger reserve experiences.",
            price: 1330,
            duration: '13 Days',
          },
          {
            image: '/images/itineraries/golden-triangle.svg',
            alt: 'Golden Triangle of India (Classical)',
            category: 'Adventure Tour',
            bestTime: 'October - March',
            title: 'Golden Triangle of India (Classical)',
            description: "India's most classic itinerary in 7 days. Experience Delhi's history, Agra's romance with the Taj Mahal, and Jaipur's royal splendour in this perfect introduction to India.",
            price: 1330,
            duration: '13 Days',
          },
          {
            image: '/images/itineraries/north-india.svg',
            alt: 'Gems of North India',
            category: 'Culture & History',
            bestTime: 'October - March',
            title: 'Gems of North India',
            description: "Explore North India's spiritual and architectural treasures. From the sacred Ganges in Varanasi to the temples of Khajuraho and royal palaces of Rajasthan.",
            price: 1330,
            duration: '13 Days',
          },
        ]}
      />

      {/* Footer */}
      <Footer />
    </main>
  );
}
