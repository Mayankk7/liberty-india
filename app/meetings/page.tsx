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
            src="/images/services/meetings/meetings-bg.svg"
            alt="Meetings Hero"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-light tracking-wide drop-shadow-lg"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Meetings & Conferences
            </h1>
          </div>
        </div>
      </section>

      {/* Wellness Title Section */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-[#FDF8E8]">
        <div className="w-full max-w-5xl mx-auto text-center">
          <p className="text-5xl md:text-5xl lg:text-5xl xl:text-[2.5rem] font-normal text-gray-900 leading-tight" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Business by Day, Inspiration by Night
          </p>
        </div>
      </section>

      {/* Wellness Image Grid with Text Card */}
      <section className="w-full bg-[#FDF8E8] py-0">
                <div className="relative w-full max-w-full mx-auto" style={{height:'600px'}}>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full h-full">
            <div className="relative h-full w-full">
              <Image src="/images/services/meetings/picture-1.svg" alt="Meetings 1" fill className="object-cover object-center" priority={false} />
            </div>
            <div className="relative h-full w-full">
              <Image src="/images/services/meetings/picture-2.svg" alt="Meetings 2" fill className="object-cover object-center" priority={false} />
            </div>
            <div className="relative h-full w-full">
              <Image src="/images/services/meetings/picture-3.svg" alt="Meetings 3" fill className="object-cover object-center" priority={false} />
            </div>
          </div>
          {/* Overlay Card */}
          <div className="absolute left-8 top-1/2 -translate-y-1/2 bg-white px-8 py-10 md:px-12 md:py-12 shadow-lg max-w-xl text-left" style={{fontFamily:'var(--font-merriweather), Georgia, serif'}}>
            <p className="text-lg text-gray-800 leading-relaxed">
              MICE (Meetings, Incentives, Conferences, Exhibitions) travel combines business requirements with transformational experiences. It's about facilitating productive meetings while creating an environment where participants feel valued and inspired
            </p>
          </div>
        </div>
        <div className="w-full text-center bg-[#FDF8E8] py-8 mt-0">
          <span className="text-xl md:text-2xl font-bold text-gray-800" style={{fontFamily:'var(--font-playfair), Georgia, serif'}}>
            Liberty India specializes in Meetings and Event Management that
          </span>
        </div>
      </section>


      {/* Banquet-style Section */}
      <section className="w-full flex flex-col md:flex-row bg-white py-0">
        {/* Left: List */}
        <div className="w-full md:w-[38%] flex flex-col divide-y divide-gray-200 bg-white px-4 md:px-10 py-6 md:py-12">
          <div className="py-8 px-4 md:px-8 text-lg md:text-xl text-gray-700" style={{fontFamily:'var(--font-merriweather), Georgia, serif'}}>
            Ensures flawless logistical execution for large-scale events
          </div>
          <div className="py-8 px-4 md:px-8 text-lg md:text-xl text-gray-700" style={{fontFamily:'var(--font-merriweather), Georgia, serif'}}>
            Provides inspiring venues and environments for serious business
          </div>
          <div className="py-8 px-4 md:px-8 text-lg md:text-xl text-gray-700" style={{fontFamily:'var(--font-merriweather), Georgia, serif'}}>
            Integrates meaningful cultural and wellness experiences
          </div>
          <div className="py-8 px-4 md:px-8 text-lg md:text-xl text-gray-700" style={{fontFamily:'var(--font-merriweather), Georgia, serif'}}>
            Supports all pre-event, on-event, and post-event logistics
          </div>
          <div className="py-8 px-4 md:px-8 text-lg md:text-xl text-gray-700" style={{fontFamily:'var(--font-merriweather), Georgia, serif'}}>
            Sustainable Solutions
          </div>
        </div>
        {/* Right: Image */}
        <div className="w-full md:w-[62%] h-[60vh] md:h-[60vh] relative mt-6 md:mt-10">
          <Image
            src="/images/services/meetings/heritage.svg"
            alt="Banquet Hall"
            fill
            className="object-cover object-center"
            priority={false}
          />
        </div>
      </section>
      {/* Meetings and Events Destination Options Section */}
      <section className="w-full bg-white py-12">
        <div className="max-w-[90vw] mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-semibold mb-2" style={{fontFamily:'var(--font-playfair), Georgia, serif'}}>
            Meetings and Events Destination Options
          </h2>
          <p className="text-center text-base md:text-lg text-gray-700 mb-8" style={{fontFamily:'var(--font-merriweather), Georgia, serif'}}>
            India offers exquisite settings where business meets elegance—blending world-class venues with culture, leisure, and wellness.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-0 rounded overflow-hidden shadow-lg w-full" style={{minHeight:'900px'}}>
            {/* Top Left */}
            <div className="relative h-[400px] md:h-[450px] overflow-hidden">
              <Image src="/images/services/meetings/capital-city.svg" alt="Capital City Conferences" fill className="object-cover object-center" priority={false} />
              <div className="absolute bottom-0 right-0 w-2/3 min-h-[110px] bg-white/95 border-t border-r border-gray-200 p-6 md:p-8 z-10 flex flex-col justify-end" style={{boxShadow:'0 4px 24px 0 rgba(0,0,0,0.04)'}}>
                <h3 className="font-semibold text-lg md:text-xl mb-1 text-left">Capital City Conferences</h3>
                <p className="text-gray-700 text-sm md:text-base text-left whitespace-normal break-words">A global business hub with ultra-luxury venues, seamless international access</p>
              </div>
            </div>
            {/* Top Right */}
            <div className="relative h-[400px] md:h-[450px] overflow-hidden">
              <Image src="/images/services/meetings/beachside.svg" alt="Beachside Conferences" fill className="object-cover object-center" priority={false} />
              <div className="absolute bottom-0 left-0 w-2/3 min-h-[110px] bg-white/95 border-t border-l border-gray-200 p-6 md:p-11 text-left z-10 flex flex-col justify-end" style={{boxShadow:'0 4px 24px 0 rgba(0,0,0,0.04)'}}>
                <h3 className="font-semibold text-lg md:text-xl mb-1 text-left">Beachside Conferences</h3>
                <p className="text-gray-700 text-sm md:text-base text-left whitespace-normal break-words">Sun, sea, and sophisticated resort conferencing</p>
              </div>
            </div>
            {/* Bottom Left */}
            <div className="relative h-[400px] md:h-[450px] overflow-hidden">
              <Image src="/images/services/meetings/serenity.svg" alt="Serenity & Strategy" fill className="object-cover object-center" priority={false} />
              <div className="absolute top-0 right-0 w-2/3 min-h-[110px] bg-white/95 border-b border-r border-gray-200 p-6 md:p-11 z-10 flex flex-col justify-start" style={{boxShadow:'0 4px 24px 0 rgba(0,0,0,0.04)'}}>
                <h3 className="font-semibold text-lg md:text-xl mb-1 text-left">Serenity & Strategy</h3>
                <p className="text-gray-700 text-sm md:text-base text-left whitespace-normal break-words">Adventure, culture, wellness, CSR, and entertainment</p>
              </div>
            </div>
            {/* Bottom Right */}
            <div className="relative h-[400px] md:h-[450px] overflow-hidden">
              <Image src="/images/services/meetings/heritage.svg" alt="Heritage Blend" fill className="object-cover object-center" priority={false} />
              <div className="absolute top-0 left-0 w-2/3 min-h-[110px] bg-white/95 border-b border-l border-gray-200 p-6 md:p-8 text-left z-10 flex flex-col justify-start" style={{boxShadow:'0 4px 24px 0 rgba(0,0,0,0.04)'}}>
                <h3 className="font-semibold text-lg md:text-xl mb-1 text-left">Heritage Blend</h3>
                <p className="text-gray-700 text-sm md:text-base text-left whitespace-normal break-words">Palace venues and regal hospitality create an inspiring backdrop for intimate</p>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Customized Programs Section */}
      <section className="w-full flex flex-col md:flex-row items-stretch justify-center bg-[#FDF8E8] mb-12 py-12 mt-8 md:py-8 mb-0">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 h-[350px] md:h-auto relative min-h-[350px]">
          <Image
            src="/images/services/meetings/program.svg"
            alt="Customized Programs"
            fill
            className="object-cover object-center rounded-none"
            priority={false}
          />
        </div>
        {/* Right: Form and Text */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-4 md:px-12 ">
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
