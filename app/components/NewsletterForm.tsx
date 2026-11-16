'use client';

import { useState } from 'react';
import { trackLead } from '../lib/consent';
import { submitHubspotForm } from '../lib/hubspot';
import { HUBSPOT, PRIVACY_POLICY_URL } from '../lib/siteConfig';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** localStorage flag read by NewsletterPopup so subscribers are never re-prompted. */
export const NEWSLETTER_STORAGE_KEY = 'li_newsletter';

const CONSENT_TEXT =
  'By subscribing, you agree to receive emails from Liberty India. You can unsubscribe at any time.';

type Fields = { name: string; email: string; company: string; designation: string };
const EMPTY: Fields = { name: '', email: '', company: '', designation: '' };

const sans = { fontFamily: 'var(--font-merriweather), Georgia, serif' };

const THEME = {
  // Footer — matches the dark "Request a proposal" form.
  dark: {
    input:
      'w-full px-3.5 py-2.5 bg-[#252525] border text-[#f0ebe0] placeholder:text-[#7a766f] text-[14px] focus:outline-none focus:border-[#E07B39] focus:ring-2 focus:ring-[#E07B39]/25 transition-colors',
    inputOk: 'border-[#3a3a3a]',
    inputErr: 'border-red-400',
    button:
      'bg-[#2a2a2a] hover:bg-[#1a1a1a] border border-[#E07B39] text-[#FDF39F] text-[14px] font-semibold',
    note: 'text-[#a0a09c]',
    error: 'text-red-300',
    success: 'text-[#f5efe0]',
  },
  // Pop-up — matches the light itinerary inquiry modal.
  light: {
    input:
      'w-full h-11 px-0 bg-transparent border-0 border-b text-[#141313] placeholder:text-[#424242]/50 text-[15px] outline-none focus:border-[#E07B39] transition-colors rounded-none',
    inputOk: 'border-[#E9E4BF]',
    inputErr: 'border-red-400',
    button:
      'bg-black hover:bg-white border border-black text-white hover:text-black text-[12px] tracking-[0.22em] uppercase',
    note: 'text-[#424242]/60',
    error: 'text-red-600',
    success: 'text-[#141313]',
  },
};

interface Props {
  /** Reported as `form_location` on the generate_lead event. */
  location: 'footer' | 'popup';
  theme: keyof typeof THEME;
  onSuccess?: () => void;
}

/**
 * Newsletter sign-up (name, email, company, designation) → HubSpot. Shared by
 * the footer and the pop-up. Pushes `generate_lead` once HubSpot accepts it.
 */
export default function NewsletterForm({ location, theme, onSuccess }: Props) {
  const t = THEME[theme];
  const [form, setForm] = useState<Fields>(EMPTY);
  const [trap, setTrap] = useState('');
  const [invalid, setInvalid] = useState<Partial<Record<keyof Fields, boolean>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');

  const set = (key: keyof Fields, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    if (invalid[key]) setInvalid((i) => ({ ...i, [key]: false }));
  };

  const finish = () => {
    setStatus('sent');
    try {
      window.localStorage.setItem(NEWSLETTER_STORAGE_KEY, JSON.stringify({ subscribed: true }));
    } catch {
      // Storage blocked — only means the pop-up may show again.
    }
    onSuccess?.();
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;

    const bad = {
      name: form.name.trim().length < 2,
      email: !EMAIL_RE.test(form.email.trim()),
    };
    if (bad.name || bad.email) {
      setInvalid(bad);
      setError(bad.name ? 'Please enter your name.' : 'Please enter a valid email address.');
      setStatus('error');
      return;
    }

    // Bots fill the hidden field; humans never see it. Drop silently.
    if (trap) return finish();

    setStatus('sending');
    setError('');
    const [first, ...rest] = form.name.trim().split(/\s+/);
    const result = await submitHubspotForm(
      HUBSPOT.newsletterFormId,
      {
        firstname: first,
        lastname: rest.join(' '),
        email: form.email.trim(),
        company: form.company.trim(),
        jobtitle: form.designation.trim(),
      },
      CONSENT_TEXT,
    );

    if (!result.ok) {
      setError(result.error ?? 'Something went wrong. Please try again.');
      setStatus('error');
      return;
    }
    trackLead('newsletter', location);
    finish();
  };

  if (status === 'sent') {
    return (
      <p role="status" aria-live="polite" className={`text-[15px] leading-relaxed ${t.success}`} style={sans}>
        Thank you — you&apos;re subscribed. Look out for our next newsletter in your inbox.
      </p>
    );
  }

  const input = (key: keyof Fields) => `${t.input} ${invalid[key] ? t.inputErr : t.inputOk}`;

  return (
    <form onSubmit={onSubmit} noValidate style={sans}>
      <div className={`grid grid-cols-1 sm:grid-cols-2 ${theme === 'dark' ? 'gap-2.5' : 'gap-x-8 gap-y-5'}`}>
        <input
          type="text"
          placeholder="Name *"
          aria-label="Name"
          autoComplete="name"
          suppressHydrationWarning
          value={form.name}
          onChange={(e) => set('name', e.target.value)}
          className={input('name')}
        />
        <input
          type="email"
          placeholder="Work email *"
          aria-label="Email address"
          autoComplete="email"
          suppressHydrationWarning
          value={form.email}
          onChange={(e) => set('email', e.target.value)}
          className={input('email')}
        />
        <input
          type="text"
          placeholder="Company"
          aria-label="Company"
          autoComplete="organization"
          suppressHydrationWarning
          value={form.company}
          onChange={(e) => set('company', e.target.value)}
          className={input('company')}
        />
        <input
          type="text"
          placeholder="Designation"
          aria-label="Designation"
          autoComplete="organization-title"
          suppressHydrationWarning
          value={form.designation}
          onChange={(e) => set('designation', e.target.value)}
          className={input('designation')}
        />
      </div>

      {/* Honeypot — hidden from people and assistive tech. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={trap}
        onChange={(e) => setTrap(e.target.value)}
        className="hidden"
      />

      {status === 'error' && (
        <p role="alert" className={`mt-3 text-[13px] ${t.error}`}>
          {error}
        </p>
      )}

      <div className={`flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 ${theme === 'dark' ? 'mt-3.5' : 'mt-7'}`}>
        <button
          type="submit"
          suppressHydrationWarning
          disabled={status === 'sending'}
          className={`group inline-flex items-center justify-center gap-2 h-12 px-8 shrink-0 transition-colors duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed ${t.button}`}
        >
          {status === 'sending' ? 'Subscribing…' : 'Subscribe'}
          <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
        <p className={`text-[11px] leading-snug ${t.note}`}>
          {CONSENT_TEXT}
          {PRIVACY_POLICY_URL && (
            <>
              {' '}
              <a href={PRIVACY_POLICY_URL} className="underline underline-offset-2">
                Privacy Policy
              </a>
            </>
          )}
        </p>
      </div>
    </form>
  );
}
