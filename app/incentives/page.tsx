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
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6 md:px-8 lg:px-10 py-6 md:py-8 lg:py-10 flex items-center z-10 shadow-lg min-h-[120px] w-[90%] max-w-[90%]">
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

      {/* Services Grid Section (before collage) */}
      <section className="w-full flex justify-center bg-white py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-[80vw] max-w-[80vw] mx-auto">
          {/* Row 1 */}
            <div className="relative aspect-square overflow-hidden">
            <Image src="/images/services/incentive/destination.svg" alt="Strategic Destination Curation" fill className="object-cover object-center" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white/95 p-8 md:p-8 min-h-[120px] w-[90%] max-w-[90%] flex flex-col justify-center">
              <h3 className="font-semibold text-lg md:text-xl mb-1">Strategic Destination Curation</h3>
              <p className="text-gray-700 text-sm md:text-base">Destinations aligned with your business goals</p>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image src="/images/services/incentive/itinerary.svg" alt="Bespoke Itinerary Design & Logistics" fill className="object-cover object-center" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white/95 p-8 md:p-8 min-h-[120px] w-[90%] max-w-[90%] flex flex-col justify-center">
              <h3 className="font-semibold text-lg md:text-xl mb-1">Bespoke Itinerary Design & Logistics</h3>
              <p className="text-gray-700 text-sm md:text-base">Well-balanced programs and end to end on site coordination</p>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden">
            <Image src="/images/services/incentive/accomodation.svg" alt="Curated Accommodation" fill className="object-cover object-center" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white/95 p-8 md:p-8 min-h-[120px] w-[90%] max-w-[90%] flex flex-col justify-center">
              <h3 className="font-semibold text-lg md:text-xl mb-1">Curated Accommodation</h3>
              <p className="text-gray-700 text-sm md:text-base">Luxury, heritage and modern accommodations</p>
            </div>
          </div>
          {/* Row 2 */}
          <div className="relative aspect-square overflow-hidden">
            <Image src="/images/services/incentive/experience.svg" alt="Signature Experiences" fill className="object-cover object-center" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white/95 p-8 md:p-8 min-h-[120px] w-[90%] max-w-[90%] flex flex-col justify-center">
              <h3 className="font-semibold text-lg md:text-xl mb-1">Signature Experiences</h3>
              <p className="text-gray-700 text-sm md:text-base">Adventure, culture, wellness, CSR, and entertainment</p>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden ">
            <Image src="/images/services/incentive/dinner.svg" alt="Curated Dinner Experiences" fill className="object-cover object-center" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white/95 p-8 md:p-8 min-h-[120px] w-[90%] max-w-[90%] flex flex-col justify-center">
              <h3 className="font-semibold text-lg md:text-xl mb-1">Curated Dinner Experiences</h3>
              <p className="text-gray-700 text-sm md:text-base">Culture and historic dinner, Chef’s Table experiences, themed events and more</p>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden ">
            <Image src="/images/services/incentive/journeys.svg" alt="Pre & Post Private Journeys" fill className="object-cover object-center" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white/95 p-8 md:p-8 min-h-[120px] w-[90%] max-w-[90%] flex flex-col justify-center">
              <h3 className="font-semibold text-lg md:text-xl mb-1">Pre & Post Private Journeys</h3>
              <p className="text-gray-700 text-sm md:text-base">Customised itineraries based on individual requests</p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center bg-white m-0 p-0">
        <div className="relative w-[100vw] h-[80vh] md:h-[130vh] lg:h-[100vh] mx-auto">
            <Image
              src="/images/services/incentive/collage.svg"
              alt="Incentive Collage"
              fill
              className="object-contain object-center rounded-lg"
              priority={false}
            />
        </div>
      </section>

      {/* Customized Programs Section */}
      <section className="w-full flex flex-col md:flex-row items-stretch justify-center bg-white m-0 p-0 mt-20 mb-20">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 h-[200px] md:h-auto relative min-h-[200px]">
          <Image
            src="/images/services/incentive/programs.svg"
            alt="Customized Programs"
            fill
            className="object-cover object-center rounded-none"
            priority={false}
          />
        </div>
        {/* Right: Form and Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-12 bg-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Customized Programs</h2>
          <p className="text-base md:text-lg text-gray-700 mb-4">Looking for a tailor–made MICE experience?</p>
          <p className="text-base md:text-lg text-gray-700 mb-8">Write to us at <b>Contact@Liberty.in</b> or leave your details, and our team will connect with you to curate a program designed exclusively for you.</p>
          <form className="space-y-4 w-full">
            <div className="flex flex-col md:flex-row gap-4">
              <input type="text" placeholder="Full Name*" className="border border-gray-400 rounded px-4 py-3 w-full" required />
              <input type="text" placeholder="Organization Name" className="border border-gray-400 rounded px-4 py-3 w-full" />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input type="email" placeholder="Email Address*" className="border border-gray-400 rounded px-4 py-3 w-full" required />
              <input type="text" placeholder="Phone Number" className="border border-gray-400 rounded px-4 py-3 w-full" />
            </div>
            <textarea placeholder="Tell us more about your travel plans" className="border border-gray-400 rounded px-4 py-3 w-full min-h-[90px]" />
            <div className="flex flex-col gap-2 mt-2">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="accent-black" required />
                I accept the <a href="#" className="underline">Privacy Policy</a>.
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="accent-black" />
                I would like to receive news, updates, and other information from Liberty India
              </label>
            </div>
            <button type="submit" className="w-full bg-black text-yellow-300 font-semibold text-lg py-3 rounded mt-2 transition hover:bg-yellow-300 hover:text-black">Submit</button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
