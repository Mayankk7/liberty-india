import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import AboutUs from './components/AboutUs';
import AboutIndia from './components/AboutIndia';
import Services from './components/Services';
import Journeys from './components/Journeys';
import Footer from './components/Footer';

import { pageMetadata } from './lib/seo';

export const metadata = pageMetadata('/');

export default function Home() {
  return (
    <main>
      <header className="relative">
        <Navbar />
        <HeroCarousel />
      </header>
      <AboutUs />
      <AboutIndia />
      <Services />
      <Journeys />
      <Footer />
    </main>
  );
}
