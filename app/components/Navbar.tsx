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
      <div className="w-full flex items-center justify-between px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
        {/* Logo */}
        <Link href="/" className="shrink-0 mr-8 md:mr-12 lg:mr-16 xl:mr-20">
          <Image
            src={isWhiteBg ? "https://ik.imagekit.io/libertyindia/hero-section/logo-footer.svg" : "https://ik.imagekit.io/libertyindia/hero-section/logo.svg"}
            alt="Liberty India"
            width={100}
            height={100}
            className="w-15 h-15 "
          />
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button
          className="lg:hidden flex items-center justify-center p-2 text-gray-700"
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen(true)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Nav Links - spread full width */}
        <div className="hidden lg:flex flex-1 justify-between">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex-1 text-center group flex items-center justify-center gap-1.5 text-[13px] xl:text-[14px] font-light tracking-wide cursor-pointer transition-all duration-300 ease-in-out ${
                isWhiteBg ? 'text-gray-700 hover:text-[#EF9120]' : 'text-white/90 hover:text-[#EF9120]'
              }`}
              style={{ fontFamily: 'var(--font-merriweather), Georgia, serif', position: 'relative' }}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                // List of real pages
                const realPages = ['/', '/about-us', '/#about-india', '/#services', '/#journeys', '/#contact', '/nature', '/wellness', '/wildlife', '/heritage', '/spiritual', '/culture'];
                if (!realPages.includes(item.href)) {
                  e.preventDefault();
                  window.location.href = '/under-development';
                }
              }}
            >
              <span className="relative">
                {item.label}
                <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-[#EF9120] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              </span>
            </Link>
          ))}
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
