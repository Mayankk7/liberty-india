import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Contact Us | Liberty India',
  description:
    "Request a proposal from Liberty India — India's destination management partner for MICE, luxury leisure and curated journeys. Tell us about your programme and our team will handle India end to end.",
};

/**
 * /contact-us renders the full site chrome and routes the visitor straight to
 * the working enquiry form, which lives in the Footer (`id="contact"`, wired to
 * /api/contact). The top-nav and footer "Contact Us" links both point to
 * /#contact, so this page exists mainly for direct hits and SEO — it must not be
 * a dead stub.
 */
export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar variant="white" />

      {/* Intro band above the contact form */}
      <section className="w-full bg-[#FDF8E8] pt-28 md:pt-32 pb-12 md:pb-16">
        <div className="w-[90%] max-w-3xl mx-auto text-center">
          <p
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-[#E07B39] mb-3"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
          >
            Contact us today
          </p>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#424242] mb-4 leading-[1.15]"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Let&apos;s build your next India programme
          </h1>
          <p
            className="text-sm md:text-base text-[#424242]/80 leading-relaxed max-w-xl mx-auto"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
          >
            Tell us what your clients or delegates need, and our team will handle
            India end to end. Share your brief using the form below and a Liberty
            India specialist will respond with a tailored proposal.
          </p>
        </div>
      </section>

      {/* Footer carries the working enquiry form (id="contact") + site footer */}
      <Footer />
    </main>
  );
}
