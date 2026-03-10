"use client";

import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default function WellnessPage() {
  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Navbar */}
      <Navbar variant="white" />

      {/* Hero Section */}
      <section className="relative w-[105vw] bg-[#FDF8E8] pt-0">
        <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
          <Image
            src="/images/services/incentive/incentive-bg.svg"
            alt="Incenttive Hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-light tracking-wide drop-shadow-lg"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Incentive Programs
            </h1>
          </div>
        </div>
      </section>

      {/* Wellness Title Section */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-[#FDF8E8]">
        <div className="w-full max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] font-normal text-gray-900 leading-tight" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Celebrating Excellence Through Transformations
          </h2>
        </div>
      </section>

      {/* Wellness Image Grid with Text Card */}
      <div className="w-full bg-[#FDF8E8] relative h-96 md:h-105 lg:h-125 xl:h-140 mb-0">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-0 w-full h-full">
          <div className="relative h-full w-full">
            <Image
              src="/images/services/incentive/picture-1.svg"
              alt="Incentive 1"
              fill
              className="object-cover object-center"
              priority={false}
            />
          </div>
          <div className="relative h-full w-full">
            <Image
              src="/images/services/incentive/picture-2.svg"
              alt="Incentive 2"
              fill
              className="object-cover object-center"
              priority={false}
            />
          </div>
          <div className="relative h-full w-full">
            <Image
              src="/images/services/incentive/picture-3.svg"
              alt="Incentive 3"
              fill
              className="object-cover object-center"
              priority={false}
            />
          </div>
        </div>
        {/* Text Card Overlay */}
        <div className="absolute left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 bg-white px-6 md:px-8 lg:px-10 py-6 md:py-8 lg:py-10 flex items-center z-10 shadow-lg max-w-lg" style={{ width: '40%' }}>
          <p className="text-sm md:text-base lg:text-[15px] text-gray-700 leading-loose lg:leading-loose" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
            Incentive travel is about recognition and renewal. It&apos;s about bringing together your top performers in an environment where they can celebrate achievement, strengthen relationships, and return home energized and recommitted.
          </p>
        </div>
      </div>


      {/* Showcase Section */}
      <section className="w-full bg-white flex flex-col items-center justify-center py-8 md:py-12 lg:py-16">
        <div className="relative w-[90vw]  mx-auto flex justify-center">
          {/* Image */}
          <div className="relative w-full h-[60vh] md:h-[50vh] lg:h-[90vh] overflow-hidden flex justify-center items-center mx-auto">
            <Image
              src="/images/services/incentive/picture-4.svg"
              alt="Incentive Showcase"
              fill
              className="object-cover object-center"
              priority={false}
            />
            {/* Text Card at bottom right, moved further down */}
            <div className="absolute bottom-2 right-8 md:bottom-8 md:right-16 bg-white shadow-lg p-10 md:p-12 max-w-2xl w-[45vw] text-gray-800" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              <ul className="list-none space-y-7 text-lg md:text-xl">
                <li>Showcase your organization&apos;s values through thoughtful destination selection</li>
                <li>Recognize and celebrate employee or partner excellence</li>
                <li>Strengthen team bonds through shared extraordinary experiences</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-[130vh] flex justify-center bg-white py-0 mb-6">
        <div className="relative w-[100vw]  h-[80vh] md:h-[130vh] lg:h-[100vh] mx-auto">
            <Image
              src="/images/services/incentive/collage.svg"
              alt="Ayurveda Retreat Locations"
              fill
              className="object-contain object-center rounded-lg"
              priority={false}
            />
        </div>
      </section>
      <Footer />
    </main>
  );
}
