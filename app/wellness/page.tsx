"use client";

import ImageWithLoader from '../components/ImageWithLoader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ItineraryCards from '../components/ItineraryCards';

export default function WellnessPage() {
  return (
    <main className="min-h-screen bg-white w-full overflow-x-hidden">
      {/* Navbar */}
      <Navbar variant="white" />

      {/* Hero Section */}
      <section className="relative w-full pt-0">
        <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
          <ImageWithLoader
            src="/images/heroes/wellness.jpg"
            alt="Wellness India Hero"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          {/* 20% opacity overlay */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl xl:text-7xl text-white font-semibold tracking-wide drop-shadow-lg"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              Wellness
            </h1>
          </div>
        </div>
      </section>

      {/* Wellness Title Section */}
      <section className="w-full py-6 md:py-12 lg:py-16 bg-[#FDF8E8]">
        <div className="w-full max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-[2.5rem] font-normal text-[#424242] leading-tight" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Ancient Healing, Modern Vitality
          </h2>
        </div>
      </section>

      {/* Wellness Image Grid with Text Card.
       * Mobile: photos stack into a continuous vertical backdrop (grid-rows-3)
       * with the white banner centred on top, framed by photo bands (container
       * py); desktop keeps the 3-up triptych + overlay card. */}
      <div className="w-full bg-[#FDF8E8] relative h-auto py-32 sm:py-40 md:py-0 md:h-[550px] lg:h-[650px] xl:h-[720px] mb-0">
        <div className="absolute inset-0 grid grid-cols-1 grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-0 w-full h-full">
          <div className="relative h-full w-full">
            <ImageWithLoader
              sizes="(max-width: 768px) 100vw, 33vw"
              src="https://ik.imagekit.io/libertyindia/about-india/wellness/picture-1.svg"
              alt="Wellness 1"
              fill
              className="object-cover object-center"
              priority={false}
            />
          </div>
          <div className="relative h-full w-full">
            <ImageWithLoader
              sizes="(max-width: 768px) 100vw, 33vw"
              src="https://ik.imagekit.io/libertyindia/about-india/wellness/picture-2.svg"
              alt="Wellness 2"
              fill
              className="object-cover object-center"
              priority={false}
            />
          </div>
          <div className="relative h-full w-full">
            <ImageWithLoader
              sizes="(max-width: 768px) 100vw, 33vw"
              src="https://ik.imagekit.io/libertyindia/about-india/wellness/picture-3.svg"
              alt="Wellness 3"
              fill
              className="object-cover object-center"
              priority={false}
            />
          </div>
        </div>
        {/* Text Card — banner on top of the vertical photo backdrop (mobile), overlay (desktop) */}
        <div className="relative md:absolute mx-4 md:mx-0 md:top-12 lg:top-16 md:left-8 lg:left-12 w-auto md:w-[42%] bg-white px-6 py-6 md:px-9 md:py-8 shadow-md text-left z-10">
          <p className="text-lg md:text-xl lg:text-[22px] text-[#424242] leading-loose" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            India gave the world Yoga and Ayurveda–sophisticated systems of wellness developed over millennia. These aren&apos;t trends; they&apos;re complete frameworks for living in harmony with natural rhythms, preventing disease, and optimising human potential.
          </p>
        </div>
      </div>

      <section className="w-full px-12 py-6 md:py-12 bg-[#FDF8E8] flex items-center justify-center mb-4 md:mb-8">
        <div className="w-full max-w-5xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#424242]" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Liberty India wellness journey combines ancient wisdom with modern comfort
          </h2>
        </div>
      </section>

       <div className="w-full max-w-5xl mx-auto text-center mb-12 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-6 font-bold text-[#424242]" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Ayurveda Retreat Experiences
          </h2>
          <p className="text-sm md:text-sm text-[#424242] mt-1 mb-8" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
            The ancient medical system that views each person as a unique constitution (dosha)
          </p>
        </div>

      {/* Ayurveda Retreat Experiences — five offering cards, image on top + text
          below (vertical), matching the Figma. Images served from ImageKit. */}
      <section className="relative w-full bg-white py-0 mb-6">
        <div className="w-[90%] max-w-7xl mx-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-0">
            {[
              {
                title: 'Ayurvedic Consultations',
                body: 'Individual assessment by experienced Ayurvedic practitioners',
                image: 'https://ik.imagekit.io/libertyindia/about-india/wellness/Ayurvedic%20Consultations.png',
              },
              {
                title: 'Customised Treatment Programs',
                body: 'Personalised therapies based on your constitution (Vata, Pitta, Kapha)',
                image: 'https://ik.imagekit.io/libertyindia/about-india/wellness/Customized%20Treatment%20Programs.png',
              },
              {
                title: 'Lifestyle Counselling',
                body: 'Adjustments to sleep, routine, and activities for optimal health',
                image: 'https://ik.imagekit.io/libertyindia/about-india/wellness/Lifestyle%20Counselling.png',
              },
              {
                title: 'Herbal Medicine',
                body: 'Study and use of India’s vast pharmacopoeia of herbs and minerals',
                image: 'https://ik.imagekit.io/libertyindia/about-india/wellness/Herbal%20Medicine.png',
              },
              {
                title: 'Diet & Nutrition',
                body: 'Ayurvedic dietary principles tailored to your constitution',
                image: 'https://ik.imagekit.io/libertyindia/about-india/wellness/Diet%20&%20Nutrition.png',
              },
            ].map((card) => (
              <li
                key={card.title}
                className="bg-white shadow-md lg:shadow-none overflow-hidden flex flex-col"
              >
                <div className="relative w-full h-72">
                  <ImageWithLoader
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className={`object-cover ${
                      ['Ayurvedic Consultations', 'Customised Treatment Programs', 'Lifestyle Counselling'].includes(card.title)
                        ? 'object-bottom'
                        : 'object-center'
                    }`}
                  />
                </div>
                <div className="p-5 flex-1">
                  <h3
                    className="text-lg font-bold text-[#424242] mb-2"
                    style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-[13px] md:text-sm text-[#424242] leading-relaxed"
                    style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                  >
                    {card.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Wellness Retreat Locations — vertical cards (image on top + compact info card)
          over a visible photo backdrop. Stacks 1-col on mobile, 3-col on desktop. */}
      <section className="relative w-full py-6 md:py-20 overflow-hidden">
        {/* Background image (now visible) + readability overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithLoader
            src="/images/heroes/wellness-locations.jpg"
            alt="Wellness Retreat Locations Background"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={false}
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative z-10 w-[90%] max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-14">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
              Wellness Retreat Locations
            </h2>
            <p className="text-sm md:text-sm text-white/90 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
              Specialized programs for specific health concerns (stress, insomnia, digestive issues, etc.)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Ananda Spa */}
            <div className="bg-white shadow-lg overflow-hidden flex flex-col">
              <div className="relative w-full h-[240px] sm:h-[320px] md:h-56">
                <ImageWithLoader src="https://ik.imagekit.io/libertyindia/about-india/wellness/ananda-spa.svg" alt="Ananda Spa" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center" />
              </div>
              <div className="p-5 flex-1">
                <h3 className="text-xl font-bold text-[#424242] mb-2" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Ananda Spa</h3>
                <p className="text-[13px] text-[#424242] leading-relaxed" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
                  Ananda in the Himalayas is one of the world’s most revered holistic wellness retreats. Set in a former palace estate amidst 100 acres of forest and gardens, it harmonises traditional <b>Ayurveda</b>, <b>yoga</b>, <b>Vedanta</b>, and meditation with global wellness.<br /><br />
                  <b>(Rishikesh)</b>
                </p>
              </div>
            </div>
            {/* Six Senses Vana */}
            <div className="bg-white shadow-lg overflow-hidden flex flex-col">
              <div className="relative w-full h-[240px] sm:h-[320px] md:h-56">
                <ImageWithLoader src="https://ik.imagekit.io/libertyindia/about-india/wellness/vana.svg" alt="Six Senses Vana" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center" />
              </div>
              <div className="p-5 flex-1">
                <h3 className="text-xl font-bold text-[#424242] mb-2" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>Six Senses Vana</h3>
                <p className="text-[13px] text-[#424242] leading-relaxed" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
                  <b>Six Senses Vana</b> in Dehradun is a luxury wellness retreat focused on personal transformation and holistic wellbeing. Rooted in <b>Ayurveda</b>, <b>yoga</b>, <b>Tibetan medicine (Sowa Rigpa)</b> and natural healing therapies, Vana provides bespoke wellness journeys crafted for each guest.<br /><br />
                  <b>(Dehradun)</b>
                </p>
              </div>
            </div>
            {/* SwaSwara Wellness */}
            <div className="bg-white shadow-lg overflow-hidden flex flex-col">
              <div className="relative w-full h-[240px] sm:h-[320px] md:h-56">
                <ImageWithLoader src="https://ik.imagekit.io/libertyindia/about-india/wellness/swa-swara.svg" alt="SwaSwara Wellness" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center" />
              </div>
              <div className="p-5 flex-1">
                <h3 className="text-xl font-bold text-[#424242] mb-2" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>SwaSwara Wellness</h3>
                <p className="text-[13px] text-[#424242] leading-relaxed" style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
                  <b>SwaSwara</b>, nestled on the iconic Om Beach in Gokarna, offers a soulful wellness escape harmonising nature, Ayurveda and yoga. Retreat encourages mindful living through nature walks, creative arts, conscious cuisine.<br /><br />
                  <b>(Karnataka)</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ItineraryCards
        heading={"Explore the Wellness.\nExperience the Journey."}
        subheading="Restore body and mind with Ayurvedic and yoga journeys designed for the wellness seeker."
        bgColor="#FDF39F4D"
        category="Wellness"
      />

      <Footer />
    </main>
  );
}
