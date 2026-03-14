"use client";

import { Itinerary } from './itineraries';
import Footer from '../components/Footer';

const signatureExperiences = [
  {
    image: '/images/itineraries/north-east/botanical-garden.svg',
    category: 'Culture & History',
    title: 'Walk around Botanical Garden',
  },
  {
    image: '/images/itineraries/north-east/tram-train.png',
    category: 'Adventure Tour',
    title: 'Tram Ride',
  },
  {
    image: '/images/itineraries/north-east/mother-teresa.svg',
    category: 'Culture & History',
    title: 'Visit Mother Teresas house',
  },
  {
    image: '/images/itineraries/north-east/cooking.svg',
    category: 'Culture & History',
    title: 'Cooking Workshop',
  },
  {
    image: '/images/itineraries/north-east/painting.svg',
    category: 'Adventure Tour',
    title: 'Painting Workshop',
  },
  {
    image: '/images/itineraries/north-east/jazz-bar.svg',
    category: 'Culture & History',
    title: 'Drink at a jazz Bar',
  },
];

import Image from 'next/image';
import Navbar from '../components/Navbar';
import { useState } from 'react';

export default function ItineraryTemplate({ itinerary }: { itinerary: Itinerary }) {
  const [showItinerary, setShowItinerary] = useState(false);
  if (!itinerary) return <div className="text-center py-20 text-2xl">Itinerary not found.</div>;
  return (
    <div className="bg-[#FCFAF3] w-screen min-h-screen">
      <Navbar variant="white" />
      {/* Hero Section */}
      <div className="relative w-screen h-screen min-h-125 flex items-center justify-center">
        <Image
          src={itinerary.heroImage}
          alt={itinerary.title}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 gap-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg tracking-wide leading-tight">{itinerary.title}</h1>
          <p className="text-lg md:text-xl mb-6 drop-shadow-lg max-w-3xl mx-auto leading-relaxed tracking-wide">{itinerary.subtitle}</p>
          <div className="text-lg font-semibold mb-8 tracking-wide">{itinerary.duration} | {itinerary.route.replace(/ → /g, ' · ')}</div>
        </div>
        {/* Book Button bottom right */}
        <div className="absolute bottom-8 right-8">
          <button className="bg-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-semibold opacity-80 cursor-not-allowed" disabled>Book</button>
        </div>
      </div>

      {/* Tabs/Navbar */}
      <div className="bg-[#F8F6E9] border-b border-[#F2EFD9] flex justify-center gap-16 py-6 text-lg font-medium mb-8 px-8">
        <a href="#overview" className="hover:underline px-20">Overview</a>
        <a href="#itinerary" className="hover:underline px-20">Itinerary</a>
        <a href="#dates" className="hover:underline px-20">Dates & Prices</a>
        <a href="#details" className="hover:underline px-20">Journey Details</a>
      </div>

      {/* Overview Section */}
      <section id="overview" className="w-screen mx-auto flex flex-row gap-0 py-16">
        <div className="w-1/2 flex flex-col items-start pl-8 px-10">
          <h2 className="text-4xl font-bold mb-8 tracking-wide px-10">Overview</h2>
          {itinerary.overview.map((text: string, i: number) => (
            <p
              key={i}
              className="mb-8 text-lg leading-relaxed tracking-wide px-10 py-1"
              style={{ fontFamily: 'Merriweather, serif', color: '#424242' }}
            >
              {text}
            </p>
          ))}
          <button className="mt-10 mx-10 py-3 border rounded px-10 bg-[#FCFAF3] hover:bg-[#F8F6E9] text-[#3B3B3B] font-medium text-base">DOWNLOAD DOCX</button>
        </div>
        <div className="w-1/2 flex items-center justify-center pr-8">
          <Image
            src={itinerary.overviewImage}
            alt="Overview"
            width={0}
            height={0}
            sizes="60vw"
            style={{ width: '50vw', height: '60vh' }}
            className="rounded shadow object-cover"
          />
        </div>
      </section>

      {/* Summary Section */}
      <section className="w-screen py-12 px-0" style={{ background: '#FFFDEC' }}>
        <div className="w-[90vw] mx-auto px-6">
          <div className="relative">
            <h2
              className="text-4xl font-bold mb-10 tracking-wide pb-2"
              style={{
                borderBottom: showItinerary ? '4px solid #EF9120' : '4px solid transparent',
                display: 'inline-block',
                transition: 'border-color 0.2s',
              }}
            >
              Summary
            </h2>
            <button
              className="bg-blue-900 text-white px-6 py-2 rounded text-base absolute right-0 top-0 transition-all duration-200 hover:bg-orange-500 cursor-pointer"
              style={{ minWidth: '220px', transform: 'translateY(10px)' }}
              onClick={() => setShowItinerary(true)}
            >
              View Day Wise Overview
            </button>
          </div>
          <div className="flex flex-wrap gap-12 mb-10">
              <div className="flex flex-nowrap gap-0 mb-10 items-start">
                <div className="shrink-0 pr-8 min-w-40 border-r border-[#E9E4BF]">
                  <div className="font-semibold mb-2 tracking-wide">Duration</div>
                  <div className="text-lg leading-relaxed tracking-wide">{itinerary.duration}</div>
                </div>
                <div className="flex flex-col px-16 w-[50vw] mx-auto border-r border-[#E9E4BF]">
                  <div className="font-semibold mb-2 tracking-wide">Route</div>
                  <div className="text-lg leading-relaxed tracking-wide">{itinerary.route}</div>
                </div>
                <div className="flex flex-col px-8 w-[50vw] mx-auto">
                  <div className="font-semibold mb-2 tracking-wide">Best Time</div>
                  <div className="text-lg leading-relaxed tracking-wide">{itinerary.bestTime}</div>
                </div>
              </div>
          </div>
          <div className="grid md:grid-cols-2 gap-16 rounded p-10" style={{ background: '#FFFDEC', border: '1.5px solid #E9E4BF', boxShadow: '0 0 0 1px #F5F1D6' }}>
            <ul className="space-y-10 text-base leading-relaxed tracking-wide">
              {itinerary.summary.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-4 border-b last:border-b-0 border-[#F5F1D6] pb-8">
                  <span className="text-lg mt-1" style={{ color: '#B89B5E' }}>✦</span>
                  <span className="block w-full" style={{ wordBreak: 'break-word', letterSpacing: '0.01em' }}>{item}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-10 text-base leading-relaxed tracking-wide">
              {itinerary.summaryRight.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-4 border-b last:border-b-0 border-[#F5F1D6] pb-8">
                  <span className="text-lg mt-1" style={{ color: '#B89B5E' }}>✦</span>
                  <span className="block w-full" style={{ wordBreak: 'break-word', letterSpacing: '0.01em' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Itinerary Section (conditionally rendered) */}
      {showItinerary && (
        <section id="itinerary" className="w-full flex flex-col md:flex-row justify-center items-stretch py-12 px-0 bg-transparent">
          {/* Map Section Left - Sticky */}
          <div className="hidden md:flex flex-col justify-start items-start bg-white rounded-l-2xl shadow border border-[#F8F6E1] min-h-175 max-h-full w-150 max-w-200 pt-10 pl-10 pr-8 pb-8 sticky top-20 h-[calc(100vh-6rem)]">
            <Image src={itinerary.mapImage || '/images/itineraries/north-east/map.svg'} alt="India Map" width={560} height={420} className="object-contain w-full h-auto mb-0" style={{ alignSelf: 'flex-start' }} />
          </div>
          {/* Itinerary Cards Section Right */}
          <div className="flex-1 flex flex-col bg-white rounded-r-2xl shadow border border-[#F8F6E1] min-h-175 max-h-full w-full md:w-[44vw] px-0 md:px-8 py-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 px-6 md:px-0">Itinerary</h2>
            <div className="flex flex-col gap-8 w-full">
              {itinerary.days.map((day) => (
                <div
                  key={day.day}
                  className="w-[85%] bg-white border border-[#B89B5E] rounded-xl shadow-sm overflow-hidden border-b-2 border-b-[#B89B5E] p-8 gap-4 mx-auto transition-transform duration-200 hover:scale-[1.025] hover:shadow-lg cursor-pointer active:scale-[0.98]"
                  tabIndex={0}
                  role="button"
                  aria-label={`Day ${day.day}: ${day.title}`}
                >
                  <div className="flex items-center gap-4 mb-2 pb-4 border-b border-[#B89B5E]">
                    <span className="bg-[#F8F6E1] border border-[#F8F6E1] text-[#3B3B3B] px-5 py-2 rounded font-bold text-lg tracking-wide shadow-sm mr-2 min-w-22.5 text-center">Day {day.day.toString().padStart(2, '0')}</span>
                    <span className="font-semibold text-lg md:text-xl text-[#3B3B3B]">{day.title}</span>
                    <span className="ml-auto font-semibold text-base text-[#3B3B3B]">Overnight <span className="font-normal">{day.overnight}</span></span>
                  </div>
                  <div className="pt-4 flex flex-col md:flex-row gap-4">
                    <div className="flex-1 text-gray-700 text-base leading-relaxed whitespace-pre-line px-2 md:px-6 py-2">
                      {day.description}
                    </div>
                    {/* Image Right */}
                    {day.image && (
                      <div className="relative w-full md:w-80 aspect-4/3 min-h-55 shrink-0 rounded overflow-hidden">
                        <Image src={day.image} alt={day.title} fill className="object-cover object-center" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Inclusions, Dates, Notes Section - Modern Layout with Icons */}
      <section id="details" className="w-screen py-0 px-0 bg-[#FFFDEC] mt-10 mb-10">
        <div className="w-full mx-auto flex flex-col md:flex-row gap-24 justify-center items-start px-4 md:px-16">
          {/* Left Column: Inclusions & Exclusions */}
          <div className="flex-1 min-w-85 max-w-150 w-full p-0">
            <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Inclusions & Offers</h2>
            <ul className="mb-8 space-y-8 text-sm md:text-base pb-6">
              {itinerary.inclusions && itinerary.inclusions.map((item, i) => (
                <li key={i} className="font-normal">{item}</li>
              ))}
            </ul>
            <div className="font-bold mb-3 mt-8 text-xl">What’s Not Included</div>
            <ul className="space-y-7 text-sm md:text-base pb-6">
              {itinerary.exclusions && itinerary.exclusions.map((item, i) => (
                <li key={i} className="font-normal">{item}</li>
              ))}
            </ul>
          </div>
          {/* Right Column: Dates & Prices and Important Notes */}
          <div className="flex-1 min-w-85 max-w-150 w-full flex flex-col gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Dates & Prices</h2>
              <ul className="mb-8 space-y-8 text-base md:text-[1.05rem]">
                {itinerary.datesPrices && itinerary.datesPrices.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 font-normal">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Important Notes</h2>
              <ul className="space-y-7 text-[1.15rem]">
                {itinerary.notes && itinerary.notes.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 font-normal">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    {/* Signature Experience Section */}
    <section className="w-screen py-20 px-0 bg-white">
      <div className="w-[70vw] mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-wide" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Signature Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {signatureExperiences.map((exp, i) => (
            <div key={i} className="flex flex-col items-start">
              <div className="w-full aspect-4/5 min-h-80 relative overflow-hidden mb-4 shadow">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={i < 3}
                />
              </div>
              <div className="text-base md:text-lg text-gray-500 mb-1 font-semibold">{exp.category}</div>
              <div className="text-xl md:text-2xl font-bold text-[#232323] leading-snug" style={{ fontFamily: 'Merriweather, serif' }}>{exp.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer/>
    </div>
  );
}
