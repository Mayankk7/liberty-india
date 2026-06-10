'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import type { Itinerary } from '../itineraries';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Props {
  open: boolean;
  onClose: () => void;
  itinerary: Itinerary;
}

type FormState = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  travelPlans: string;
  privacy: boolean;
  marketing: boolean;
};

const INITIAL: FormState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  travelPlans: '',
  privacy: false,
  marketing: false,
};

/**
 * ExpertInquiryModal — split-pane "Start Your Journey Today" inquiry form
 * launched from the floating bottom-right CTA on itinerary detail pages.
 * Posts to /api/inquiry by mapping fields into the existing payload shape.
 *
 * Scroll: the body is locked while open, and `data-lenis-prevent` releases
 * the wheel/touch from the global Lenis smooth-scroll loop so the form pane
 * scrolls its own content instead of the page behind the backdrop.
 */
export default function ExpertInquiryModal({ open, onClose, itinerary }: Props) {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [serverError, setServerError] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      const t = setTimeout(() => {
        setForm(INITIAL);
        setErrors({});
        setStatus('idle');
        setServerError(null);
      }, 200);
      return () => clearTimeout(t);
    }
  }, [open]);

  if (!open) return null;

  function update<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (form.firstName.trim().length < 1) next.firstName = 'Required.';
    if (form.lastName.trim().length < 1) next.lastName = 'Required.';
    if (!EMAIL_RE.test(form.email.trim())) next.email = 'Please enter a valid email.';
    if (form.phone.replace(/\D/g, '').length < 7) next.phone = 'Please enter a valid phone number.';
    if (!form.privacy) next.privacy = 'Please accept the Privacy Policy.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === 'sending') return;
    if (!validate()) return;

    setStatus('sending');
    setServerError(null);

    const fullName = [form.firstName, form.lastName]
      .map((s) => s.trim())
      .filter((s) => s.length > 0)
      .join(' ');

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullName,
          email: form.email,
          phone: form.phone,
          month: '',
          travellers: '',
          message: `${form.travelPlans}\n\n— Marketing opt-in: ${form.marketing ? 'Yes' : 'No'}`,
          itinerary: { slug: itinerary.slug, title: itinerary.title },
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        if (res.status === 422 && data?.errors) {
          setErrors(data.errors);
          setStatus('idle');
          return;
        }
        setServerError(data?.error || 'Something went wrong. Please try again.');
        setStatus('error');
        return;
      }

      setStatus('sent');
    } catch {
      setServerError('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  }

  return (
    <div
      data-lenis-prevent
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6 bg-black/70 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="expert-inquiry-title"
    >
      <div className="relative w-full max-w-[980px] bg-white rounded-[16px] shadow-2xl overflow-hidden max-h-[92vh] grid grid-cols-1 md:grid-cols-[4fr_6fr]">
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close inquiry form"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center bg-white/85 text-[#424242] hover:bg-white shadow-sm transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>

        {/* Left pane — hero image with "Enquire" overlay (desktop only) */}
        <div className="relative hidden md:block min-h-[560px]">
          <Image
            src={itinerary.heroImage || '/images/hero-carousel/hero-1.png'}
            alt={itinerary.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 0vw, 420px"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/55" aria-hidden="true" />
          <p
            className="absolute top-8 left-9 text-white text-[13px] uppercase tracking-[0.32em]"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
          >
            Enquire
          </p>
          <div className="absolute bottom-9 left-9 right-9">
            <p
              className="text-white text-2xl leading-snug mb-3"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
            >
              {itinerary.title}
            </p>
            <p
              className="text-white/85 text-[13px] leading-relaxed font-light"
              style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
            >
              A Liberty India specialist will tailor this itinerary to your client — flexible dates, custom pricing and preferred style.
            </p>
          </div>
        </div>

        {/* Right pane — form (scrolls its own content; released from Lenis) */}
        <div data-lenis-prevent className="overflow-y-auto overscroll-contain max-h-[92vh] p-7 md:p-11 lg:p-12">
          {status === 'sent' ? (
            <SuccessState onClose={onClose} />
          ) : (
            <>
              <p
                className="text-[10px] md:text-[11px] tracking-[0.32em] uppercase text-[#E07B39] mb-3"
                style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
              >
                Guest Information
              </p>
              <h2
                id="expert-inquiry-title"
                className="text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-[#141313] leading-tight"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              >
                Start Your Journey Today
              </h2>
              <p
                className="mt-2.5 text-[13px] text-[#424242]/75 font-light md:hidden"
                style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
              >
                Enquiring about <span className="text-[#141313]">{itinerary.title}</span>
              </p>

              <form onSubmit={onSubmit} className="mt-8 md:mt-10 space-y-7">
                {serverError && (
                  <div className="px-4 py-3 rounded-md bg-red-50 border border-red-200 text-sm text-red-700">
                    {serverError}
                  </div>
                )}

                {/* Row 1: First / Last */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
                  <Field label="First Name" required>
                    <input
                      type="text"
                      value={form.firstName}
                      onChange={(e) => update('firstName', e.target.value)}
                      className={inputCls(errors.firstName)}
                      autoComplete="given-name"
                      required
                    />
                    {errors.firstName && <FieldError>{errors.firstName}</FieldError>}
                  </Field>

                  <Field label="Last Name" required>
                    <input
                      type="text"
                      value={form.lastName}
                      onChange={(e) => update('lastName', e.target.value)}
                      className={inputCls(errors.lastName)}
                      autoComplete="family-name"
                      required
                    />
                    {errors.lastName && <FieldError>{errors.lastName}</FieldError>}
                  </Field>
                </div>

                {/* Row 2: Phone / Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
                  <Field label="Phone Number" required>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      className={inputCls(errors.phone)}
                      autoComplete="tel"
                      required
                    />
                    {errors.phone && <FieldError>{errors.phone}</FieldError>}
                  </Field>

                  <Field label="Email Address" required>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      className={inputCls(errors.email)}
                      autoComplete="email"
                      required
                    />
                    {errors.email && <FieldError>{errors.email}</FieldError>}
                  </Field>
                </div>

                {/* Travel plans */}
                <Field label="Tell us about your travel plans">
                  <textarea
                    value={form.travelPlans}
                    onChange={(e) => update('travelPlans', e.target.value)}
                    className={`${inputCls(undefined)} h-auto min-h-[88px] pt-2.5 resize-none leading-relaxed`}
                  />
                </Field>

                {/* Consent */}
                <div className="pt-1 space-y-3.5">
                  <label className="flex items-start gap-3 text-[12.5px] text-[#424242]/85 leading-snug cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.privacy}
                      onChange={(e) => update('privacy', e.target.checked)}
                      className="accent-[#E07B39] mt-0.5 h-4 w-4 shrink-0 cursor-pointer"
                    />
                    <span style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
                      I accept the <span className="underline underline-offset-2">Privacy Policy</span>
                      <span className="text-[#E07B39] ml-0.5">*</span>
                    </span>
                  </label>
                  {errors.privacy && <FieldError>{errors.privacy}</FieldError>}

                  <label className="flex items-start gap-3 text-[12.5px] text-[#424242]/85 leading-snug cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.marketing}
                      onChange={(e) => update('marketing', e.target.checked)}
                      className="accent-[#E07B39] mt-0.5 h-4 w-4 shrink-0 cursor-pointer"
                    />
                    <span style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}>
                      I would like to receive news, updates and offers from Liberty India.
                    </span>
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group w-full h-[52px] mt-1 bg-black hover:bg-white border border-black disabled:opacity-60 disabled:cursor-not-allowed text-white hover:text-black text-[13px] font-semibold tracking-[0.22em] uppercase transition-colors duration-300 cursor-pointer flex items-center justify-center gap-2.5"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  <span>{status === 'sending' ? 'Sending…' : 'Speak to an Expert'}</span>
                  {status !== 'sending' && (
                    <span aria-hidden="true" className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1.5">→</span>
                  )}
                </button>

                <p
                  className="text-[11px] text-[#424242]/60 leading-relaxed text-center"
                  style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
                >
                  We&rsquo;ll never share your details. By submitting, you agree to be contacted by Liberty India about your enquiry.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Editorial underline field — no boxes, hairline rule, warm focus accent. */
function inputCls(error?: string) {
  return `w-full h-11 px-0 bg-transparent border-0 border-b ${
    error ? 'border-red-400' : 'border-[#E9E4BF]'
  } text-[#141313] text-[15px] outline-none focus:border-[#E07B39] transition-colors duration-300 rounded-none`;
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span
        className="block text-[11px] text-[#424242]/60 mb-1 tracking-[0.18em] uppercase"
        style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
      >
        {label}
        {required && <span className="text-[#E07B39] ml-0.5">*</span>}
      </span>
      {children}
    </label>
  );
}

function FieldError({ children }: { children: React.ReactNode }) {
  return <p className="mt-1.5 text-xs text-red-600">{children}</p>;
}

function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <div className="text-center py-12 md:py-20">
      <div className="inline-flex w-16 h-16 rounded-full bg-[#FFFDEC] border border-[#E9E4BF] items-center justify-center text-[#E07B39] mb-6">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <polyline points="4 12 10 18 20 6" />
        </svg>
      </div>
      <h3
        className="text-2xl md:text-3xl font-semibold text-[#141313]"
        style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
      >
        Inquiry sent.
      </h3>
      <p
        className="mt-3.5 text-sm md:text-[15px] text-[#424242] font-light max-w-sm mx-auto leading-relaxed"
        style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
      >
        Thank you. A confirmation has been sent to your inbox, and a Liberty India specialist will be in touch within 24 hours.
      </p>
      <button
        type="button"
        onClick={onClose}
        className="mt-8 inline-flex items-center justify-center h-11 px-8 border border-[#141313] text-[#141313] hover:bg-black hover:text-white text-[12px] font-semibold tracking-[0.18em] uppercase transition-colors duration-300"
        style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
      >
        Close
      </button>
    </div>
  );
}
