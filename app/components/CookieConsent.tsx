'use client';

import { useEffect, useState } from 'react';
import {
  CONSENT_OPEN_EVENT,
  readConsent,
  saveConsent,
  type ConsentChoice,
} from '../lib/consent';
import { PRIVACY_POLICY_URL } from '../lib/siteConfig';

const ALL_OFF: ConsentChoice = { analytics: false, marketing: false, preferences: false };
const ALL_ON: ConsentChoice = { analytics: true, marketing: true, preferences: true };

const CATEGORIES: { key: keyof ConsentChoice; title: string; body: string }[] = [
  {
    key: 'analytics',
    title: 'Analytics',
    body: 'Helps us understand how visitors use the site so we can improve it (Google Analytics).',
  },
  {
    key: 'marketing',
    title: 'Marketing',
    body: 'Lets us measure our advertising and show relevant ads on other platforms (Google Ads, Meta).',
  },
  {
    key: 'preferences',
    title: 'Preferences',
    body: 'Remembers choices you make on the site to give you a more personal experience.',
  },
];

const sans = { fontFamily: 'var(--font-merriweather), Georgia, serif' };
const serif = { fontFamily: 'var(--font-playfair), Georgia, serif' };

const btnBase =
  'inline-flex items-center justify-center h-11 px-6 text-[11px] tracking-[0.2em] uppercase border border-black transition-colors duration-300 cursor-pointer whitespace-nowrap';
const btnSolid = `${btnBase} bg-black text-white hover:bg-white hover:text-black`;
const btnOutline = `${btnBase} bg-white text-black hover:bg-black hover:text-white`;

/**
 * Cookie banner with Accept / Reject / Preferences, wired to Google Consent
 * Mode v2 (see app/lib/consent.ts). Shown until the visitor chooses; reopened
 * from the footer "Cookie settings" link.
 */
export default function CookieConsent() {
  const [open, setOpen] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [draft, setDraft] = useState<ConsentChoice>(ALL_OFF);

  useEffect(() => {
    const saved = readConsent();
    // Client-only state (localStorage) — cannot be known during prerender.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!saved) setOpen(true);

    const reopen = () => {
      setDraft(readConsent() ?? ALL_OFF);
      setShowPrefs(true);
      setOpen(true);
    };
    window.addEventListener(CONSENT_OPEN_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, reopen);
  }, []);

  if (!open) return null;

  const decide = (choice: ConsentChoice) => {
    saveConsent(choice);
    setOpen(false);
    setShowPrefs(false);
  };

  return (
    <div
      data-lenis-prevent
      role="dialog"
      aria-label="Cookie consent"
      className="li-no-print fixed inset-x-0 bottom-0 z-[95] p-3 sm:p-5 pointer-events-none"
    >
      <div
        className="pointer-events-auto mx-auto w-full max-w-5xl bg-white border border-[#E9E4BF] border-t-2 border-t-[#E07B39] shadow-[0_-8px_40px_-12px_rgba(0,0,0,0.35)] max-h-[85vh] overflow-y-auto overscroll-contain"
        style={sans}
      >
        <div className="p-5 md:p-7">
          <div className="flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
            <div className="flex-1 min-w-0">
              <h2 className="text-xl md:text-2xl font-semibold text-[#141313] leading-tight" style={serif}>
                We value your privacy
              </h2>
              <p className="mt-2 text-[13px] md:text-sm text-[#424242] leading-relaxed">
                We use cookies to run this site, understand how it is used and measure our
                marketing. You can accept all, reject non-essential cookies, or choose which to allow.
                {PRIVACY_POLICY_URL && (
                  <>
                    {' '}
                    <a href={PRIVACY_POLICY_URL} className="underline underline-offset-2 hover:text-[#E07B39]">
                      Privacy Policy
                    </a>
                  </>
                )}
              </p>
            </div>

            {!showPrefs && (
              <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-2.5 shrink-0">
                <button type="button" className={btnOutline} onClick={() => setShowPrefs(true)}>
                  Preferences
                </button>
                <button type="button" className={btnOutline} onClick={() => decide(ALL_OFF)}>
                  Reject all
                </button>
                <button type="button" className={btnSolid} onClick={() => decide(ALL_ON)}>
                  Accept all
                </button>
              </div>
            )}
          </div>

          {showPrefs && (
            <div className="mt-5 border-t border-[#E9E4BF]">
              <PrefRow
                title="Strictly necessary"
                body="Required for the site to work and to remember your cookie choice. Always on."
                checked
                disabled
              />
              {CATEGORIES.map((c) => (
                <PrefRow
                  key={c.key}
                  title={c.title}
                  body={c.body}
                  checked={draft[c.key]}
                  onChange={(v) => setDraft((d) => ({ ...d, [c.key]: v }))}
                />
              ))}
              <div className="mt-5 flex flex-col sm:flex-row sm:justify-end gap-2.5">
                <button type="button" className={btnOutline} onClick={() => decide(ALL_OFF)}>
                  Reject all
                </button>
                <button type="button" className={btnOutline} onClick={() => decide(draft)}>
                  Save preferences
                </button>
                <button type="button" className={btnSolid} onClick={() => decide(ALL_ON)}>
                  Accept all
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function PrefRow({
  title,
  body,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  body: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (value: boolean) => void;
}) {
  return (
    <div className="flex items-start justify-between gap-5 py-3.5 border-b border-[#E9E4BF]">
      <div className="min-w-0">
        <p className="text-sm font-semibold text-[#141313]">{title}</p>
        <p className="mt-0.5 text-[12px] md:text-[13px] text-[#424242]/80 leading-relaxed">{body}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={title}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={`relative mt-0.5 h-6 w-11 shrink-0 rounded-full transition-colors duration-200 ${
          checked ? 'bg-[#E07B39]' : 'bg-[#cfcabb]'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-200 ${
            checked ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
}
