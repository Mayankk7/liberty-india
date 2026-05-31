'use client';

import { useState } from 'react';
import type { Itinerary } from '../itineraries';
import InquiryModal from './InquiryModal';

/**
 * Journey Details — editorial, brand-only layout. Section header, a
 * "Speak to an Expert" call-to-action, then Inclusions / What's Not
 * Included as a two-column flow, with Important Notes at the bottom.
 * Each inclusion line gets a round cream icon picked from the bullet
 * text (bed / utensils / car / guide / etc).
 */
export default function DetailsSection({ itinerary }: { itinerary: Itinerary }) {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <section id="dates" className="w-full bg-[#FFFDEC] scroll-mt-20 py-14 md:py-20">
      <div className="w-[90%] max-w-6xl mx-auto">
        {/* Section header */}
        <header className="max-w-2xl">
          <p
            className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#E07B39] mb-3"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
          >
            Journey Details
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-[44px] font-semibold text-[#141313] leading-tight tracking-[0.01em]"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Everything you need to plan with confidence.
          </h2>
        </header>

        {/* Speak to an Expert CTA */}
        <ExpertCta onOpen={() => setInquiryOpen(true)} />

        {/* Inclusions / Exclusions — 2-col flow */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-12">
          <InclusionsList
            eyebrow="Included"
            title="Inclusions & Offers"
            items={itinerary.inclusions}
          />
          <DetailList
            eyebrow="Not Included"
            title="What's Not Included"
            items={itinerary.exclusions}
            glyph="dash"
            muted
          />
        </div>

        {/* Soft divider */}
        <div className="mt-14 md:mt-20 mb-12 md:mb-16 h-px bg-[#E9E4BF]" aria-hidden="true" />

        {/* Important Notes */}
        <div id="details" className="scroll-mt-20">
          <NotesList
            eyebrow="Good to know"
            title="Important Notes"
            items={itinerary.notes}
          />
        </div>
      </div>

      <InquiryModal
        open={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        itinerary={itinerary}
      />
    </section>
  );
}

// ─── Speak to an Expert CTA ─────────────────────────────────────────────────

function ExpertCta({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="mt-10 md:mt-14 bg-white border border-[#E9E4BF] rounded-[14px] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 justify-between">
      <div className="max-w-xl">
        <p
          className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#E07B39] mb-2"
          style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
        >
          Have a question?
        </p>
        <h3
          className="text-2xl md:text-3xl font-semibold text-[#141313] leading-tight"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
        >
          Speak to an Expert
        </h3>
        <p
          className="mt-2 text-sm md:text-[15px] text-[#424242] font-light leading-relaxed"
          style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
        >
          A Liberty India specialist will plan this journey around you — flexible dates, custom pacing, your preferred style.
        </p>
      </div>

      <button
        type="button"
        onClick={onOpen}
        className="shrink-0 inline-flex items-center justify-center gap-2 px-7 py-4 rounded-[10px] bg-[#E07B39] hover:bg-[#c66a2f] text-white text-base md:text-lg tracking-[0.02em] transition-colors shadow-sm"
        style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
      >
        Speak to an Expert
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="13 6 19 12 13 18" />
        </svg>
      </button>
    </div>
  );
}

// ─── Inclusions list (round icons routed by keyword) ────────────────────────

function InclusionsList({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: string[];
}) {
  return (
    <div>
      <p
        className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#E07B39] mb-2"
        style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
      >
        {eyebrow}
      </p>
      <h3
        className="text-2xl md:text-[28px] font-semibold text-[#141313] leading-tight mb-6 md:mb-7"
        style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
      >
        {title}
      </h3>
      <ul className="divide-y divide-[#E9E4BF]/70 border-y border-[#E9E4BF]/70">
        {items.map((text, i) => (
          <li
            key={i}
            className="flex items-center gap-4 py-4 text-[15px] md:text-base leading-[1.65] text-[#424242] font-light"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
          >
            <InclusionIcon text={text} />
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function InclusionIcon({ text }: { text: string }) {
  const Icon = pickIcon(text);
  return (
    <span className="inline-flex w-11 h-11 rounded-full bg-white border border-[#E9E4BF] items-center justify-center shrink-0 text-[#2B2B2B] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <Icon className="w-[18px] h-[18px]" />
    </span>
  );
}

// Keyword → icon picker. First substring match wins.
function pickIcon(raw: string): (props: { className?: string }) => React.JSX.Element {
  const t = raw.toLowerCase();
  const matches: Array<[RegExp, (p: { className?: string }) => React.JSX.Element]> = [
    [/accommodat|villa|suite|\broom\b|twin\/double|\bstay\b/, BedIcon],
    [/breakfast|dinner|lunch|\bmeal\b|cuisine|vegetarian|\bfood\b|board/, UtensilsIcon],
    [/transfer|vehicle|crysta|tempo|\bdriv\w*|pickup|rickshaw|cycle/, CarIcon],
    [/guide|english[- ]speaking|naturalist/, UserIcon],
    [/flight|airfare|airport/, PlaneIcon],
    [/yoga|meditation|ayurved|therap|dosha|wellness|treatment|steam bath/, LotusIcon],
    [/safari|wildlife|jungle|park\b|jeep|dolphin/, LeafIcon],
    [/pool|library|gym|facilit|swim/, SparklesIcon],
    [/water|herbal|mineral/, DropletIcon],
    [/entrance|monument|\bfee\b|\bgst\b|\btax\b/, TicketIcon],
  ];
  for (const [re, Icon] of matches) {
    if (re.test(t)) return Icon;
  }
  return CheckIcon;
}

// ─── Notes list (Good to know — keyword-routed icons) ──────────────────────

function NotesList({
  eyebrow,
  title,
  items,
}: {
  eyebrow: string;
  title: string;
  items: string[];
}) {
  return (
    <div>
      <p
        className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#E07B39] mb-2"
        style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
      >
        {eyebrow}
      </p>
      <h3
        className="text-2xl md:text-[28px] font-semibold text-[#141313] leading-tight mb-6 md:mb-7"
        style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
      >
        {title}
      </h3>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-1 border-y border-[#E9E4BF]/70 divide-y divide-[#E9E4BF]/70 md:divide-y-0">
        {items.map((text, i) => (
          <li
            key={i}
            className="flex items-start gap-4 py-4 text-[15px] md:text-base leading-[1.65] text-[#424242] font-light"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
          >
            <NoteIcon text={text} />
            <span className="pt-1.5">{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NoteIcon({ text }: { text: string }) {
  const Icon = pickNoteIcon(text);
  return (
    <span className="inline-flex w-10 h-10 rounded-full bg-[#FFFDEC] border border-[#E9E4BF] items-center justify-center shrink-0 text-[#E07B39] shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      <Icon className="w-[17px] h-[17px]" />
    </span>
  );
}

function pickNoteIcon(raw: string): (props: { className?: string }) => React.JSX.Element {
  const t = raw.toLowerCase();
  const matches: Array<[RegExp, (p: { className?: string }) => React.JSX.Element]> = [
    [/blackout|season|period|\bdate|valid|availab/, CalendarIcon],
    [/festival|premium|surchar|peak|christmas|new year/, TagIcon],
    [/weather|climate|monsoon|rain|temperature|cold|hot/, CloudIcon],
    [/visa|passport|document/, DocumentIcon],
    [/vaccine|health|medic|insurance/, ShieldIcon],
    [/currency|cash|payment|\bfee|charge|price|cost/, CoinIcon],
    [/luggage|pack|baggage|bag/, LuggageIcon],
  ];
  for (const [re, Icon] of matches) {
    if (re.test(t)) return Icon;
  }
  return InfoIcon;
}

// ─── Generic detail list (exclusions only) ──────────────────────────────────

function DetailList({
  eyebrow,
  title,
  items,
  glyph,
  muted = false,
  columns = 1,
}: {
  eyebrow: string;
  title: string;
  items: string[];
  glyph: 'dash' | 'dot';
  muted?: boolean;
  columns?: 1 | 2;
}) {
  const bodyColor = muted ? 'text-[#424242]/85' : 'text-[#424242]';
  return (
    <div>
      <p
        className="text-xs md:text-sm tracking-[0.3em] uppercase text-[#E07B39] mb-2"
        style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
      >
        {eyebrow}
      </p>
      <h3
        className="text-2xl md:text-[28px] font-semibold text-[#141313] leading-tight mb-6 md:mb-7"
        style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
      >
        {title}
      </h3>
      <ul
        className={`space-y-4 ${columns === 2 ? 'md:grid md:grid-cols-2 md:gap-x-10 md:gap-y-4 md:space-y-0' : ''}`}
      >
        {items.map((text, i) => (
          <li
            key={i}
            className={`flex gap-3 text-[15px] md:text-base leading-[1.7] ${bodyColor} font-light`}
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
          >
            <Glyph kind={glyph} />
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Glyph({ kind }: { kind: 'dash' | 'dot' }) {
  if (kind === 'dash') {
    return (
      <span aria-hidden="true" className="shrink-0 text-[#B89B5E] leading-[1.7] select-none w-5">
        —
      </span>
    );
  }
  return (
    <span
      aria-hidden="true"
      className="shrink-0 mt-2.5 inline-block w-1.5 h-1.5 rounded-full bg-[#E07B39]"
    />
  );
}

// ─── Inline SVG icons (line style, currentColor) ────────────────────────────

type IconProps = { className?: string };
const baseSvg = (className?: string) =>
  ({
    'aria-hidden': true,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6 as unknown as string,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
  }) as const;

function BedIcon({ className }: IconProps) {
  return (
    <svg {...baseSvg(className)}>
      <path d="M3 18v-7" />
      <path d="M21 18v-4a3 3 0 0 0-3-3H3" />
      <path d="M3 18h18" />
      <path d="M7 11V8a1 1 0 0 1 1-1h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

function UtensilsIcon({ className }: IconProps) {
  return (
    <svg {...baseSvg(className)}>
      <path d="M7 3v8m0 0a2 2 0 0 0 2-2V3M5 3v6a2 2 0 0 0 2 2" />
      <path d="M7 11v10" />
      <path d="M17 3c-1.5 0-3 2-3 5s1 4 2 4v9" />
    </svg>
  );
}

function CarIcon({ className }: IconProps) {
  return (
    <svg {...baseSvg(className)}>
      <path d="M3 14l1.5-5A2 2 0 0 1 6.4 7.5h11.2a2 2 0 0 1 1.9 1.5L21 14" />
      <path d="M3 14h18v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4z" />
      <circle cx="7.5" cy="16.5" r="1" fill="currentColor" />
      <circle cx="16.5" cy="16.5" r="1" fill="currentColor" />
    </svg>
  );
}

function UserIcon({ className }: IconProps) {
  return (
    <svg {...baseSvg(className)}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c0-3.5 3-6 7-6s7 2.5 7 6" />
    </svg>
  );
}

function PlaneIcon({ className }: IconProps) {
  return (
    <svg {...baseSvg(className)}>
      <path d="M3 12l6-1 4-7 2 0-1 7 6 1 0 2-6 1 1 7-2 0-4-7-6-1z" />
    </svg>
  );
}

function LotusIcon({ className }: IconProps) {
  return (
    <svg {...baseSvg(className)}>
      <path d="M12 5c-1 2-1 4 0 6 1-2 1-4 0-6z" />
      <path d="M7 9c-1 2 0 5 2 7 1-2 1-5-2-7z" />
      <path d="M17 9c1 2 0 5-2 7-1-2-1-5 2-7z" />
      <path d="M4 13c-1 3 3 6 8 6s9-3 8-6c-3 1-5 1-8 1s-5 0-8-1z" />
    </svg>
  );
}

function LeafIcon({ className }: IconProps) {
  return (
    <svg {...baseSvg(className)}>
      <path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14z" />
      <path d="M5 19c3-3 6-5 11-9" />
    </svg>
  );
}

function SparklesIcon({ className }: IconProps) {
  return (
    <svg {...baseSvg(className)}>
      <path d="M12 3l1.6 4L18 8.6 13.6 10 12 14 10.4 10 6 8.6 10.4 7z" />
      <path d="M18 14l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" />
    </svg>
  );
}

function DropletIcon({ className }: IconProps) {
  return (
    <svg {...baseSvg(className)}>
      <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />
    </svg>
  );
}

function TicketIcon({ className }: IconProps) {
  return (
    <svg {...baseSvg(className)}>
      <path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V9z" />
      <line x1="13" y1="7" x2="13" y2="17" strokeDasharray="2 2" />
    </svg>
  );
}

function CheckIcon({ className }: IconProps) {
  return (
    <svg {...baseSvg(className)}>
      <polyline points="4 12 10 18 20 6" />
    </svg>
  );
}

function CalendarIcon({ className }: IconProps) {
  return (
    <svg {...baseSvg(className)}>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <line x1="3.5" y1="10" x2="20.5" y2="10" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="16" y1="3" x2="16" y2="7" />
    </svg>
  );
}

function TagIcon({ className }: IconProps) {
  return (
    <svg {...baseSvg(className)}>
      <path d="M3 12V4a1 1 0 0 1 1-1h8l9 9-9 9-9-9z" />
      <circle cx="8" cy="8" r="1.4" fill="currentColor" />
    </svg>
  );
}

function CloudIcon({ className }: IconProps) {
  return (
    <svg {...baseSvg(className)}>
      <path d="M6 18a4 4 0 0 1 .8-7.92 5 5 0 0 1 9.9 1.42A3.5 3.5 0 0 1 17 18H6z" />
    </svg>
  );
}

function DocumentIcon({ className }: IconProps) {
  return (
    <svg {...baseSvg(className)}>
      <path d="M6 3h8l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M14 3v4h4" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="14" y2="17" />
    </svg>
  );
}

function ShieldIcon({ className }: IconProps) {
  return (
    <svg {...baseSvg(className)}>
      <path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6l8-3z" />
      <polyline points="9 12 11.5 14.5 16 10" />
    </svg>
  );
}

function CoinIcon({ className }: IconProps) {
  return (
    <svg {...baseSvg(className)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.5a3 3 0 0 0-5 1.5c0 3 5 2 5 4a3 3 0 0 1-5 1.5" />
      <line x1="12" y1="7" x2="12" y2="9" />
      <line x1="12" y1="15" x2="12" y2="17" />
    </svg>
  );
}

function LuggageIcon({ className }: IconProps) {
  return (
    <svg {...baseSvg(className)}>
      <rect x="5" y="7" width="14" height="13" rx="1.5" />
      <path d="M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
      <line x1="9" y1="11" x2="9" y2="17" />
      <line x1="15" y1="11" x2="15" y2="17" />
    </svg>
  );
}

function InfoIcon({ className }: IconProps) {
  return (
    <svg {...baseSvg(className)}>
      <circle cx="12" cy="12" r="9" />
      <line x1="12" y1="11" x2="12" y2="16" />
      <circle cx="12" cy="8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}
