import Image from 'next/image';

type CustomizedProgramsProps = {
  imageSrc: string;
  imageAlt?: string;
};

export default function CustomizedPrograms({ imageSrc, imageAlt }: CustomizedProgramsProps) {
  return (
    <section className="w-full flex flex-col md:flex-row items-stretch bg-[#FDF8E8] md:h-screen">
      {/* Left: Image */}
      <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-0 md:h-full">
        <Image
          src={imageSrc}
          alt={imageAlt ?? 'Customised Programs'}
          fill
          className="object-cover object-center"
          priority={false}
        />
      </div>

      {/* Right: Form column */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-16 md:px-8 md:py-20 lg:px-10">
        <div className="w-full max-w-md">
          {/* Eyebrow */}
          <p
            className="text-[11px] tracking-[0.34em] uppercase text-[#E07B39] mb-4 font-medium"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
          >
            Get in touch
          </p>

          {/* Heading */}
          <h2
            className="text-[30px] md:text-[36px] font-normal mb-4 text-[#424242] leading-[1.1]"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Customised Programs
          </h2>

          {/* Thin brand accent rule */}
          <div className="w-12 h-px bg-[#E07B39] mb-6" />

          {/* Lede */}
          <p className="text-[14.5px] text-[#424242]/70 mb-7 leading-relaxed">
            Share your brief and our team will design a tailored programme for your group.
          </p>

          <form className="space-y-5 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
              <div>
                <label
                  htmlFor="cp-name"
                  className="block text-[10px] uppercase tracking-[0.22em] text-[#424242]/60 mb-1.5"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  Full Name *
                </label>
                <input
                  id="cp-name"
                  type="text"
                  required
                  className="w-full bg-transparent border-0 border-b border-[#42424226] px-0 py-2 text-[14px] text-[#424242] focus:outline-none focus:border-[#E07B39] transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="cp-org"
                  className="block text-[10px] uppercase tracking-[0.22em] text-[#424242]/60 mb-1.5"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  Organization
                </label>
                <input
                  id="cp-org"
                  type="text"
                  className="w-full bg-transparent border-0 border-b border-[#42424226] px-0 py-2 text-[14px] text-[#424242] focus:outline-none focus:border-[#E07B39] transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="cp-email"
                  className="block text-[10px] uppercase tracking-[0.22em] text-[#424242]/60 mb-1.5"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  Email *
                </label>
                <input
                  id="cp-email"
                  type="email"
                  required
                  className="w-full bg-transparent border-0 border-b border-[#42424226] px-0 py-2 text-[14px] text-[#424242] focus:outline-none focus:border-[#E07B39] transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="cp-phone"
                  className="block text-[10px] uppercase tracking-[0.22em] text-[#424242]/60 mb-1.5"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  Phone
                </label>
                <input
                  id="cp-phone"
                  type="text"
                  className="w-full bg-transparent border-0 border-b border-[#42424226] px-0 py-2 text-[14px] text-[#424242] focus:outline-none focus:border-[#E07B39] transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="cp-plans"
                className="block text-[10px] uppercase tracking-[0.22em] text-[#424242]/60 mb-1.5"
                style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
              >
                Brief / requirements
              </label>
              <textarea
                id="cp-plans"
                className="w-full bg-transparent border-0 border-b border-[#42424226] px-0 py-2 text-[14px] text-[#424242] focus:outline-none focus:border-[#E07B39] transition-colors resize-none min-h-[80px]"
              />
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <label className="flex items-start gap-2 text-[12px] text-[#424242]/75 cursor-pointer leading-snug">
                <input type="checkbox" required className="accent-[#E07B39] mt-0.5 w-3.5 h-3.5 shrink-0" />
                <span>
                  I accept the{' '}
                  <a href="#" className="underline underline-offset-2 hover:text-[#E07B39]">
                    Privacy Policy
                  </a>
                  .
                </span>
              </label>
              <label className="flex items-start gap-2 text-[12px] text-[#424242]/75 cursor-pointer leading-snug">
                <input type="checkbox" className="accent-[#E07B39] mt-0.5 w-3.5 h-3.5 shrink-0" />
                <span>Send me updates from Liberty India.</span>
              </label>
            </div>

            <button
              type="submit"
              className="group inline-flex items-center gap-2.5 px-10 py-3.5 bg-[#E07B39] text-white text-[12px] tracking-[0.32em] uppercase font-medium hover:bg-[#c66a2f] focus:outline-none focus:ring-2 focus:ring-[#E07B39] focus:ring-offset-2 transition-all mt-2"
              style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
            >
              Send brief
              <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
