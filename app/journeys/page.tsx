import { Suspense } from 'react';
import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import JourneyFinder from './JourneyFinder';

export const metadata: Metadata = {
  title: 'All Journeys | Liberty India',
  description:
    'Browse every Liberty India journey. Filter by region, interest, travel style, and group format to find your next bespoke India experience.',
  alternates: { canonical: '/journeys' },
};

export default function JourneysPage() {
  return (
    <>
      <Navbar variant="white" />
      <main className="bg-white">
        {/* Spacer for fixed Navbar */}
        <div className="h-20 md:h-24" />

        {/* Page heading */}
        <Reveal className="w-[92%] max-w-7xl mx-auto pt-6 md:pt-10 pb-8 md:pb-10 text-center">
          <h1
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-[#424242]"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Journey Finder
          </h1>
          <p
            className="mt-3 text-sm md:text-base text-[#8d8d8d] max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
          >
            Filter by region, interest, travel style, and group format to find the journey that fits you.
          </p>
        </Reveal>

        <Suspense fallback={null}>
          <JourneyFinder />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
