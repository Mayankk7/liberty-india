import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SectionOverview from '../../components/services/SectionOverview';
import ServiceHero from '../../components/services/ServiceHero';
import TaglineStrip from '../../components/services/TaglineStrip';
import ItineraryCards from '../../components/ItineraryCards';
import { getExploreItems, EXPLORE_BG } from '../../components/services/exploreItems';

const overviewImages = [
  'https://ik.imagekit.io/libertyindia/services/sports/p1.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/sports/p2.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/sports/p3.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/sports/p4.png?tr=w-1920,q-80,f-auto',
];

const overviewDescription =
  "Sports tourism in India blends the excitement of athletic experiences with meaningful cultural immersion, offering guests the opportunity to participate in or witness the country's vibrant and diverse sporting traditions. From the iconic Narendra Modi Stadium in Ahmedabad — the world's largest cricket stadium, seating over 132,000 spectators — to Himalayan treks, royal polo, and grassroots cricket, every journey connects world-class sport with the spirit of its destination.";

export default function SportsTourismPage() {
  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden">
      <Navbar variant="white" />
      <ServiceHero
        title="Sports Tourism"
        imageSrc="https://ik.imagekit.io/libertyindia/services/sports/sports-bg.png?updatedAt=1779259307588"
      />
      <TaglineStrip text="Where Sport Meets Culture" />
      <SectionOverview images={overviewImages} description={overviewDescription} />
      <ItineraryCards
        heading="Journeys to Pair With the Action"
        subheading="Adventure and cultural itineraries to extend any sporting visit to India."
        items={getExploreItems('sports')}
        bgColor={EXPLORE_BG}
      />
      <Footer />
    </main>
  );
}
