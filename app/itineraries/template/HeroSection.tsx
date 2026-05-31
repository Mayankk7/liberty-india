import ImageWithLoader from '../../components/ImageWithLoader';
import type { Itinerary } from '../itineraries';

/**
 * Hero — matches Figma 1:31369. Full-bleed image, centered title + subtitle +
 * a single "Duration | route" line. No CTA buttons, eyebrow tags or chevrons.
 *
 * The `route` field is a long stop-by-stop string; Figma shows the regional
 * summary instead (e.g. "Kolkata · Assam · Meghalaya"). We derive a short
 * version: first stop + the deduplicated region after the first arrow.
 */
function shortRoute(route: string): string {
  const parts = route.split('→').map((p) => p.trim()).filter(Boolean);
  if (parts.length <= 3) return parts.join(' · ');
  // First stop, and a couple of representative interior stops.
  return [parts[0], parts[Math.floor(parts.length / 2)], parts[parts.length - 1]].join(' · ');
}

export default function HeroSection({ itinerary }: { itinerary: Itinerary }) {
  return (
    <section className="relative w-full h-[58vh] md:h-[72vh] min-h-[360px] md:min-h-[480px] max-h-[680px] flex items-center justify-center">
      <ImageWithLoader
        src={itinerary.heroImage}
        alt={itinerary.title}
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/35 pointer-events-none" />

      <div className="relative z-10 w-[90%] max-w-4xl mx-auto flex flex-col items-center text-center text-white px-4">
        <h1
          className="text-3xl md:text-4xl lg:text-[52px] font-semibold leading-tight tracking-wide drop-shadow-[0_4px_20px_rgba(0,0,0,0.35)] mb-4"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
        >
          {itinerary.title}
        </h1>

        <p
          className="text-sm md:text-base max-w-2xl text-white/90 leading-relaxed mb-5"
          style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
        >
          {itinerary.subtitle}
        </p>

        <p
          className="text-base md:text-lg font-medium tracking-wide text-white"
          style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
        >
          {itinerary.duration}
          <span className="mx-3 text-white/60">|</span>
          {shortRoute(itinerary.route)}
        </p>
      </div>
    </section>
  );
}
