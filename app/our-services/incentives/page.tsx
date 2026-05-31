import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SectionOverview from '../../components/services/SectionOverview';
import ServiceHero from '../../components/services/ServiceHero';
import TaglineStrip from '../../components/services/TaglineStrip';
import CustomizedPrograms from '../../components/services/CustomizedPrograms';

const overviewImages = [
  'https://ik.imagekit.io/libertyindia/services/incentive/p1.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/incentive/p2.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/incentive/p3.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/incentive/p4.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/incentive/p5.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/incentive/p6.png?tr=w-1920,q-80,f-auto',
];

const overviewDescription =
  "As a premier Destination Management Company in India, we design refined, high-impact experiences that go far beyond conventional rewards—think private escapes, curated cultural immersions, and seamless luxury at every touchpoint. Each program is meticulously tailored to reflect your brand’s stature while inspiring exceptional performance, deep loyalty, and lasting impressions. Transform achievement into an unforgettable journey of prestige and distinction.";

export default function IncentivesPage() {
  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden">
      <Navbar variant="white" />
      <ServiceHero
        title="Incentives"
        imageSrc="https://ik.imagekit.io/libertyindia/services/incentive/incentive-bg.svg"
      />
      <TaglineStrip text="Celebrating Excellence Through Transformations" />
      <SectionOverview images={overviewImages} description={overviewDescription} />
      <CustomizedPrograms imageSrc="https://ik.imagekit.io/libertyindia/services/incentive/programs.svg" />
      <Footer />
    </main>
  );
}
