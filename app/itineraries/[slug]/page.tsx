import type { Metadata } from 'next';
import { itineraries, Itinerary } from '../itineraries';
import ItineraryTemplate from '../ItineraryTemplate';
import { buildMetadata, toDescription } from '../../lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return itineraries.map((itinerary: Itinerary) => ({ slug: itinerary.slug }));
}

/** Each itinerary gets its own title, description and canonical URL. */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const itinerary = itineraries.find((i: Itinerary) => i.slug === slug);
  if (!itinerary) return { title: 'Itinerary not found | Liberty India', robots: { index: false } };
  return buildMetadata({
    title: `${itinerary.title} | ${itinerary.duration} India Itinerary | Liberty India`,
    description: toDescription(itinerary.subtitle || itinerary.overview[0] || itinerary.title),
    path: `/itineraries/${itinerary.slug}/`,
    image: itinerary.heroImage || undefined,
  });
}

export default async function ItineraryPage({ params }: Props) {
  const { slug } = await params;
  const itinerary = itineraries.find((i: Itinerary) => i.slug === slug);
  if (!itinerary) return <div className="text-center py-20 text-2xl">Itinerary not found.</div>;
  return <ItineraryTemplate itinerary={itinerary} />;
}
