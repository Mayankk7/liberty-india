import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SectionOverview from '../../components/services/SectionOverview';
import ServiceHero from '../../components/services/ServiceHero';
import TaglineStrip from '../../components/services/TaglineStrip';
import ItineraryCards from '../../components/ItineraryCards';
import { getExploreItems, EXPLORE_HEADING, EXPLORE_BG } from '../../components/services/exploreItems';

const overviewImages = [
  'https://ik.imagekit.io/libertyindia/services/premium-leisure/p1.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/premium-leisure/p2.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/premium-leisure/p3.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/premium-leisure/p4.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/premium-leisure/p5.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/premium-leisure/p6.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/premium-leisure/p7.png?tr=w-1920,q-80,f-auto',
];

const overviewDescription =
  "At the heart of India lies a thousand different journeys—no two ever the same. As a premium leisure Destination Management Company, we specialise in crafting bespoke experiences that reflect the individuality of every traveller. From royal palaces and hidden retreats to immersive cultural encounters, each itinerary is thoughtfully curated with precision, discretion, and an uncompromising commitment to excellence. With us, India is not just a destination—it is a deeply personal journey.";

export default function PremiumLeisurePage() {
  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden">
      <Navbar variant="white" />
      <ServiceHero
        title="Premium Leisure"
        imageSrc="https://ik.imagekit.io/libertyindia/services/premium-leisure/leisure-bg.svg"
      />
      <TaglineStrip text="Luxury Journeys Crafted for You" />
      <SectionOverview images={overviewImages} description={overviewDescription} />
      <ItineraryCards
        heading={EXPLORE_HEADING}
        subheading="Signature luxury journeys, each tailored end to end for the discerning traveller."
        items={getExploreItems('premium-leisure')}
        bgColor={EXPLORE_BG}
      />
      <Footer />
    </main>
  );
}
