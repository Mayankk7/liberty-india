"use client";

import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function PremiumLeisurePage() {
  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Navbar */}
      <Navbar variant="white" />

      {/* Hero Section */}
        <section className="relative w-[105vw] bg-[#FDF8E8] pt-0">
          <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
            <Image
              src="https://ik.imagekit.io/libertyindia/services/premium-leisure/leisure-bg.svg"
              alt="Premium Leisure Hero"
              fill
              className="object-cover object-center opacity-80"
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <h1
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-extrabold tracking-wide drop-shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif', textShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
              >
                Premium Leisure
              </h1>
            </div>
          </div>
        </section>


      {/* Wellness Title Section */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-[#FDF8E8]">
        <div className="w-full max-w-5xl mx-auto text-center">
          <p className="text-5xl md:text-5xl lg:text-5xl xl:text-[2.5rem] font-normal text-gray-900 leading-tight" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Luxury Journeys Crafted for you
          </p>
        </div>
      </section>


      {/* Wellness Image Grid with Text Card */}
      <section className="w-screen bg-[#FDF8E8] py-0 overflow-x-hidden">
        <div className="relative w-[100vw] max-w-none mx-auto" style={{height:'750px'}}>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full h-full">
            <div className="relative h-full w-full">
              <Image src="https://ik.imagekit.io/libertyindia/services/premium-leisure/picture-1.svg" alt="Premium Leisure 1" fill className="object-cover object-center" priority={false} />
            </div>
            <div className="relative h-full w-full">
              <Image src="https://ik.imagekit.io/libertyindia/services/premium-leisure/picture-2.svg" alt="Premium Leisure 2" fill className="object-cover object-center" priority={false} />
            </div>
            <div className="relative h-full w-full">
              <Image src="https://ik.imagekit.io/libertyindia/services/premium-leisure/picture-3.svg" alt="Premium Leisure 3" fill className="object-cover object-center" priority={false} />
            </div>
          </div>
          {/* Overlay Card */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 bg-white px-8 py-10 md:px-12 md:py-12 shadow-lg max-w-xl text-left" style={{fontFamily:'var(--font-merriweather), Georgia, serif'}}>
            <p className="text-lg text-gray-800 leading-relaxed">
              Premium leisure journeys are the heart of what Liberty India does–creating bespoke, personalized experiences that reveal the essence of India while providing unparalleled comfort and service.
            </p>
          </div>
        </div>
      </section>

      
      <section className="w-full flex justify-center bg-white m-0 p-0 mt-16">
        <div className="relative w-[70vw] h-[90vh] md:h-[140vh] lg:h-[110vh] mx-auto">
            <Image
            src="https://ik.imagekit.io/libertyindia/services/premium-leisure/journey-types.png"
            alt="Premium Leisure Journey Types"
            fill
            className="object-contain object-center"
            priority={false}
          />
        </div>
      </section>
      {/* Premium Leisure Journey Inclusions Section */}
      <section className="flex flex-col w-[85vw] items-center mx-auto bg-white py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6" style={{fontFamily:'var(--font-playfair), Georgia, serif'}}>
          Premium Leisure Journey Inclusions
        </h2>
          <div className="w-[85vw] max-w-none mx-auto relative overflow-hidden shadow-lg" style={{minHeight:'60vh', height:'100vh'}}>
          <Image
            src="https://ik.imagekit.io/libertyindia/services/premium-leisure/inclusions.svg"
            alt="Premium Leisure Journey Inclusions"
            fill
            className="object-cover object-center"
            priority={false}
          />
          <div className="absolute top-8 left-8 bg-white bg-opacity-95 shadow-md p-16 max-w-lg text-gray-800 text-lg md:text-xl" style={{fontFamily:'var(--font-merriweather), Georgia, serif'}}>
            <div className="space-y-5">
              <div>Personalized journey design by expert curators</div>
              <div>Expert guides in each region (guides, naturalists, historians, spiritual teachers)</div>
              <div>All meals as per itinerary</div>
              <div>All accommodation in carefully selected properties</div>
              <div>Flexible itineraries adapting to your interests and pace</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
