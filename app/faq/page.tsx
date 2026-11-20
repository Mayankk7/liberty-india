import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Reveal from '../components/Reveal';
import { pageMetadata } from '../lib/seo';
import { FAQS } from './faqs';

export const metadata = pageMetadata('/faq/');

/** FAQPage structured data so answers can appear directly in search results. */
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navbar variant="white" />
      <main className="bg-white">
        {/* Spacer for fixed Navbar */}
        <div className="h-20 md:h-24" />

        <Reveal className="w-[90%] max-w-3xl mx-auto pt-6 md:pt-10 pb-8 md:pb-10 text-center">
          <p
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#E07B39] mb-3"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
          >
            Good to know
          </p>
          <h1
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-[#424242]"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Frequently Asked Questions
          </h1>
        </Reveal>

        <section className="w-[90%] max-w-3xl mx-auto pb-16 md:pb-24">
          <div className="border-t border-[#E9E4BF]">
            {FAQS.map((faq) => (
              // Native <details>: works without JavaScript and is keyboard accessible.
              <details key={faq.question} className="group border-b border-[#E9E4BF]">
                <summary className="flex items-center justify-between gap-6 py-5 md:py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <h2
                    className="text-lg md:text-xl font-semibold text-[#424242] leading-snug"
                    style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                  >
                    {faq.question}
                  </h2>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-2xl leading-none text-[#E07B39] transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p
                  className="pb-6 pr-8 text-sm md:text-[15px] text-[#424242] leading-loose"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
