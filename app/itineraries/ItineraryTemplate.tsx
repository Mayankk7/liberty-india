import type { Itinerary } from './itineraries';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from './template/HeroSection';
import TabStrip from './template/TabStrip';
import OverviewSection from './template/OverviewSection';
import SummarySection from './template/SummarySection';
import DaysSection from './template/DaysSection';
import DetailsSection from './template/DetailsSection';
import SignatureExperience from './template/SignatureExperience';
import RelatedItineraries from './template/RelatedItineraries';
import FloatingExpertButton from './template/FloatingExpertButton';

export default function ItineraryTemplate({ itinerary }: { itinerary: Itinerary }) {
  if (!itinerary) {
    return <div className="text-center py-20 text-2xl">Itinerary not found.</div>;
  }

  // Wellness retreats (e.g. the Kairali Ayurvedic village) are stay-based rather
  // than day-by-day, so we surface the Overview and skip the itinerary breakdown.
  // Gated on the PRIMARY category so multi-theme touring itineraries that merely
  // include "Wellness" among many tags keep their day-by-day plan.
  const hideDays = itinerary.categories[0] === 'Wellness';

  return (
    <main className="min-h-screen bg-white w-full overflow-x-clip">
      <Navbar variant="white" />
      <HeroSection itinerary={itinerary} />
      <TabStrip hideTabs={hideDays ? ['itinerary'] : []} />
      <OverviewSection itinerary={itinerary} />
      <SummarySection itinerary={itinerary} />
      {!hideDays && <DaysSection itinerary={itinerary} />}
      <DetailsSection itinerary={itinerary} />
      <SignatureExperience itinerary={itinerary} />
      <RelatedItineraries current={itinerary} />
      <Footer />
      <FloatingExpertButton itinerary={itinerary} />
    </main>
  );
}
