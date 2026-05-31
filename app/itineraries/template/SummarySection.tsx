import type { Itinerary } from '../itineraries';

/**
 * Summary — matches Figma node 1042:1075. Cream band with serif heading
 * + blue "View Day Wise Overview" CTA, three stat chips with thin tall
 * vertical dividers between them, and a single thin-bordered white card
 * holding two columns of `✦` bullets from `summary` / `summaryRight`.
 */
export default function SummarySection({ itinerary }: { itinerary: Itinerary }) {
  const left = itinerary.summary ?? [];
  const right = itinerary.summaryRight ?? [];

  if (left.length === 0 && right.length === 0) return null;

  return (
    <section id="summary" className="w-full bg-[#FFFDEC] scroll-mt-20 py-12 md:py-16">
      <div className="w-[90%] max-w-6xl mx-auto">
        {/* Heading + CTA */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 md:mb-10">
          <h2
            className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-[#424242] leading-tight tracking-[0.02em]"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Summary
          </h2>
          <a
            href="#itinerary"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-[8px] bg-[#025791] hover:bg-[#024a7b] text-white text-sm md:text-base tracking-[0.02em] transition-colors"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
          >
            View Day Wise Overview
          </a>
        </div>

        {/* Stats chips — horizontal row with thin dividers between */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_auto_auto_auto_auto] md:justify-start items-stretch gap-3 md:gap-0 mb-8 md:mb-10">
          <StatChip label="Duration" value={itinerary.duration} />
          <ChipDivider />
          <StatChip label="Route" value={itinerary.route} grow />
          <ChipDivider />
          <StatChip label="Best Time" value={itinerary.bestTime} />
        </div>

        {/* Bullets card */}
        <div className="bg-white/40 border border-[#E9E4BF] rounded-[10px] p-5 md:p-8 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12">
            <BulletColumn items={left} />
            <BulletColumn items={right} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ChipDivider() {
  return (
    <div className="hidden md:flex items-center justify-center px-1" aria-hidden="true">
      <span className="block h-7 w-[2px] bg-[#E9E4BF]" />
    </div>
  );
}

function StatChip({ label, value, grow = false }: { label: string; value: string; grow?: boolean }) {
  return (
    <div
      className={`bg-[#FFFDEB] rounded-[10px] px-5 md:px-6 py-3.5 md:py-4 flex items-center ${grow ? 'min-w-0 max-w-full md:max-w-[30rem]' : ''}`}
      style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
    >
      <span className="flex items-baseline gap-2 md:gap-3 min-w-0 text-[#424242] text-sm md:text-base tracking-[0.02em] leading-[1.6]">
        <span className="font-bold whitespace-nowrap">{label}</span>
        <span className="font-light truncate min-w-0">{value}</span>
      </span>
    </div>
  );
}

function BulletColumn({ items }: { items: string[] }) {
  if (items.length === 0) return <div aria-hidden="true" />;
  return (
    <ul className="divide-y divide-[#E9E4BF]">
      {items.map((text, i) => (
        <li
          key={i}
          className="flex gap-3 py-4 first:pt-0 last:pb-0 text-base md:text-[17px] leading-[1.7] text-[#424242] font-light"
          style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
        >
          <span aria-hidden="true" className="text-[#E9E4BF] text-lg leading-[1.5] shrink-0">✦</span>
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
}
