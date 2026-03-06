'use client';

import Image from 'next/image';
import { useState } from 'react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About us', href: '#about-us' },
  { label: 'About India', href: '#about-india' },
  { label: 'Tours', href: '#journeys' },
  { label: 'Services', href: '#services' },
  { label: 'Blog', href: '#blog' },
];

const supportLinks = [
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact us', href: '#contact' },
  { label: 'Terms & Conditions', href: '#terms' },
  { label: 'Privacy Policy', href: '#privacy' },
];

const legalLinks = [
  { label: 'Data Processing Addendum', href: '#data' },
  { label: 'T&C Purchase and Sale of Incoming', href: '#tc-purchase' },
  { label: 'Legal Notice', href: '#legal' },
  { label: 'Suppliers Code Of Conduct', href: '#suppliers' },
];

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <footer id="contact" className="w-full">
      {/* Contact Section with Footer-1 Background Image - Full Width, No Magnification */}
      <div className="relative w-full">
        {/* Background Image - As-is, no cropping */}
        <Image
          src="/images/hero-section/footer-1.svg"
          alt="Misty mountain landscape"
          width={1920}
          height={600}
          className="w-full h-auto"
          sizes="100vw"
          priority
        />

        {/* Decorative Icon */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
          <Image
            src="/images/about-us/top-section-img.svg"
            alt="India monuments"
            width={100}
            height={50}
            className="w-20 md:w-28 h-auto opacity-80"
          />
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="w-[90%] mx-auto">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center justify-between">
              {/* Left Text */}
              <div className="lg:w-[60%]">
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4 leading-snug"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  We organize the stay of your dreams
                </h2>
                <p
                  className="text-lg md:text-xl text-white/90 font-semibold mb-3"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Contact us today
                </p>
                <p
                  className="text-base md:text-lg text-white/80 font-light leading-relaxed"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  We are here to turn your travel dream into an extraordinary reality.
                </p>
              </div>

              {/* Right Form */}
              <form onSubmit={handleSubmit} className="lg:w-[40%] flex flex-col gap-4 w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="px-4 py-3 bg-transparent border border-gray-800 rounded text-gray-900 placeholder-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#E07B39]"
                    style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="px-4 py-3 bg-transparent border border-gray-800 rounded text-gray-900 placeholder-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#E07B39]"
                    style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="px-4 py-3 bg-transparent border border-gray-800 rounded text-gray-900 placeholder-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-[#E07B39]"
                    style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gray-900 hover:bg-gray-800 text-[#E07B39] text-base font-medium rounded-md transition-colors duration-300 cursor-pointer"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  Speak to an Expert
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer with Footer-2 as Full Background */}
      <div className="relative overflow-hidden">
        {/* Footer-2 Background Image - Full Complete Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-section/footer-2.svg"
            alt="City skyline silhouette"
            fill
            className="object-cover object-bottom w-full h-full"
            sizes="100vw"
          />
          {/* Dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-[#2d2d2d]/85" />
        </div>

        <div className="relative z-10 w-[90%] mx-auto pt-20 md:pt-28 pb-20 md:pb-28">
          {/* Top Section: Logo & Social */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 md:mb-20">
            {/* Logo */}
            <div className="flex items-center gap-5">
              <Image
                src="/images/hero-section/logo-footer.svg"
                alt="Liberty India Logo"
                width={70}
                height={70}
                className="w-16 h-16 md:w-18 md:h-18"
              />
              <div>
                <h3
                  className="text-white text-lg md:text-xl font-semibold tracking-wide border-b border-white pb-1"
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                >
                  LIBERTY INDIA
                </h3>
                {/* Social Icons */}
                <div className="flex items-center gap-4 mt-3">
                  <a href="#" aria-label="Instagram" className="text-white/70 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="Facebook" className="text-white/70 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="LinkedIn" className="text-white/70 hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 md:gap-10">
            {/* Contact Us */}
            <div>
              <h4
                className="text-white font-semibold text-sm mb-6 uppercase tracking-wide"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Contact Us
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#E07B39] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
                  </svg>
                  <p
                    className="text-white/70 text-xs leading-relaxed"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    ADDRESS: 105, Complex, Sushant Lok Rd, Sector 28A, Sushant Lok Phase 1, Gurugram, Haryana 122001
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#E07B39] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                  </svg>
                  <a
                    href="mailto:India@liberty-int.com"
                    className="text-white/70 text-xs hover:text-white transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    India@liberty-int.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#E07B39] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z"/>
                  </svg>
                  <a
                    href="tel:+919811116747"
                    className="text-white/70 text-xs hover:text-white transition-colors"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    +91 9811116747
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links, Support Links, Legal Links - All in same row */}
            <div>
              <h4
                className="text-white font-semibold text-sm mb-6 uppercase tracking-wide"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 text-xs hover:text-white transition-colors"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                className="text-white font-semibold text-sm mb-6 uppercase tracking-wide"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Support
              </h4>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 text-xs hover:text-white transition-colors"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                className="text-white font-semibold text-sm mb-6 uppercase tracking-wide"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Legal
              </h4>
              <ul className="space-y-3">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/70 text-xs hover:text-white transition-colors"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
