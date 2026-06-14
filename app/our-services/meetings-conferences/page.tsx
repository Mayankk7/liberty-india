import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SectionOverview from '../../components/services/SectionOverview';
import ServiceHero from '../../components/services/ServiceHero';
import TaglineStrip from '../../components/services/TaglineStrip';
import CustomizedPrograms from '../../components/services/CustomizedPrograms';

const overviewImages = [
  'https://ik.imagekit.io/libertyindia/services/meetings/p1.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/meetings/p2.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/meetings/p3.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/meetings/p4.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/meetings/p5.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/meetings/p6.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/meetings/p7.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/meetings/p8.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/meetings/p9.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/meetings/p10.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/meetings/p11.png?tr=w-1920,q-80,f-auto',
  'https://ik.imagekit.io/libertyindia/services/meetings/p12.png?tr=w-1920,q-80,f-auto',
];

const overviewDescription =
  "MICE (Meetings, Incentives, Conferences, Exhibitions) travel combines business requirements with transformational experiences. It's about facilitating productive meetings while creating an environment where attendees can connect, learn, and be inspired.";

export default function MeetingsConferencesPage() {
  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden">
      <Navbar variant="white" />
      <ServiceHero
        title="Meetings & Conferences"
        imageSrc="https://ik.imagekit.io/libertyindia/services/meetings/meetings-bg.png"
      />
      <TaglineStrip text="Business Meets Inspiration" />
      <SectionOverview images={overviewImages} description={overviewDescription} />
      <CustomizedPrograms imageSrc="https://ik.imagekit.io/libertyindia/services/meetings/programs.png?tr=w-1600&updatedAt=1779259783246" />
      <Footer />
    </main>
  );
}
