'use client';

import { useCallback, useEffect, useState } from 'react';
import { CONSENT_CHANGED_EVENT, readConsent } from '../lib/consent';
import { NEWSLETTER_POPUP_DELAY_S, NEWSLETTER_VISIBLE } from '../lib/siteConfig';
import NewsletterForm, { NEWSLETTER_STORAGE_KEY } from './NewsletterForm';

/** After closing the pop-up, don't show it again for this long. */
const SNOOZE_DAYS = 30;

function shouldOffer(): boolean {
  try {
    const s = JSON.parse(window.localStorage.getItem(NEWSLETTER_STORAGE_KEY) || 'null');
    if (s?.subscribed) return false;
    if (s?.dismissedAt && Date.now() - s.dismissedAt < SNOOZE_DAYS * 86_400_000) return false;
  } catch {
    // Unreadable storage — fall through and offer once.
  }
  return true;
}

/**
 * Newsletter pop-up. Appears once, a few seconds into the visit — but never
 * on top of the cookie banner or another open dialog.
 */
export default function NewsletterPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!NEWSLETTER_VISIBLE || !shouldOffer()) return;

    let timer: ReturnType<typeof setTimeout>;
    const tryOpen = () => {
      if (!shouldOffer()) return;
      // Cookie choice still pending → wait for it (listener below).
      if (!readConsent()) return;
      // Another modal (inquiry form, etc.) is open → try again shortly.
      if (document.querySelector('[aria-modal="true"]')) {
        timer = setTimeout(tryOpen, 8000);
        return;
      }
      setOpen(true);
    };
    const afterConsent = () => {
      clearTimeout(timer);
      timer = setTimeout(tryOpen, 4000);
    };

    timer = setTimeout(tryOpen, NEWSLETTER_POPUP_DELAY_S * 1000);
    window.addEventListener(CONSENT_CHANGED_EVENT, afterConsent);
    return () => {
      clearTimeout(timer);
      window.removeEventListener(CONSENT_CHANGED_EVENT, afterConsent);
    };
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    try {
      const s = JSON.parse(window.localStorage.getItem(NEWSLETTER_STORAGE_KEY) || 'null');
      if (!s?.subscribed) {
        window.localStorage.setItem(NEWSLETTER_STORAGE_KEY, JSON.stringify({ dismissedAt: Date.now() }));
      }
    } catch {
      // Storage blocked — pop-up may reappear on the next visit.
    }
  }, []);

  // ESC to close + lock page scroll while open (same as the inquiry modals).
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <div
      data-lenis-prevent
      className="li-no-print fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/45 backdrop-blur-sm"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-labelledby="newsletter-title"
    >
      <div
        data-lenis-prevent
        className="relative w-full max-w-lg bg-white rounded-[14px] border border-[#E9E4BF] shadow-2xl max-h-[92vh] overflow-y-auto overscroll-contain"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close newsletter sign-up"
          className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full flex items-center justify-center text-[#424242] hover:bg-[#FFFDEC] transition-colors cursor-pointer"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>

        <div className="p-7 md:p-10">
          <p
            className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#E07B39] mb-3"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
          >
            Newsletter
          </p>
          <h2
            id="newsletter-title"
            className="text-[28px] md:text-[34px] font-semibold text-[#141313] leading-tight"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            India, in your inbox
          </h2>
          <p
            className="mt-3 mb-7 text-sm md:text-[15px] text-[#424242]/80 font-light leading-relaxed"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
          >
            New itineraries, destination insights and programme ideas from the Liberty India team.
          </p>
          <NewsletterForm location="popup" theme="light" />
        </div>
      </div>
    </div>
  );
}
