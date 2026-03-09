'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about-us' },
  { label: 'About India', href: '/#about-india', hasDropdown: true },
  { label: 'Our Services', href: '/#services', hasDropdown: true },
  { label: 'Journeys', href: '/#journeys' },
  { label: 'Contact Us', href: '/#contact' },
];

interface NavbarProps {
  variant?: 'transparent' | 'white';
}

export default function Navbar({ variant = 'transparent' }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // For white variant, always show as scrolled (white bg)
  const isWhiteBg = variant === 'white' || scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 z-50 py-3 md:py-4 transition-all duration-300 ${
        isWhiteBg ? 'top-0 bg-white shadow-md' : 'top-4 bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-between w-[90%] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src={isWhiteBg ? "/images/hero-section/logo-footer.svg" : "/images/hero-section/logo.svg"}
            alt="Liberty India"
            width={50}
            height={50}
            className="w-10 h-10 md:w-12 md:h-12"
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center flex-1 ml-10 xl:ml-14">
          <div className="flex items-center gap-10 xl:gap-14 2xl:gap-16">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`group flex items-center gap-1.5 text-[13px] xl:text-[14px] font-light tracking-wide transition-colors duration-200 cursor-pointer ${
                  isWhiteBg ? 'text-gray-700 hover:text-gray-900' : 'text-white/90 hover:text-white'
                }`}
                style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
              >
                {item.label}
                {item.hasDropdown && (
                  <svg
                    className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5 md:gap-6">
          {/* Search Icon */}
          <button
            aria-label="Search"
            className={`p-1.5 transition-colors duration-200 cursor-pointer ${
              isWhiteBg ? 'text-gray-700 hover:text-gray-900' : 'text-white/80 hover:text-white'
            }`}
          >
            <svg
              className="w-5.5 h-5.5"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="7" />
              <path strokeLinecap="round" d="M21 21l-4.35-4.35" />
            </svg>
          </button>

          {/* Hamburger Menu */}
          <button
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`flex flex-col justify-center items-end gap-1.25 p-1.5 transition-colors duration-200 cursor-pointer ${
              isWhiteBg ? 'text-gray-700 hover:text-gray-900' : 'text-white/80 hover:text-white'
            }`}
          >
            <span className="block w-7 h-[1.5px] bg-current rounded-full" />
            <span className="block w-5 h-[1.5px] bg-current rounded-full" />
            <span className="block w-7 h-[1.5px] bg-current rounded-full" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-md">
          <div className="flex justify-end p-6">
            <button
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white p-2"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center gap-8 pt-12">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl text-white/90 font-light tracking-widest uppercase hover:text-white transition-colors"
                style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
