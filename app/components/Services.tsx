'use client';

import Image from 'next/image';

const services = [
  {
    id: 'incentive',
    title: 'Cruise Handling',
    subtitle: 'Journeys by Water',
    description: 'Effortless river and coastal cruise experiences.',
    image: '/images/services/cruise.svg',
  },
  {
    id: 'meetings',
    title: 'Meetings & Conferences',
    subtitle: 'Business Meets Inspiration',
    description: 'Seamless events in extraordinary settings.',
    image: '/images/services/meetings.svg',
  },
  {
    id: 'leisure',
    title: 'Premium Leisure',
    subtitle: 'Travel, Perfectly Personal',
    description: 'Bespoke journeys crafted entirely around you.',
    image: '/images/services/premium-leisure.svg',
  },
  {
    id: 'cruise',
    title: 'Incentive Programs',
    subtitle: 'Reward Through Experience',
    description: 'Transformational journeys that inspire and motivate.',
    image: '/images/services/incentive.svg',
  },
  {
    id: 'education',
    title: 'Education Tours',
    subtitle: 'Learning Beyond Classrooms',
    description: 'Immersive journeys that deepen understanding.',
    image: '/images/services/education-tours.svg',
  },
  {
    id: 'special',
    title: 'Special Interest Tours',
    subtitle: 'Travel with Purpose',
    description: 'Deep dives into passions, guided by experts.',
    image: '/images/services/special-interest.svg',
  },
  {
    id: 'sports',
    title: 'Sports Tourism',
    subtitle: 'Where Sport Meets Culture',
    description: 'Competitive, traditional, and adventure-led experiences.',
    image: '/images/services/sports-tourism.svg',
  },
  {
    id: 'events',
    title: 'Event Production & Content',
    subtitle: 'Stories, Brought to Life',
    description: 'On-ground execution and cinematic content creation.',
    image: '/images/services/event-prod.svg',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full bg-[#f8f5f0] py-12 md:py-14 lg:py-16"
      aria-labelledby="services-heading"
    >
      {/* Section Header */}
      <div className="text-center mb-10 md:mb-14 lg:mb-16 px-4">
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
      </div>

      {/* Services Grid - Masonry Layout */}
      <div className="max-w-[80%] mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section 1: Incentive (left ~30%) + Right column (Meetings top, Cruise/Premium bottom) */}
        <div className="flex flex-col md:flex-row gap-1.5 mb-1.5">
          {/* Incentive Programs - ~30% width, increased height */}
          <div className="md:w-[28%] group relative h-[500px] md:h-[700px] rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-1">
            <Image
              src={services[0].image}
              alt={services[0].title}
              fill
              sizes="(max-width: 768px) 100vw, 28vw"
              className="object-cover object-center w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-black/60" />
            <div className="absolute inset-0 flex flex-col justify-between items-center text-center p-5 md:p-6 pt-6 md:pt-8 pb-6 md:pb-8">
              <h3
                className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                {services[0].title}
              </h3>
              <div className="transition-transform duration-500 group-hover:-translate-y-1">
                <p
                  className="text-lg md:text-xl font-medium text-white mb-1 drop-shadow-md"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  {services[0].subtitle}
                </p>
                <p
                  className="text-sm md:text-base text-white/90 font-light leading-relaxed drop-shadow"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  {services[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Right column - ~72% width */}
          <div className="md:w-[72%] flex flex-col gap-1.5">
            {/* Meetings & Conferences - top */}
            <div className="group relative h-[280px] md:h-[350px] rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-1">
              <Image
                src={services[1].image}
                alt={services[1].title}
                fill
                sizes="(max-width: 768px) 100vw, 72vw"
                className="object-cover object-center w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-black/60" />
              <div className="absolute inset-0 flex flex-col justify-between items-center text-center p-5 md:p-6 pt-6 md:pt-8 pb-6 md:pb-8">
                <h3
                  className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  {services[1].title}
                </h3>
                <div className="transition-transform duration-500 group-hover:-translate-y-1">
                  <p
                    className="text-lg md:text-xl font-medium text-white mb-1 drop-shadow-md"
                    style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                  >
                    {services[1].subtitle}
                  </p>
                  <p
                    className="text-sm md:text-base text-white/90 font-light leading-relaxed drop-shadow"
                    style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                  >
                    {services[1].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Cruise + Premium Leisure - bottom row, side by side, taller to overlap Education */}
            <div className="flex gap-1.5">
              {/* Cruise Handling */}
              <div className="w-1/2 group relative h-[400px] md:h-[650px] rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-1">
                <Image
                  src={services[3].image}
                  alt={services[3].title}
                  fill
                  sizes="(max-width: 768px) 50vw, 36vw"
                  className="object-cover object-center w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-black/60" />
                <div className="absolute inset-0 flex flex-col justify-between items-center text-center p-4 md:p-5 pt-5 md:pt-6 pb-5 md:pb-6">
                  <h3
                    className="text-xl md:text-2xl font-semibold text-white drop-shadow-lg"
                    style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                  >
                    {services[3].title}
                  </h3>
                  <div className="transition-transform duration-500 group-hover:-translate-y-1">
                    <p
                      className="text-base md:text-lg font-medium text-white mb-1 drop-shadow-md"
                      style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                    >
                      {services[3].subtitle}
                    </p>
                    <p
                      className="text-xs md:text-sm text-white/90 font-light leading-relaxed drop-shadow"
                      style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                    >
                      {services[3].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Premium Leisure */}
              <div className="w-1/2 group relative h-[400px] md:h-[650px] rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-1">
                <Image
                  src={services[2].image}
                  alt={services[2].title}
                  fill
                  sizes="(max-width: 768px) 50vw, 36vw"
                  className="object-cover object-center w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-black/60" />
                <div className="absolute inset-0 flex flex-col justify-between items-center text-center p-4 md:p-5 pt-5 md:pt-6 pb-5 md:pb-6">
                  <h3
                    className="text-xl md:text-2xl font-semibold text-white drop-shadow-lg"
                    style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                  >
                    {services[2].title}
                  </h3>
                  <div className="transition-transform duration-500 group-hover:-translate-y-1">
                    <p
                      className="text-base md:text-lg font-medium text-white mb-1 drop-shadow-md"
                      style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                    >
                      {services[2].subtitle}
                    </p>
                    <p
                      className="text-xs md:text-sm text-white/90 font-light leading-relaxed drop-shadow"
                      style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                    >
                      {services[2].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Education (left ~30%) + Event Production (right ~72%, same height as Meetings) */}
        <div className="flex flex-col md:flex-row gap-1.5 mb-1.5 md:-mt-[300px]">
          {/* Education Tours - ~30% width, same height as Incentive */}
          <div className="md:w-[28%] group relative h-[500px] md:h-[700px] rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-1">
            <Image
              src={services[4].image}
              alt={services[4].title}
              fill
              sizes="(max-width: 768px) 100vw, 28vw"
              className="object-cover object-center w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-black/60" />
            <div className="absolute inset-0 flex flex-col justify-between items-center text-center p-5 md:p-6 pt-6 md:pt-8 pb-6 md:pb-8">
              <h3
                className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                {services[4].title}
              </h3>
              <div className="transition-transform duration-500 group-hover:-translate-y-1">
                <p
                  className="text-lg md:text-xl font-medium text-white mb-1 drop-shadow-md"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  {services[4].subtitle}
                </p>
                <p
                  className="text-sm md:text-base text-white/90 font-light leading-relaxed drop-shadow"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  {services[4].description}
                </p>
              </div>
            </div>
          </div>

          {/* Event Production - ~72% width, same height as Meetings */}
          <div className="md:w-[72%] group relative h-[280px] md:h-[400px] rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-1 md:self-end">
            <Image
              src={services[7].image}
              alt={services[7].title}
              fill
              sizes="(max-width: 768px) 100vw, 72vw"
              className="object-cover object-center w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-black/60" />
            <div className="absolute inset-0 flex flex-col justify-between items-center text-center p-5 md:p-6 pt-6 md:pt-8 pb-6 md:pb-8">
              <h3
                className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                {services[7].title}
              </h3>
              <div className="transition-transform duration-500 group-hover:-translate-y-1">
                <p
                  className="text-lg md:text-xl font-medium text-white mb-1 drop-shadow-md"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  {services[7].subtitle}
                </p>
                <p
                  className="text-sm md:text-base text-white/90 font-light leading-relaxed drop-shadow"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  {services[7].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Sports + Special Interest - horizontal 50/50 split */}
        <div className="flex flex-col md:flex-row gap-1.5">
          {/* Sports Tourism */}
          <div className="md:w-1/2 group relative h-[250px] md:h-[320px] rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-1">
            <Image
              src={services[6].image}
              alt={services[6].title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-black/60" />
            <div className="absolute inset-0 flex flex-col justify-between items-center text-center p-5 md:p-6 pt-6 md:pt-8 pb-6 md:pb-8">
              <h3
                className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                {services[6].title}
              </h3>
              <div className="transition-transform duration-500 group-hover:-translate-y-1">
                <p
                  className="text-lg md:text-xl font-medium text-white mb-1 drop-shadow-md"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  {services[6].subtitle}
                </p>
                <p
                  className="text-sm md:text-base text-white/90 font-light leading-relaxed drop-shadow"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  {services[6].description}
                </p>
              </div>
            </div>
          </div>

          {/* Special Interest Tours */}
          <div className="md:w-1/2 group relative h-[250px] md:h-[320px] rounded-lg overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-1">
            <Image
              src={services[5].image}
              alt={services[5].title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-black/60" />
            <div className="absolute inset-0 flex flex-col justify-between items-center text-center p-5 md:p-6 pt-6 md:pt-8 pb-6 md:pb-8">
              <h3
                className="text-2xl md:text-3xl font-semibold text-white drop-shadow-lg"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                {services[5].title}
              </h3>
              <div className="transition-transform duration-500 group-hover:-translate-y-1">
                <p
                  className="text-lg md:text-xl font-medium text-white mb-1 drop-shadow-md"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  {services[5].subtitle}
                </p>
                <p
                  className="text-sm md:text-base text-white/90 font-light leading-relaxed drop-shadow"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  {services[5].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
