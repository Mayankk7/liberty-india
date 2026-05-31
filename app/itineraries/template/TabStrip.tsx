'use client';

const TABS = [
  { id: 'overview', label: 'Overview' },
  { id: 'summary', label: 'Summary' },
  { id: 'itinerary', label: 'Itinerary' },
  { id: 'dates', label: 'Dates & Prices' },
  { id: 'details', label: 'Journey Details' },
] as const;

/**
 * Static tab strip matching Figma — four centred anchor links sitting on a
 * cream band directly below the hero. Smooth-scrolls to in-page sections via
 * the global `html { scroll-behavior: smooth }` rule.
 */
export default function TabStrip({ hideTabs = [] }: { hideTabs?: string[] }) {
  const visibleTabs = TABS.filter((tab) => !hideTabs.includes(tab.id));
  return (
    <nav
      className="w-full border-b border-[#E9E4BF] bg-[#FFFDEC]"
      aria-label="Itinerary sections"
    >
      <div className="w-[90%] max-w-6xl mx-auto flex items-center justify-center gap-3 sm:gap-6 md:gap-12 overflow-x-auto scrollbar-hide">
        {visibleTabs.map((tab) => (
          <a
            key={tab.id}
            href={`#${tab.id}`}
            className="px-1.5 sm:px-2 md:px-4 py-3 sm:py-3.5 md:py-4 text-[13px] sm:text-sm md:text-base text-[#141313] hover:text-[#EF9120] transition-colors whitespace-nowrap"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            {tab.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
