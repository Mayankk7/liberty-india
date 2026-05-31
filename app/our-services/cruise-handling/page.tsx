import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SectionOverview from '../../components/services/SectionOverview';
import ServiceHero from '../../components/services/ServiceHero';
import TaglineStrip from '../../components/services/TaglineStrip';
import ItineraryCards from '../../components/ItineraryCards';
import { getExploreItems, EXPLORE_HEADING, EXPLORE_SUBHEADING, EXPLORE_BG } from '../../components/services/exploreItems';

const overviewImages = [
  'https://ik.imagekit.io/libertyindia/services/cruise/p1.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/cruise/p2.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/cruise/p3.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/cruise/p4.png?tr=w-1920,q-80,f-auto',
];

const overviewDescription =
  "Our cruise handling services cover every aspect of port operations, ensuring seamless turnaround and exceptional guest experiences. From pre-arrival planning to on-ground execution, our experienced team manages port logistics, vessel clearance coordination, shore excursions, transportation, and guest services with precision and reliability.";

export default function CruiseHandlingPage() {
  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden">
      <Navbar variant="white" />
      <ServiceHero
        title="Cruise Handling"
        imageSrc="https://ik.imagekit.io/libertyindia/services/cruise/cruise-bg.jpg"
      />
      <TaglineStrip text="Seamless Integration of River & Coastal Voyages" />
      <SectionOverview images={overviewImages} description={overviewDescription} />
      <ItineraryCards
        heading={EXPLORE_HEADING}
        subheading={EXPLORE_SUBHEADING}
        items={getExploreItems('cruise')}
        bgColor={EXPLORE_BG}
      />
      <Footer />
    </main>
  );
}
