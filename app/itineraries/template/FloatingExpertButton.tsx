'use client';

import { useEffect, useState } from 'react';
import type { Itinerary } from '../itineraries';
import ExpertInquiryModal from './ExpertInquiryModal';

/**
 * Floating bottom-right "Speak to an Expert" CTA — visible on itinerary
 * detail pages only. Fades in after the user scrolls past the hero, hides
 * itself while the modal is open to avoid visual overlap.
 */
export default function FloatingExpertButton({ itinerary }: { itinerary: Itinerary }) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 240);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Speak to an Expert"
        className={`li-no-print fixed bottom-5 right-5 md:bottom-7 md:right-7 z-40 inline-flex items-center justify-center px-5 md:px-6 py-3 md:py-3.5 rounded-[4px] bg-black hover:bg-[#1a1a1a] text-white shadow-[0_10px_28px_-10px_rgba(0,0,0,0.45)] hover:shadow-[0_14px_36px_-10px_rgba(0,0,0,0.55)] transition-all duration-300 cursor-pointer ${
          visible && !open
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
        style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
      >
        <span className="text-[14px] md:text-[15px] font-medium tracking-[0.02em] whitespace-nowrap">
          Speak to an Expert
        </span>
      </button>

      <ExpertInquiryModal
        open={open}
        onClose={() => setOpen(false)}
        itinerary={itinerary}
      />
    </>
  );
}
