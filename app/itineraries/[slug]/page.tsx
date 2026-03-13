import { itineraries, Itinerary } from '../itineraries';
import ItineraryTemplate from '../ItineraryTemplate';

interface Props {
  params: { slug: string };
}

export default async function ItineraryPage({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const itinerary = itineraries.find((i: Itinerary) => i.slug === slug);
  if (!itinerary) return <div className="text-center py-20 text-2xl">Itinerary not found.</div>;
  return <ItineraryTemplate itinerary={itinerary} />;
}
