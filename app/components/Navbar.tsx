'use client';

import { useState, useEffect, useRef } from 'react';
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
  const [searchOpen, setSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // For white variant, always show as scrolled (white bg)
  const isWhiteBg = variant === 'white' || scrolled;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  return (
    <nav
      className={`fixed left-0 right-0 z-50 py-3 md:py-4 transition-all duration-300 ${
        isWhiteBg ? 'top-0 bg-white shadow-md' : 'top-4 bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative">
            <button
              aria-label="Close search"
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setSearchOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Search</h2>
            <form onSubmit={e => { e.preventDefault(); setSearchOpen(false); }}>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Type to search..."
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <button type="submit" className="mt-4 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">Search</button>
            </form>
          </div>
        </div>
      )}
      <div className="flex items-center justify-between w-[90%] mx-auto">
        {/* Logo */}
        <Link href="/" className="shrink-0">
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
                onClick={e => {
                  // List of real pages
                  const realPages = ['/', '/about-us', '/#about-india', '/#services', '/#journeys', '/#contact', '/nature', '/wellness', '/wildlife', '/heritage', '/spiritual', '/culture'];
                  if (!realPages.includes(item.href)) {
                    e.preventDefault();
                    window.location.href = '/under-development';
                  }
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Icon: Animated Hamburger/X */}
        <div className="flex items-center gap-5 md:gap-6">
          <button
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`relative flex flex-col justify-center items-end gap-1.25 p-1.5 transition-colors duration-200 cursor-pointer w-8 h-8 ${
              isWhiteBg ? 'text-gray-700 hover:text-gray-900' : 'text-white/80 hover:text-white'
            }`}
          >
            <span
              className={`block absolute left-0 top-2 w-7 h-0.5 bg-current rounded-full transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block absolute left-0 top-4 w-7 h-0.5 bg-current rounded-full transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
            />
            <span
              className={`block absolute left-0 top-6 w-7 h-0.5 bg-current rounded-full transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
            <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
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
