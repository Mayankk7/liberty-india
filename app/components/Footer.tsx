'use client';

import Image from 'next/image';
import { useState } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about-us' },
  { label: 'About India', href: '/#about-india' },
  { label: 'Journeys', href: '/journeys' },
  { label: 'Our Services', href: '/#services' },
  { label: 'Contact Us', href: '/#contact' },
];

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    purpose: '',
    agree: false,
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '', purpose: '', agree: false });
        return;
      }

      const data = await res.json().catch(() => ({}));
      if (data.errors) {
        const first = Object.values(data.errors)[0] as string;
        setErrorMsg(first || 'Please check the form and try again.');
      } else {
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
      setStatus('error');
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  return (
    <footer id="contact" className="bg-[#2d2d2d] text-white">
      {/* Contact Section with Footer-1 Background Image — content drives height, image fills behind it */}
      <div className="relative w-full overflow-hidden">
        {/* Background Image - local cleaned copy (monument vector stripped) */}
        <Image
          src="/footer-1.svg"
          alt="Misty mountain landscape"
          fill
          className="object-cover object-center origin-left scale-x-[1.03] -z-0 select-none pointer-events-none"
          sizes="100vw"
          priority
        />

        {/* Readability gradient — darker on the left where the copy sits */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10 pointer-events-none" />

        {/* Content — defines the section height (no longer absolutely positioned) */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-28 flex items-center min-h-[600px] md:min-h-[640px] lg:min-h-[700px]">
          <div className="mx-auto w-full max-w-7xl">
            <div className="flex flex-col lg:flex-row flex-wrap lg:flex-nowrap gap-10 lg:gap-16 items-center lg:items-start justify-between">
              {/* Left Text */}
              <div className="w-full lg:w-[52%] min-w-0 max-w-2xl">
                <Image
                  src="https://ik.imagekit.io/libertyindia/hero-section/logo.svg"
                  alt="Liberty India"
                  width={150}
                  height={150}
                  className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain mb-5 md:mb-6"
                />
                <p
                  className="text-xs sm:text-sm md:text-base font-semibold uppercase tracking-[0.22em] text-[#E07B39] mb-3"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  Contact us today
                </p>
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-white mb-4 leading-[1.15]"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  We build the ground programme behind yours
                </h2>
                <p
                  className="text-sm sm:text-base md:text-lg text-white/85 font-light leading-relaxed max-w-md"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  Tell us what your clients or delegates need, and we&apos;ll handle India end to end.
                </p>
              </div>

              {/* Right Form — matches the site's white-card-on-photo pattern
                 (heritage ImageTextOverlay caption, SectionOverview floating
                 card): solid white, sharp/minimal corners, modest shadow,
                 Big Caslon serif heading. Thin brand-orange top accent gives
                 it a branded edge without ornament. */}
              {status === 'success' ? (
                <div
                  className="w-full lg:w-[48%] max-w-xl min-w-0 bg-black/50 backdrop-blur-md shadow-2xl shadow-black/50 ring-1 ring-white/10 border-t-2 border-[#E07B39] p-9 md:p-11 text-center"
                  role="status"
                  aria-live="polite"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#E07B39]/15">
                    <svg className="h-7 w-7 text-[#E07B39]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3
                    className="text-xl md:text-2xl font-semibold text-[#f5efe0] mb-2 leading-tight"
                    style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                  >
                    Thank you — we&apos;ve received your enquiry
                  </h3>
                  <p
                    className="text-sm text-[#a0a09c] mb-6 leading-relaxed"
                    style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                  >
                    One of our travel experts will be in touch with you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#E07B39] hover:gap-2.5 transition-all cursor-pointer"
                    style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                  >
                    Send another enquiry
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="w-full lg:w-[48%] max-w-xl min-w-0 flex flex-col gap-3.5 bg-black/50 backdrop-blur-md shadow-2xl shadow-black/50 ring-1 ring-white/10 border-t-2 border-[#E07B39] p-7 md:p-9"
                  noValidate
                >
                  {/* Heading — eyebrow + serif headline matches the
                       "Contact us today / We build the ground programme behind yours"
                       pattern on the left side of this section */}
                  <div className="mb-2">
                    <p
                      className="text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E07B39] mb-2"
                      style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                    >
                      Request a proposal
                    </p>
                    <h3
                      className="text-xl md:text-[26px] font-semibold text-[#f5efe0] leading-tight"
                      style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                    >
                      Tell us about your programme
                    </h3>
                  </div>

                  {status === 'error' && (
                    <p
                      className="bg-red-950/40 border border-red-500/30 px-3.5 py-2.5 text-[13px] text-red-300"
                      role="alert"
                      style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                    >
                      {errorMsg}
                    </p>
                  )}

                  {/* Name / Phone / Email */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5">
                    <input
                      type="text"
                      placeholder="Name"
                      aria-label="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 md:px-3.5 md:py-2.5 bg-[#252525] border border-[#3a3a3a] text-[#f0ebe0] placeholder:text-[#7a766f] text-[14px] focus:outline-none focus:border-[#E07B39] focus:ring-2 focus:ring-[#E07B39]/25 transition-colors"
                      style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                    />
                    <input
                      type="tel"
                      placeholder="Phone"
                      aria-label="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 md:px-3.5 md:py-2.5 bg-[#252525] border border-[#3a3a3a] text-[#f0ebe0] placeholder:text-[#7a766f] text-[14px] focus:outline-none focus:border-[#E07B39] focus:ring-2 focus:ring-[#E07B39]/25 transition-colors"
                      style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      aria-label="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 md:px-3.5 md:py-2.5 bg-[#252525] border border-[#3a3a3a] text-[#f0ebe0] placeholder:text-[#7a766f] text-[14px] focus:outline-none focus:border-[#E07B39] focus:ring-2 focus:ring-[#E07B39]/25 transition-colors"
                      style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                    />
                  </div>

                  {/* Purpose */}
                  <select
                    value={formData.purpose}
                    aria-label="Purpose of enquiry"
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    className={`w-full px-3.5 py-2.5 bg-[#252525] border border-[#3a3a3a] text-[14px] focus:outline-none focus:border-[#E07B39] focus:ring-2 focus:ring-[#E07B39]/25 transition-colors appearance-none cursor-pointer ${
                      formData.purpose ? 'text-[#f0ebe0]' : 'text-[#7a766f]'
                    }`}
                    style={{
                      fontFamily: 'var(--font-merriweather), Georgia, serif',
                      backgroundImage:
                        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23a0a09c' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")",
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right 0.9rem center',
                      paddingRight: '2.5rem',
                    }}
                  >
                    <option value="" disabled>Select purpose</option>
                    <option value="cruise-handling">Cruise Handling</option>
                    <option value="meetings-conferences">Meetings &amp; Conferences</option>
                    <option value="premium-leisure">Premium Leisure</option>
                    <option value="incentive-programs">Incentives</option>
                    <option value="education-tours">Education Tours</option>
                    <option value="special-interest-tours">Special Interest Tours</option>
                    <option value="sports-tourism">Sports Tourism</option>
                  </select>

                  {/* Message */}
                  <textarea
                    placeholder="Your message (optional)"
                    aria-label="Your message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={2}
                    className="w-full px-3.5 py-2.5 bg-[#252525] border border-[#3a3a3a] text-[#f0ebe0] placeholder:text-[#7a766f] text-[14px] focus:outline-none focus:border-[#E07B39] focus:ring-2 focus:ring-[#E07B39]/25 transition-colors resize-none"
                    style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                  />

                  {/* Checkbox */}
                  <label className="flex items-start gap-2 text-[11px] text-[#a0a09c] leading-snug cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agree}
                      onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                      className="accent-[#E07B39] mt-0.5 h-3.5 w-3.5 shrink-0 cursor-pointer"
                    />
                    <span style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
                      I agree to receive updates from Liberty India per the privacy policy.
                    </span>
                  </label>

                  {/* Submit — pill matches site CTA pattern */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="group w-full mt-1 py-3.5 bg-[#2a2a2a] hover:bg-[#1a1a1a] border border-[#E07B39] hover:border-[#d56a25] disabled:opacity-60 disabled:cursor-not-allowed text-[#FDF39F] text-[14px] md:text-[15px] font-semibold rounded-none shadow-[0_10px_28px_-8px_rgba(0,0,0,0.45)] hover:shadow-[0_14px_36px_-8px_rgba(0,0,0,0.55)] transition-all duration-300 hover:scale-[1.01] cursor-pointer flex items-center justify-center gap-2"
                    style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                  >
                    {status === 'submitting' && (
                      <svg className="h-4 w-4 animate-spin text-[#FDF39F]" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                    )}
                    <span>{status === 'submitting' ? 'Sending…' : 'Request a proposal'}</span>
                    {status !== 'submitting' && (
                      <span
                        aria-hidden="true"
                        className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer with Footer-2 as Full Background */}
      <div className="relative overflow-hidden mt-10 md:mt-0">
        {/* Footer-2 Background Image - Full Complete Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://ik.imagekit.io/libertyindia/hero-section/footer-2.png"
            alt="City skyline silhouette"
            fill
            className="object-cover object-bottom w-full h-full"
            sizes="100vw"
          />
          {/* Dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-[#2d2d2d]/85" />
        </div>

        <div className="relative z-10 w-[90vw] max-w-7xl mx-auto pt-14 md:pt-20 pb-8 md:pb-10">
          {/* 4-column layout — Brand / Explore / Our Services / Contact.
             grid-cols-12 with span 4/2/3/3 = 12 fills the full width so
             the right side no longer goes dead at desktop. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-8 lg:gap-x-10 pb-10 md:pb-12 border-b border-white/12">
            {/* Col 1 — Brand: logo, tagline, social */}
            <div className="sm:col-span-2 lg:col-span-4 lg:pr-6">
              <div className="flex items-center gap-3 mb-5">
                <Image
                  src="https://ik.imagekit.io/libertyindia/hero-section/logo-footer.svg"
                  alt="Liberty India Logo"
                  width={70}
                  height={70}
                  className="w-12 h-12 md:w-14 md:h-14"
                />
                <h3
                  className="text-white text-lg md:text-xl font-semibold tracking-[0.1em]"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  LIBERTY INDIA
                </h3>
              </div>
              <p
                className="text-white/80 text-[15px] md:text-base leading-relaxed italic mb-3 max-w-sm"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Where Ancient Wisdom Meets Modern Luxury.
              </p>
              <p
                className="text-white/55 text-[12px] md:text-[13px] leading-relaxed max-w-sm mb-6"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                India&apos;s destination management partner for MICE, luxury
                leisure, and curated journeys across the subcontinent.
              </p>
              {/* Social icons — placeholder "#" hrefs for now.
                 TODO: replace "#" with the live Instagram / Facebook / LinkedIn
                 profile URLs when the client supplies them. */}
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Col 2 — Explore */}
            <div className="lg:col-span-2">
              <h4
                className="text-white font-semibold text-[11px] mb-5 uppercase tracking-[0.18em]"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Explore
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/65 text-[13px] hover:text-white hover:translate-x-0.5 inline-block transition-all duration-200"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 — Our Services */}
            <div className="lg:col-span-3">
              <h4
                className="text-white font-semibold text-[11px] mb-5 uppercase tracking-[0.18em]"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Our Services
              </h4>
              <ul className="space-y-3">
                {[
                  { label: 'Meetings & Conferences', href: '/our-services/meetings-conferences' },
                  { label: 'Incentives', href: '/our-services/incentives' },
                  { label: 'Premium Leisure', href: '/our-services/premium-leisure' },
                  { label: 'Cruise Handling', href: '/our-services/cruise-handling' },
                  { label: 'Special Interest Tours', href: '/our-services/special-interest' },
                  { label: 'Sports Tourism', href: '/our-services/sports-tourism' },
                  { label: 'Education Tours', href: '/our-services/education-tours' },
                ].map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      className="text-white/65 text-[13px] hover:text-white hover:translate-x-0.5 inline-block transition-all duration-200"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 — Contact */}
            <div className="lg:col-span-3">
              <h4
                className="text-white font-semibold text-[11px] mb-5 uppercase tracking-[0.18em]"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Get in Touch
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#E07B39] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                  </svg>
                  <p
                    className="text-white/65 text-[13px] leading-relaxed"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    105, Complex, Sushant Lok Rd, Sector 28A, Sushant Lok Phase 1, Gurugram, Haryana 122001
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#E07B39] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                  </svg>
                  <a
                    href="mailto:India@liberty-int.com"
                    className="text-white/65 text-[13px] hover:text-white transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    India@liberty-int.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#E07B39] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
                  </svg>
                  <a
                    href="tel:+919811116747"
                    className="text-white/65 text-[13px] hover:text-white transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    +91 9811116747
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar — Zarah AI centered prominently, copyright beneath */}
          <div className="mt-8 md:mt-10 flex flex-col items-center gap-3 text-center">
            <div className="flex items-center gap-2.5">
              <Image
                src="/zarah-ai-logo.svg"
                alt="Zarah AI"
                width={512}
                height={345}
                className="h-10 md:h-12 w-auto object-contain"
              />
              <p
                className="text-white/70 text-[12px] md:text-sm tracking-wide"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Powered by Zarah AI
              </p>
            </div>
            <p
              className="text-white/45 text-[11px] md:text-[12px] tracking-wide"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              © {new Date().getFullYear()} Liberty India. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
