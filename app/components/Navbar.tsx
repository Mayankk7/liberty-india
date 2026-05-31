'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { useLenis } from 'lenis/react';
import { itineraries, type Itinerary } from '../itineraries/itineraries';
import { applyFilters, EMPTY_FILTERS, getRegion } from '../journeys/filters';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about-us' },
  { label: 'About India', href: '/#about-india', hasDropdown: true },
  { label: 'Our Services', href: '/#services', hasDropdown: true },
  { label: 'Journeys', href: '/journeys' },
  { label: 'Contact Us', href: '/#contact' },
];

/** px to leave above a scrolled-to section so the fixed navbar doesn't cover it. */
const NAV_SCROLL_OFFSET = -80;

const RESULT_LIMIT = 6;
const POPULAR_LIMIT = 4;

interface NavbarProps {
  variant?: 'transparent' | 'white';
}

export default function Navbar({ variant = 'transparent' }: NavbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const lenis = useLenis();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hiddenOverMap, setHiddenOverMap] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIdx, setActiveIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // When search is open, navbar reads as white-themed regardless of scroll
  const isWhiteBg = variant === 'white' || scrolled || searchOpen;

  // Hide the navbar while scrolling through the India-map band (home page only),
  // but never while the user has the search panel or mobile menu open.
  const hideNav = hiddenOverMap && !searchOpen && !mobileMenuOpen;

  useEffect(() => {
    // Height of the top strip the fixed navbar occupies. While any band marked
    // with `data-navbar-hide` (the home India-map collage, the wildlife "Wild
    // Heritage" collage, …) overlaps this strip, the navbar hides so it doesn't
    // sit on top of the artwork; it reappears once the band scrolls past.
    const NAV_STRIP = 80;
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const bands = document.querySelectorAll('[data-navbar-hide]');
      let over = false;
      bands.forEach((band) => {
        const r = band.getBoundingClientRect();
        if (r.top < NAV_STRIP && r.bottom > 0) over = true;
      });
      setHiddenOverMap(over);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const trimmed = query.trim();
  const hasQuery = trimmed.length > 0;

  const matches = useMemo<Itinerary[]>(() => {
    if (!hasQuery) return [];
    return applyFilters(itineraries, { ...EMPTY_FILTERS, q: trimmed });
  }, [trimmed, hasQuery]);

  const popular = useMemo<Itinerary[]>(() => itineraries.slice(0, POPULAR_LIMIT), []);

  const visible = hasQuery ? matches.slice(0, RESULT_LIMIT) : popular;
  const totalMatches = matches.length;

  useEffect(() => {
    setActiveIdx(0);
  }, [trimmed]);

  // ESC closes; focus the input shortly after opening
  useEffect(() => {
    if (!searchOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeSearch();
    };
    document.addEventListener('keydown', onKey);
    const t = setTimeout(() => inputRef.current?.focus(), 80);
    return () => {
      document.removeEventListener('keydown', onKey);
      clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchOpen]);

  function closeSearch() {
    setSearchOpen(false);
    setQuery('');
    setActiveIdx(0);
  }

  function goToItinerary(slug: string) {
    closeSearch();
    router.push(`/itineraries/${slug}`);
  }

  function goToJourneys() {
    const q = trimmed ? `?q=${encodeURIComponent(trimmed)}` : '';
    closeSearch();
    router.push(`/journeys${q}`);
  }

  function onInputKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (visible.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIdx((i) => (i + 1) % visible.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIdx((i) => (i - 1 + visible.length) % visible.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      goToItinerary(visible[activeIdx].slug);
    }
  }

  // ── In-page smooth scroll for the hash nav links ──────────────────────────
  // Lenis owns smooth scroll; native hash jumps fight its inertia loop (and are
  // flaky on the App Router), so intercept the in-page links and drive Lenis.
  function scrollToHash(href: string) {
    if (href === '/' || !href.includes('#')) {
      if (lenis) lenis.scrollTo(0); else window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(href.slice(href.indexOf('#') + 1));
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: NAV_SCROLL_OFFSET });
    else el.scrollIntoView({ behavior: 'smooth' });
  }

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    const realPages = ['/', '/about-us', '/#about-india', '/#services', '/journeys', '/#contact', '/nature', '/wellness', '/wildlife', '/heritage', '/spiritual', '/culture', '/architecture'];
    if (!realPages.includes(href)) {
      e.preventDefault();
      window.location.href = '/under-development';
      return;
    }
    // On the homepage, smooth-scroll in place instead of letting the hash jump.
    if ((href === '/' || href.startsWith('/#')) && pathname === '/') {
      e.preventDefault();
      scrollToHash(href);
    }
    // Otherwise <Link> navigates; arriving on '/' with a hash triggers the effect below.
  }

  // Arriving on the homepage with a hash (e.g. /about-us → "Our Services"):
  // smooth-scroll to that section once it has mounted.
  useEffect(() => {
    if (pathname !== '/' || !window.location.hash) return;
    const id = window.location.hash.slice(1);
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      if (lenis) lenis.scrollTo(el, { offset: NAV_SCROLL_OFFSET });
      else el.scrollIntoView({ behavior: 'smooth' });
    }, 350);
    return () => clearTimeout(t);
  }, [pathname, lenis]);

  return (
    <>
      {/* Soft page scrim behind the expanded navbar — click to close */}
      {searchOpen && (
        <div
          aria-hidden="true"
          onClick={closeSearch}
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300"
        />
      )}

      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          isWhiteBg ? 'top-0 bg-white shadow-md' : 'top-3 bg-transparent'
        } ${hideNav ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}
        role="navigation"
        aria-label="Main navigation"
      >
        {/* TOP ROW */}
        <div className="py-2 md:py-2.5">
          <div className="w-full flex items-center justify-between px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
            {/* Logo */}
            <Link href="/" className="shrink-0 mr-8 md:mr-12 lg:mr-16 xl:mr-20" onClick={closeSearch}>
              <Image
                src={isWhiteBg ? 'https://ik.imagekit.io/libertyindia/hero-section/logo-footer.svg' : 'https://ik.imagekit.io/libertyindia/hero-section/logo.svg'}
                alt="Liberty India"
                width={100}
                height={100}
                className="w-11 h-11 md:w-12 md:h-12"
              />
            </Link>

            {/* Hamburger Icon for Mobile (hidden while searching) */}
            {!searchOpen && (
              <button
                className={`lg:hidden flex items-center justify-center p-2 transition-colors duration-300 ${
                  isWhiteBg ? 'text-gray-700' : 'text-white'
                }`}
                aria-label="Open menu"
                onClick={() => setMobileMenuOpen(true)}
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            )}

            {/* CENTER REGION — nav links OR inline search input */}
            {searchOpen ? (
              <div className="flex-1 flex items-center gap-3 lg:gap-4 min-w-0">
                <span className="text-[#E07B39] shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
                  </svg>
                </span>
                <input
                  ref={inputRef}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={onInputKeyDown}
                  placeholder="Search destinations, themes, or trip names…"
                  aria-label="Search itineraries"
                  className="flex-1 min-w-0 bg-transparent outline-none text-[15px] md:text-[16px] text-[#141313] placeholder:text-[#424242]/40"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                />
                <button
                  type="button"
                  onClick={closeSearch}
                  aria-label="Close search"
                  className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full text-[#424242]/60 hover:bg-[#FFFDEC] hover:text-[#141313] transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                  </svg>
                </button>
              </div>
            ) : (
              <>
                {/* Desktop Nav Links */}
                <div className="hidden lg:flex flex-1 justify-between">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`flex-1 text-center group flex items-center justify-center gap-1.5 text-[13px] xl:text-[14px] font-normal tracking-wide cursor-pointer transition-all duration-300 ease-in-out ${
                        isWhiteBg ? 'text-gray-700 hover:text-[#EF9120]' : 'text-white/90 hover:text-[#EF9120]'
                      }`}
                      style={{ fontFamily: 'var(--font-merriweather), Georgia, serif', position: 'relative' }}
                      onClick={(e) => handleNavClick(e, item.href)}
                    >
                      <span className="relative">
                        {item.label}
                        <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-[#EF9120] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Search Icon — desktop */}
                <button
                  type="button"
                  aria-label="Search journeys"
                  onClick={() => setSearchOpen(true)}
                  className={`hidden lg:flex items-center justify-center shrink-0 ml-8 xl:ml-12 p-1.5 cursor-pointer transition-colors duration-300 ${
                    isWhiteBg ? 'text-gray-700 hover:text-[#EF9120]' : 'text-white/90 hover:text-[#EF9120]'
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* EXPANDED SEARCH PANEL — drops down from the navbar row.
              `data-lenis-prevent` releases the wheel inside the panel so the
              results list scrolls natively instead of the global smooth-scroll
              hijacking it (which made the list feel unscrollable). */}
          <div
            data-lenis-prevent
            className={`overflow-hidden transition-[max-height,opacity,margin] duration-300 ease-out ${
              searchOpen ? 'max-h-[70vh] opacity-100 mt-2 md:mt-3' : 'max-h-0 opacity-0 mt-0'
            }`}
            aria-hidden={!searchOpen}
          >
            <div className="px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-40">
              <div className="border-t border-[#EFE9C9] pt-3 pb-3">
                {hasQuery && matches.length === 0 ? (
                  <EmptyState query={trimmed} onSeeAll={goToJourneys} />
                ) : (
                  <>
                    <p
                      className="px-1 pb-2 text-[10px] tracking-[0.28em] uppercase text-[#424242]/45"
                      style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                    >
                      {hasQuery
                        ? `${totalMatches} ${totalMatches === 1 ? 'result' : 'results'}`
                        : 'Popular journeys'}
                    </p>
                    <ul
                      className="space-y-0.5 max-h-[46vh] overflow-y-auto scrollbar-hide"
                      role="listbox"
                      key={trimmed || 'popular'}
                    >
                      {visible.map((it, i) => (
                        <ResultRow
                          key={it.slug}
                          itinerary={it}
                          active={i === activeIdx}
                          delayMs={i * 35}
                          onClick={() => goToItinerary(it.slug)}
                          onMouseEnter={() => setActiveIdx(i)}
                        />
                      ))}
                    </ul>
                  </>
                )}

                {/* Footer hints + Browse-all CTA */}
                <div className="mt-3 pt-3 border-t border-[#EFE9C9] flex items-center justify-between gap-4">
                  <p
                    className="hidden sm:flex items-center gap-2 text-[11px] text-[#424242]/55"
                    style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                  >
                    <Kbd>↑</Kbd>
                    <Kbd>↓</Kbd>
                    <span className="ml-0.5">navigate</span>
                    <span className="mx-1.5 text-[#424242]/30">·</span>
                    <Kbd>↵</Kbd>
                    <span className="ml-0.5">open</span>
                    <span className="mx-1.5 text-[#424242]/30">·</span>
                    <Kbd>esc</Kbd>
                    <span className="ml-0.5">close</span>
                  </p>
                  <button
                    type="button"
                    onClick={goToJourneys}
                    className="group inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#E07B39] hover:text-[#c66a2f] transition-colors"
                    style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                  >
                    {hasQuery ? `See all ${totalMatches}` : 'Browse all'}
                    <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </div>
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
                  onClick={(e) => { setMobileMenuOpen(false); handleNavClick(e, item.href); }}
                  className="text-xl text-white/90 font-normal tracking-widest uppercase hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  {item.label}
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setSearchOpen(true);
                }}
                className="mt-2 inline-flex items-center gap-3 text-xl text-white/90 font-normal tracking-widest uppercase hover:text-white transition-colors"
                style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
                </svg>
                Search
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd
      className="px-1.5 py-0.5 rounded-[5px] border border-[#E9E4BF] bg-white text-[10px] font-medium text-[#424242]/70 leading-none"
      style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
    >
      {children}
    </kbd>
  );
}

function ResultRow({
  itinerary,
  active,
  delayMs,
  onClick,
  onMouseEnter,
}: {
  itinerary: Itinerary;
  active: boolean;
  delayMs: number;
  onClick: () => void;
  onMouseEnter: () => void;
}) {
  const region = getRegion(itinerary);
  return (
    <li
      role="option"
      aria-selected={active}
      className="search-result-in"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <button
        type="button"
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        className={`relative w-full flex items-center gap-4 pl-5 pr-4 py-3 rounded-[12px] text-left cursor-pointer transition-colors ${
          active ? 'bg-[#FFFDEC]' : 'hover:bg-[#FFFDEC]/55'
        }`}
      >
        <span
          aria-hidden="true"
          className={`absolute left-1.5 top-1/2 -translate-y-1/2 w-[2px] rounded-full bg-[#E07B39] transition-all duration-200 ease-out ${
            active ? 'h-8 opacity-100' : 'h-4 opacity-0'
          }`}
        />

        <div className="relative w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-[10px] overflow-hidden bg-[#F2EFDF]">
          {itinerary.heroImage && (
            <Image
              src={itinerary.heroImage}
              alt=""
              fill
              className={`object-cover transition-transform duration-500 ${active ? 'scale-105' : 'scale-100'}`}
              sizes="64px"
            />
          )}
        </div>

        <div className="min-w-0 flex-1">
          <p
            className="text-[14px] sm:text-[15px] text-[#141313] font-semibold leading-tight truncate"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            {itinerary.title}
          </p>
          <p
            className="mt-1 text-[11px] sm:text-[12px] text-[#424242]/65 truncate"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
          >
            {[itinerary.duration, region, itinerary.startingPrice]
              .filter(Boolean)
              .join('  ·  ')}
          </p>
        </div>

        <span
          aria-hidden="true"
          className={`text-[#E07B39] text-lg shrink-0 transition-all duration-200 ease-out ${
            active ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
          }`}
        >
          →
        </span>
      </button>
    </li>
  );
}

function EmptyState({ query, onSeeAll }: { query: string; onSeeAll: () => void }) {
  return (
    <div className="px-7 py-10 text-center search-result-in" style={{ animationDelay: '40ms' }}>
      <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-[#FFFDEC] flex items-center justify-center text-[#E07B39]">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
        </svg>
      </div>
      <p
        className="text-[16px] text-[#141313] mb-1.5"
        style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
      >
        No journeys match &ldquo;{query}&rdquo;
      </p>
      <p
        className="text-[13px] text-[#424242]/65 leading-relaxed mb-5 max-w-xs mx-auto"
        style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
      >
        Try a region (Rajasthan, Kerala), a theme (Heritage, Wildlife),
        or browse the full collection.
      </p>
      <button
        type="button"
        onClick={onSeeAll}
        className="group inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-[#E9E4BF] text-[12px] font-semibold uppercase tracking-[0.14em] text-[#141313] hover:bg-[#FFFDEC] hover:border-[#E07B39]/40 transition-colors"
        style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
      >
        Browse all journeys
        <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
      </button>
    </div>
  );
}
