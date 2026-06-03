import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SectionOverview from '../../components/services/SectionOverview';
import ServiceHero from '../../components/services/ServiceHero';
import TaglineStrip from '../../components/services/TaglineStrip';
import ItineraryCards from '../../components/ItineraryCards';
import { getExploreItems, EXPLORE_HEADING, EXPLORE_BG } from '../../components/services/exploreItems';

const overviewImages = [
  'https://ik.imagekit.io/libertyindia/services/special-interest/p1.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/special-interest/p2.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/special-interest/p3.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/special-interest/p4.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/special-interest/p5.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/special-interest/p6.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/special-interest/p7.png?tr=w-1920,q-80,f-auto',
];

const overviewDescription =
  "For those who wish to explore India with purpose and depth, our Special Interest Tours offer a more immersive and soul-awakening journey of a lifetime. Built around individual passions, these journeys go beyond sightseeing — inviting you into the heart of India's culture, traditions, and landscapes. From private culinary trails and sacred pilgrimages to yogic retreats and textile explorations, every experience is expert-led, authentic, and crafted with seamless attention to detail.";

export default function SpecialInterestPage() {
  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden">
      <Navbar variant="white" />
      <ServiceHero
        title="Special Interest Tours"
        imageSrc="https://ik.imagekit.io/libertyindia/services/special-interest/special-bg.png?updatedAt=1779259580113"
      />
      <TaglineStrip text="Deep Dives Into Your Passions" />
      <SectionOverview images={overviewImages} description={overviewDescription} />
      <ItineraryCards
        heading={EXPLORE_HEADING}
        subheading="Passion-led journeys — wellness, wildlife, cuisine and culture, explored in depth."
        items={getExploreItems('special-interest')}
        bgColor={EXPLORE_BG}
      />
      <Footer />
    </main>
  );
}
