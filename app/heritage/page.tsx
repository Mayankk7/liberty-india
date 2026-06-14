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
            src="https://ik.imagekit.io/libertyindia/about-india/heritage/headers-bg.png"
            alt="Heritage of India - Ancient doors and architecture"
            fill
            className="object-cover object-center"
            priority
          />
          {/* 20% opacity overlay */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          {/* Heritage Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl xl:text-7xl text-white font-semibold tracking-wide drop-shadow-lg"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Heritage
            </h1>
          </div>
        </div>
      </section>

      {/* 5,000 Years Section with Image Grid */}
      <section className="w-full pt-6 md:pt-16 lg:pt-20 pb-0" style={{ backgroundColor: '#FDF8E8' }}>
        {/* Heading */}
        <div className="w-[90%] max-w-5xl mx-auto text-center mb-12 md:mb-14">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] font-normal text-[#424242] leading-tight text-center mx-auto"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            5,000 Years Written in Stone
          </h2>
        </div>

        {/* Image Grid with Text Card.
         * Mobile: photos stack into a continuous vertical backdrop (grid-rows-3)
         * with the white banner centred on top, framed by photo bands (container
         * py); desktop keeps the 3-up triptych + overlay card. */}
        <div className="w-full relative h-auto py-32 sm:py-40 md:py-0 md:h-[550px] lg:h-[650px] xl:h-[720px]">
          {/* Background Images Grid */}
          <div className="absolute inset-0 grid grid-cols-1 grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-0">
            {/* Image 1 */}
            <div 
              className="relative h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://ik.imagekit.io/libertyindia/about-india/heritage/picture-1.svg')" }}
            />

            {/* Image 2 */}
            <div 
              className="relative h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://ik.imagekit.io/libertyindia/about-india/heritage/picture-2.svg')" }}
            />

            {/* Image 3 */}
            <div 
              className="relative h-full bg-cover bg-center"
                style={{ backgroundImage: "url('https://ik.imagekit.io/libertyindia/about-india/heritage/picture-3.svg')" }}
            />
          </div>

          {/* Text Card — banner on top of the vertical photo backdrop (mobile), overlay (desktop) */}
          <div className="relative md:absolute mx-4 md:mx-0 md:top-12 lg:top-16 md:left-8 lg:left-12 w-auto md:w-[42%] bg-white px-6 py-6 md:px-9 md:py-8 shadow-md text-left z-10">
            <p
              className="text-lg md:text-xl lg:text-[22px] text-[#424242] leading-loose"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              India&apos;s heritage is not confined to museums or preserved ruins—it is living, breathing, and integrated into daily life. From the morning rituals performed at temples that have stood for over a thousand years, to the festivals that bring entire communities together, India&apos;s past isn&apos;t history. It&apos;s the present.
            </p>
          </div>
        </div>
      </section>

      {/* Liberty India Heritage Journeys Section */}
      <section className="w-full py-6 md:py-12" style={{ backgroundColor: '#FDF8E8' }}>
        <div className="w-[90%] max-w-5xl mx-auto text-center">
          <p
            className="text-xl md:text-2xl lg:text-3xl font-bold text-[#424242]"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Liberty India&apos;s heritage journeys connect you with the soul of the{' '}
            <br className="hidden md:inline" />
            subcontinent — its temples, forts, and living traditions.
          </p>
        </div>
      </section>

      {/* Ancient Temple Architecture Section */}
      <section className="w-full bg-white">
        {/* Header with white background */}
        <div className="w-full py-8 md:py-16 bg-white">
          <div className="w-[90%] max-w-4xl mx-auto text-center">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#424242] mb-2 md:mb-4 max-w-3xl mx-auto"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Ancient Temple Architecture
            </h2>
            <p
              className="text-sm md:text-base text-[#424242] leading-relaxed max-w-3xl mx-auto"
              style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
            >
              Witness the evolution of spiritual expression through stone and sculpture. For over four centuries these symbolic structures have evolved into distinct regional styles, primarily Nagara (North), Dravida (South), and Vesara (hybrid).
            </p>
          </div>
        </div>

        {/* Temple Images Section - 90% width with overlapping text card */}
        <div className="w-[90%] mx-auto relative pb-8 md:pb-20 lg:pb-24">
          {/* Main container with temple image */}
          <div className="relative w-full">
            <Image
              src="https://ik.imagekit.io/libertyindia/about-india/heritage/Ancient_Temple_Architecture.png?updatedAt=1779191079441"
              alt="Ancient Temple Architecture"
              width={1600}
              height={900}
              className="w-full h-[240px] sm:h-[320px] md:h-auto object-cover object-left md:object-center"
            />
          </div>

          {/* Dravidian Temples Text Card — mobile: image on top, card below overlapping
              its bottom edge (centred, narrower so the photo peeks at the sides);
              desktop: unchanged left-bottom overlay. */}
          <div className="relative md:absolute -mt-12 md:mt-0 mx-auto md:mx-0 md:bottom-0 md:left-8 lg:left-12 w-[90%] md:w-[38%] bg-white p-5 md:px-8 md:py-6 shadow-md text-left z-20">
            <h3
              className="text-xl md:text-2xl lg:text-[1.75rem] font-bold text-[#424242] mb-2 md:mb-4"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Dravidian Temples of <br className="md:hidden" />South India
            </h3>
            <p
              className="text-[13px] md:text-base text-[#424242] leading-loose md:leading-relaxed"
              style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
            >
              Brihadeeswarar Temple in Thanjavur, a UNESCO World Heritage site and architectural masterpiece; Meenakshi Amman Temple in Madurai, still vibrant with daily worship; the intricate Shore Temple of Mahabalipuram
            </p>
          </div>
        </div>
      </section>

      {/* Northern Nagara & Vesara Temples Section */}
      <section className="w-full bg-white py-6 md:py-16 pb-8 md:pb-24">
        <div className="w-[90%] mx-auto">
          {/* Two Card Grid — wider gap on mobile so the protruding caption of one
              stacked card doesn't crowd the next card's image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-8">
            {/* Northern Nagara Style Temples Card */}
            <div className="relative w-full overflow-visible">
              <Image
                src="https://ik.imagekit.io/libertyindia/about-india/heritage/northern-nagara-temples.svg"
                alt="Northern Nagara Style Temples"
                width={800}
                height={600}
                className="w-full h-[240px] sm:h-[320px] md:h-full object-cover"
              />
              {/* Text Overlay Card - image on top, card overlapping the bottom edge (centred) */}
              <div className="relative md:absolute z-10 -mt-12 md:mt-0 mx-auto md:mx-0 md:-bottom-10 md:left-1/2 md:-translate-x-1/2 w-[90%] md:w-[85%] bg-white p-5 md:px-8 md:py-6 shadow-md text-left">
                <h3
                  className="text-xl md:text-xl lg:text-2xl font-bold text-[#424242] mb-2"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Northern Nagara Style Temples
                </h3>
                <p
                  className="text-[13px] md:text-base text-[#424242] leading-loose md:leading-relaxed"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  The ornate Sun Temple at Konark, Lingaraj Temple, and the UNESCO World Heritage site – Western Group of Temples in Khajuraho
                </p>
              </div>
            </div>

            {/* Vesara Temples Card */}
            <div className="relative w-full overflow-visible">
              <Image
                src="https://ik.imagekit.io/libertyindia/about-india/heritage/vesara-temples.svg"
                alt="Vesara Temples"
                width={800}
                height={600}
                className="w-full h-[240px] sm:h-[320px] md:h-full object-cover"
              />
              {/* Text Overlay Card - image on top, card overlapping the bottom edge (centred) */}
              <div className="relative md:absolute z-10 -mt-12 md:mt-0 mx-auto md:mx-0 md:-bottom-10 md:left-1/2 md:-translate-x-1/2 w-[90%] md:w-[85%] bg-white p-5 md:px-8 md:py-6 shadow-md text-left">
                <h3
                  className="text-xl md:text-xl lg:text-2xl font-bold text-[#424242] mb-2"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Vesara Temples
                </h3>
                <p
                  className="text-[13px] md:text-base text-[#424242] leading-loose md:leading-relaxed"
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
      <section className="w-full bg-white py-6 md:py-14 pb-8 md:pb-24">
        <div className="w-[90%] mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-10 md:mb-12">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#424242]"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Mughal & Indo-Islamic Heritage
            </h2>
          </div>

          {/* Two Card Grid — wider gap on mobile so the protruding caption of one
              stacked card doesn't crowd the next card's image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-8">
            {/* Taj Mahal Card */}
            <div className="relative w-full overflow-visible">
              <Image
                src="https://ik.imagekit.io/libertyindia/about-india/heritage/taj-mahal.svg"
                alt="Taj Mahal"
                width={800}
                height={600}
                className="w-full h-[240px] sm:h-[320px] md:h-full object-cover"
              />
              {/* Text Overlay - image on top, card overlapping the bottom edge (centred) */}
              <div className="relative md:absolute z-10 -mt-12 md:mt-0 mx-auto md:mx-0 md:-bottom-10 md:left-1/2 md:-translate-x-1/2 w-[90%] md:w-[85%] bg-white p-5 md:px-8 md:py-6 shadow-md text-left">
                <h3
                  className="text-xl md:text-xl lg:text-2xl font-bold text-[#424242] mb-2"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Taj Mahal
                </h3>
                <p
                  className="text-[13px] md:text-base text-[#424242] leading-loose md:leading-relaxed"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  More than a monument of love; it is an architectural masterpiece of white marble symmetry
                </p>
              </div>
            </div>

            {/* Red Fort Card */}
            <div className="relative w-full overflow-visible">
              <Image
                src="https://ik.imagekit.io/libertyindia/about-india/heritage/red_fort.jpg"
                alt="Red Fort"
                width={800}
                height={600}
                className="w-full h-[240px] sm:h-[320px] md:h-full object-cover"
              />
              {/* Text Overlay - image on top, card overlapping the bottom edge (centred) */}
              <div className="relative md:absolute z-10 -mt-12 md:mt-0 mx-auto md:mx-0 md:-bottom-10 md:left-1/2 md:-translate-x-1/2 w-[90%] md:w-[85%] bg-white p-5 md:px-8 md:py-6 shadow-md text-left">
                <h3
                  className="text-xl md:text-xl lg:text-2xl font-bold text-[#424242] mb-2"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Red Fort
                </h3>
                <p
                  className="text-[13px] md:text-base text-[#424242] leading-loose md:leading-relaxed"
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
      <section className="w-full bg-white py-6 md:py-14">
        <div className="w-full text-center mb-12 md:mb-14">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#424242] mb-2 md:mb-4 mx-auto"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif', width: '70vw' }}
          >
            Indian Dance Heritage
          </h2>
          <p
            className="text-sm md:text-base text-[#424242] leading-relaxed mx-auto text-center"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif', width: '70vw' }}
          >
            From the graceful mudras of Bharatanatyam to the storytelling elegance of Kathak and the vibrant energy of Odissi, India&apos;s classical dances embody centuries of devotion, rhythm, and cultural expression
          </p>
        </div>

        <ImageTextOverlay
          variant="heritage"
          startPosition="right"
          items={[
            {
              image: 'https://ik.imagekit.io/libertyindia/about-india/heritage/mohiniyattam.svg',
              alt: 'Mohiniyattam - Classical dance of Kerala',
              title: 'Mohiniyattam',
              description:
                "Kerala's graceful dance form distinguished by soft movements, expressive gestures, and timeless elegance",
            },
            {
              image: 'https://ik.imagekit.io/libertyindia/about-india/heritage/kathak.svg',
              alt: 'Kathak - Classical dance of North India',
              title: 'Kathak',
              description:
                "North India's classical dance known for elegant spins, intricate footwork, and lyrical storytelling",
            },
            {
              image: 'https://ik.imagekit.io/libertyindia/about-india/heritage/bharatnatayam.svg',
              alt: 'Bharatanatyam - Classical temple dance of Tamil Nadu',
              title: 'Bharatanatyam',
              description:
                "A temple dance of Tamil Nadu celebrated for sculptural poses, expressive storytelling, and rhythmic precision",
            },
          ]}
        />
      </section>

      {/* Living Traditions of Indian Art Section */}
      <section className="w-full bg-white py-6 md:py-14">
        <div className="w-full text-center mb-12 md:mb-14">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#424242] mb-2 md:mb-4 mx-auto"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif', width: '70vw' }}
          >
            Living Traditions of Indian Art
          </h2>
          <p
            className="text-sm md:text-base text-[#424242] leading-relaxed mx-auto text-center"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif', width: '70vw' }}
          >
            From intricate folk expressions to ancient storytelling forms, India&apos;s artistic heritage celebrates craftsmanship, symbolism, and creativity passed down through generations
          </p>
        </div>

        <ImageTextOverlay
          variant="heritage"
          startPosition="right"
          items={[
            {
              image: 'https://ik.imagekit.io/libertyindia/about-india/heritage/madhubani.svg',
              alt: 'Madhubani Art - Traditional painting from Bihar',
              title: 'Madhubani',
              description:
                "Bihar's vibrant painting tradition, where natural pigments bring intricate patterns and sacred stories to life",
            },
            {
              image: 'https://ik.imagekit.io/libertyindia/about-india/heritage/warli.svg',
              alt: 'Warli Art - Tribal art of Maharashtra',
              title: 'Warli',
              description:
                "A minimalist tribal expression from Maharashtra, where simple white forms narrate timeless stories of community and ritual",
            },
            {
              image: 'https://ik.imagekit.io/libertyindia/about-india/heritage/pattachitra.svg',
              alt: 'Pattachitra Art - Scroll painting of Odisha',
              title: 'Pattachitra',
              description:
                "Odisha's ancient scroll painting tradition, renowned for intricate craftsmanship and mythological storytelling in rich natural hues",
            },
          ]}
        />
      </section>

      {/* Heritage Itineraries Section */}
      <ItineraryCards
        heading={"Explore the Heritage.\nExperience the Journey."}
        subheading="Travel through centuries of history with journeys designed for discerning explorers"
        bgColor="#FDF39F4D"
        category="Heritage"
      />

      {/* Footer */}
      <Footer />
    </main>
  );
}
