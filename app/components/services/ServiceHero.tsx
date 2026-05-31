import ImageWithLoader from '../ImageWithLoader';
import Parallax from '../Parallax';

type ServiceHeroProps = {
  title: string;
  imageSrc: string;
  imageAlt?: string;
};

export default function ServiceHero({ title, imageSrc, imageAlt }: ServiceHeroProps) {
  return (
    <section className="relative w-full bg-[#FDF8E8] pt-0">
      <div className="relative w-full h-screen">
        <Parallax speed={0.25} className="absolute inset-0">
          <ImageWithLoader
            src={imageSrc}
            alt={imageAlt ?? `${title} hero`}
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
        </Parallax>
        <div className="absolute inset-0 bg-black" style={{ opacity: 0.2 }} />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-semibold tracking-wide drop-shadow-[0_4px_20px_rgba(0,0,0,0.2)] text-center px-4"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif', textShadow: '0 4px 20px rgba(0,0,0,0.2)' }}
          >
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
}
