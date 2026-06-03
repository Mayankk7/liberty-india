'use client';

import ImageWithLoader from './ImageWithLoader';
import { useRouter } from 'next/navigation';
import Reveal from './Reveal';

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  href: string;
}

const services: Service[] = [
  {
    id: 'cruise-handling',
    title: 'Cruise Handling',
    subtitle: 'Journeys by Water',
    description: 'Effortless river and coastal cruise experiences.',
    image: 'https://ik.imagekit.io/libertyindia/services/cruise.jpg?updatedAt=1779235200000',
    href: '/our-services/cruise-handling',
  },
  {
    id: 'meetings',
    title: 'Meetings & Conferences',
    subtitle: 'Business Meets Inspiration',
    description: 'Seamless events in extraordinary settings.',
    image: 'https://ik.imagekit.io/libertyindia/services/meetings.svg',
    href: '/our-services/meetings-conferences',
  },
  {
    id: 'premium-leisure',
    title: 'Premium Leisure',
    subtitle: 'Travel, Perfectly Personal',
    description: 'Bespoke journeys crafted entirely around you.',
    image: 'https://ik.imagekit.io/libertyindia/services/premium-leisure.svg',
    href: '/our-services/premium-leisure',
  },
  {
    id: 'incentives',
    title: 'Incentives',
    subtitle: 'Reward Through Experience',
    description: 'Transformational journeys that inspire and motivate.',
    image: 'https://ik.imagekit.io/libertyindia/services/incentive.svg',
    href: '/our-services/incentives',
  },
  {
    id: 'education-tours',
    title: 'Education Tours',
    subtitle: 'Learning Beyond Classrooms',
    description: 'Immersive journeys that deepen understanding.',
    image: 'https://ik.imagekit.io/libertyindia/services/education-tours.svg',
    href: '/our-services/education-tours',
  },
  {
    id: 'special-interest',
    title: 'Special Interest Tours',
    subtitle: 'Travel with Purpose',
    description: 'Deep dives into passions, guided by experts.',
    image: 'https://ik.imagekit.io/libertyindia/services/special-interest.svg',
    href: '/our-services/special-interest',
  },
  {
    id: 'sports-tourism',
    title: 'Sports Tourism',
    subtitle: 'Where Sport Meets Culture',
    description: 'Competitive, traditional, and adventure-led experiences.',
    image: 'https://ik.imagekit.io/libertyindia/services/sports-tourism.svg?updatedAt=1779235200000',
    href: '/our-services/sports-tourism',
  },
];

// Lookup by id keeps the Figma-driven layout readable and route-safe.
const byId = (id: string) => services.find((s) => s.id === id) as Service;

function ServiceCard({
  service,
  size = 'md',
  className = '',
}: {
  service: Service;
  size?: 'lg' | 'md' | 'sm';
  className?: string;
}) {
  const titleClass =
    size === 'lg'
      ? 'text-xl sm:text-2xl md:text-4xl'
      : size === 'sm'
        ? 'text-base md:text-xl'
        : 'text-base sm:text-lg md:text-2xl';
  const subtitleClass = size === 'sm' ? 'text-xs md:text-base' : 'text-[13px] sm:text-sm md:text-lg';
  const descClass = size === 'sm' ? 'text-[11px] md:text-sm' : 'text-[12px] sm:text-sm md:text-base';

  const router = useRouter();
  const go = () => {
    router.push(service.href);
  };

  return (
    <div
      className={`group relative rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-1 ${className}`}
      onClick={go}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          go();
        }
      }}
      aria-label={service.title}
    >
      <ImageWithLoader
        src={service.image}
        alt={service.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-center w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-black/60" />
      <div className="absolute inset-0 flex flex-col justify-between items-center text-center p-5 md:p-6 pt-6 md:pt-8 pb-6 md:pb-8">
        <h3
          className={`${titleClass} font-semibold text-white drop-shadow-lg`}
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
        >
          {service.title}
        </h3>
        <div className="transition-transform duration-500 group-hover:-translate-y-1">
          <p
            className={`${subtitleClass} font-medium text-white mb-1 drop-shadow-md`}
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            {service.subtitle}
          </p>
          <p
            className={`${descClass} text-white/90 font-light leading-relaxed drop-shadow`}
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
          >
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="w-full bg-white"
      aria-labelledby="services-heading"
    >
      {/* Section Header — on the section's cream band */}
      <div className="w-full bg-[#fdf8e8] py-12 md:py-14 lg:py-16">
        <Reveal className="text-center px-4">
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            How do you want to travel?
          </h2>
          <p
            className="text-base md:text-lg text-gray-600"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
          >
            End-to-end expertise across leisure, business, and experiential travel.
          </p>
        </Reveal>
      </div>

      {/* Core Expertise label — on white */}
      <Reveal className="text-center pt-12 md:pt-16 mb-8 md:mb-12 px-4">
        <h3
          className="text-2xl md:text-3xl font-semibold text-gray-900"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
        >
          Our Core Expertise
        </h3>
      </Reveal>

      {/* Services Grid (Figma layout: 1 wide / 3 / 4) — on white */}
      <div className="w-[88%] max-w-7xl mx-auto flex flex-col gap-2 pb-14 md:pb-20">
        {/* Wide: Meetings & Conferences */}
        <Reveal>
          <ServiceCard
            service={byId('meetings')}
            size="lg"
            className="h-[280px] md:h-[400px]"
          />
        </Reveal>

        {/* Row of 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <Reveal><ServiceCard service={byId('premium-leisure')} size="md" className="h-[360px] md:h-[460px]" /></Reveal>
          <Reveal delay={80}><ServiceCard service={byId('incentives')} size="md" className="h-[360px] md:h-[460px]" /></Reveal>
          <Reveal delay={160}><ServiceCard service={byId('special-interest')} size="md" className="h-[360px] md:h-[460px]" /></Reveal>
        </div>

        {/* Row of 3 — equal height to the row above. (Event Production &
            Content is intentionally omitted until its page exists.) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <Reveal><ServiceCard service={byId('sports-tourism')} size="md" className="h-[360px] md:h-[460px]" /></Reveal>
          <Reveal delay={80}><ServiceCard service={byId('education-tours')} size="md" className="h-[360px] md:h-[460px]" /></Reveal>
          <Reveal delay={160}><ServiceCard service={byId('cruise-handling')} size="md" className="h-[360px] md:h-[460px]" /></Reveal>
        </div>
      </div>
    </section>
  );
}
