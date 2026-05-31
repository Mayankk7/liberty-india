"use client";


import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ImageTextOverlay from '../components/ImageTextOverlay';
import ItineraryCards from '../components/ItineraryCards';

export default function ArchitecturePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar with white background */}
      <Navbar variant="white" />

      {/* Hero Section with Architecture Image */}
      <section className="relative w-full pt-16">
        <div className="relative w-[102vw] h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <Image
            src="https://ik.imagekit.io/libertyindia/about-india/architecture/architecture-bg.svg"
            alt="Architecture of India - Amber Fort"
            fill
            className="object-cover object-center"
            priority
          />
          {/* 20% opacity overlay */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-extrabold tracking-wide drop-shadow-lg"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Architecture
            </h1>
          </div>
        </div>
      </section>

      {/* Monuments to Human Imagination Section */}
      <section className="w-full pt-12 md:pt-16 lg:pt-20 pb-0" style={{ backgroundColor: '#FDF8E8' }}>
        <div className="w-[90%] max-w-5xl mx-auto text-center mb-10 md:mb-14">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] font-normal text-gray-900 leading-tight"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Monuments to Human Imagination
          </h2>
        </div>

        {/* Image Grid with Text Card */}
        <div className="w-full relative h-96 md:h-137.5 lg:h-162.5 xl:h-180">
          {/* SVG Images Grid */}
          <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Image 1 */}
            <div className="relative h-full flex items-center justify-center">
                  <Image 
                    src="https://ik.imagekit.io/libertyindia/about-india/architecture/picture-1.png" 
                  alt="Architecture Grid 1" 
                  fill
                  className="object-cover object-center w-full h-full" 
                  priority={false}
                />
            </div>
            {/* Image 2 */}
            <div className="relative h-full flex items-center justify-center">
                  <Image 
                    src="https://ik.imagekit.io/libertyindia/about-india/architecture/picture-2.png" 
                  alt="Architecture Grid 2" 
                  fill
                  className="object-cover object-center w-full h-full" 
                  priority={false}
                />
            </div>
            {/* Image 3 */}
            <div className="relative h-full flex items-center justify-center">
                  <Image 
                    src="https://ik.imagekit.io/libertyindia/about-india/architecture/picture-3.png" 
                  alt="Architecture Grid 3" 
                  fill
                  className="object-cover object-center w-full h-full" 
                  priority={false}
                />
            </div>
          </div>

          {/* Text Card Overlay */}
          <div 
            className="absolute left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 bg-white px-6 md:px-8 lg:px-10 py-6 md:py-8 lg:py-10 flex items-center z-10 shadow-lg"
            style={{ width: '42%', height: '60%' }}
          >
            <p
              className="text-sm md:text-base lg:text-xl text-gray-700 leading-loose lg:leading-loose max-w-lg mx-auto"
              style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
            >
              India&apos;s architectural heritage spans millennia and styles—from the soaring temple gopurams of the south to the delicate marble inlay work of Mughal monuments to the modernist masterpieces of the 20th century. Every structure tells stories of the civilization, values, and artistic vision of its era.
            </p>
          </div>
        </div>
      </section>



      {/* Section Heading Above Ancient & Rock-Cut Architecture */}
      <div className="w-full bg-[#FDF8E8] p-12">
        <div className="w-[90%] max-w-6xl mx-auto text-center">
          <h3 className="text-lg md:text-xl font-normal text-gray-800" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Liberty India's architecture journeys reveal
          </h3>
        </div>
      </div>

      {/* Ancient & Rock-Cut Architecture Section (inline) */}
      <div className="w-full mt-0 py-12 md:py-16 lg:py-20">
        <div className="w-[90%] max-w-6xl mx-auto text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Ancient & Rock-Cut Architecture
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
            Early structures primarily used wood, later transitioning to rock-cut, such as the Ajanta and Ellora caves (Hindu, Buddhist, Jain) and the monolithic temples at Mahabalipuram.
          </p>
        </div>
        <div className="w-[80vw] max-w-none mx-auto flex flex-col md:flex-row gap-0 justify-center items-end">
          {/* Nagara */}
          <div className="relative flex-1 flex flex-col items-center">
            <Image
              src="https://ik.imagekit.io/libertyindia/about-india/architecture/nagara.png"
              alt="Nagara Temple"
              width={400}
              height={440}
              className="object-cover object-center w-full h-90 md:h-110"
              priority={false}
            />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 bg-white w-[92%] px-4 py-4 text-left z-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-1" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Nagara</h3>
              <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
                Characterized by beehive-shaped towers (shikharas), such as the Kandariya Mahadev Temple.
              </p>
            </div>
          </div>
          {/* Dravidian */}
          <div className="relative flex-1 flex flex-col items-center">
            <Image
              src="https://ik.imagekit.io/libertyindia/about-india/architecture/dravidian.svg"
              alt="Dravidian Temple"
              width={400}
              height={440}
              className="object-cover object-center w-full h-90 md:h-110"
              priority={false}
            />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 bg-white w-[92%] px-4 py-4 text-left z-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-1" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Dravidian</h3>
              <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
                Features towering, ornate gateways (gopurams) and large temple complexes, like the Brihadeeswarar Temple.
              </p>
            </div>
          </div>
          {/* Vesara */}
          <div className="relative flex-1 flex flex-col items-center">
            <Image
              src="https://ik.imagekit.io/libertyindia/about-india/architecture/vesara.svg"
              alt="Vesara Temple"
              width={400}
              height={440}
              className="object-cover object-center w-full h-90 md:h-110"
              priority={false}
            />
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 bg-white w-[92%] px-4 py-4 text-left z-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-1" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Vesara</h3>
              <p className="text-sm text-gray-700" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
                A hybrid style blending Nagara and Dravidian elements, common in the Deccan region (e.g., temples at Pattadakal).
              </p>
            </div>
          </div>
        </div>
      </div>

        {/* Indo-Islamic Architecture Section */}
          <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
          <div className="w-[90%] max-w-6xl mx-auto text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
              Indo-Islamic Architecture
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              A harmonious fusion of Persian refinement and Indian artistry, seen in the Qutb Minar, grand Mughal forts, and tranquil charbagh gardens
            </p>
          </div>
          <ImageTextOverlay
            items={[
              {
                image: 'https://ik.imagekit.io/libertyindia/about-india/architecture/qutub-minar.png',
                alt: 'Qutub Minar',
                title: 'Qutub Minar',
                description:
                  'A soaring UNESCO landmark of red sandstone, showcasing intricate carvings and the early brilliance of Indo-Islamic design',
              },
              {
                image: 'https://ik.imagekit.io/libertyindia/about-india/architecture/buland-darwaza.svg',
                alt: 'Buland Darwaza',
                title: 'Buland Darwaza',
                description:
                  'The “Gate of Magnificence” at Fatehpur Sikri, this grand Mughal gateway stands as a symbol of imperial power and architectural grandeur',
              },
            ]}
            startPosition="left"
          />
        </section>

        {/* Rajput Architecture Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
          <div className="w-[90%] max-w-6xl mx-auto text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
              Rajput Architecture
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              The grand forts and palaces of Amber and Chittorgarh embody Rajput valor and artistry, featuring ornate courtyards, fortified walls, and breathtaking hilltop settings.
            </p>
          </div>
          <ImageTextOverlay
            items={[
              {
                image: 'https://ik.imagekit.io/libertyindia/about-india/architecture/amber-fort.png',
                alt: 'Amber Fort',
                title: 'Amber Fort',
                description:
                  'Overlooking the Aravalli hills, this majestic palace-fort blends Rajput strength with ornate halls, mirrored chambers, and sweeping courtyards.',
              },
              {
                image: 'https://ik.imagekit.io/libertyindia/about-india/architecture/umaid-bhawan.svg',
                alt: 'Umaid Bhawan Palace',
                title: 'Umaid Bhawan Palace',
                description:
                  'A magnificent blend of royal heritage and Art Deco elegance in Jodhpur, one of the world’s largest private residences',
              },
            ]}
            startPosition="right"
          />
        </section>

        {/* Colonial & Indo-Saracenic Architecture Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
          <div className="w-[90%] max-w-6xl mx-auto text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
              Colonial & Indo–Saracenic Architecture
            </h2>
            <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              Introduced by British, Portuguese, and Dutch influences, this style combines Neoclassical and Gothic forms with Mughal elements, seen in landmarks like Victoria Memorial and Mumbai CST
            </p>
          </div>
          <ImageTextOverlay
            items={[
              {
                image: 'https://ik.imagekit.io/libertyindia/about-india/architecture/victoria-memorial.png',
                alt: 'Victoria Memorial',
                title: 'Victoria Memorial',
                description:
                  'A grand marble landmark in Kolkata blending classical European design with Mughal influences, symbolizing the elegance of the colonial era',
              },
              {
                image: 'https://ik.imagekit.io/libertyindia/about-india/architecture/mumbai-cst.png',
                alt: 'Mumbai CST',
                title: 'Mumbai CST',
                description:
                  'A masterpiece of Victorian Gothic architecture fused with Indian elements, renowned for its intricate stonework and dramatic façade',
              },
            ]}
            startPosition="right"
          />
        </section>

                     <ItineraryCards
                       heading={"Explore the Architecture\nExperience the Journey"}
                       subheading="Travel through centuries of history with journeys designed for discerning explorers"
                       bgColor="#FDF39F4D"
                       category="Architecture"
                     />
             
     
          

      {/* Footer */}
      <Footer />
    </main>
  );
}
