import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SectionOverview from '../../components/services/SectionOverview';
import ServiceHero from '../../components/services/ServiceHero';
import TaglineStrip from '../../components/services/TaglineStrip';
import ItineraryCards from '../../components/ItineraryCards';
import { getExploreItems, EXPLORE_HEADING, EXPLORE_SUBHEADING, EXPLORE_BG } from '../../components/services/exploreItems';

const overviewImages = [
  'https://ik.imagekit.io/libertyindia/services/education-tours/p1.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/education-tours/p2.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/education-tours/p3.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/education-tours/p4.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/education-tours/p5.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/education-tours/p6.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/education-tours/p7.png?tr=w-1920,q-80,f-auto',
];

const overviewDescription =
  "Education Tours combine rigorous learning with experiential discovery. They're designed for students, teachers and lifelong learners seeking to understand India beyond textbooks.";

export default function EducationToursPage() {
  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden">
      <Navbar variant="white" />
      <ServiceHero
        title="Education Tours"
        imageSrc="https://ik.imagekit.io/libertyindia/services/education-tours/education-bg.svg"
      />
      <TaglineStrip text="Learning Journeys That Transform Understanding" />
      <SectionOverview images={overviewImages} description={overviewDescription} />
      <ItineraryCards
        heading={EXPLORE_HEADING}
        subheading={EXPLORE_SUBHEADING}
        items={getExploreItems('education-tours')}
        bgColor={EXPLORE_BG}
      />
      <Footer />
    </main>
  );
}
