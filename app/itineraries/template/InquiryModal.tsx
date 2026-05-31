'use client';

import { useEffect, useState } from 'react';
import type { Itinerary } from '../itineraries';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

interface Props {
  open: boolean;
  onClose: () => void;
  itinerary: Itinerary;
}

type FormState = {
  name: string;
  email: string;
  phone: string;
  month: string;
  travellers: string;
  message: string;
};

const INITIAL: FormState = {
  name: '',
  email: '',
  phone: '',
  month: '',
  travellers: '',
  message: '',
};

/**
 * Inquiry modal — opens from the "Speak to an Expert" CTA in DetailsSection.
 * Posts to /api/inquiry which sends a company lead + customer auto-reply.
 */
export default function InquiryModal({ open, onClose, itinerary }: Props) {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [serverError, setServerError] = useState<string | null>(null);

  // Close on ESC + lock body scroll while open
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

  // Reset state when modal closes
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
    if (form.name.trim().length < 2) next.name = 'Please enter your name.';
    if (!EMAIL_RE.test(form.email.trim())) next.email = 'Please enter a valid email.';
    if (form.phone.replace(/\D/g, '').length < 7) next.phone = 'Please enter a valid phone number.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === 'sending') return;
    if (!validate()) return;

    setStatus('sending');
    setServerError(null);

    try {
      const res = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
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
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/45 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="inquiry-title"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-[14px] border border-[#E9E4BF] shadow-2xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close inquiry form"
          className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full flex items-center justify-center text-[#424242] hover:bg-[#FFFDEC] transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>

        <div className="p-6 md:p-8">
          {/* Header */}
          <p
            className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#E07B39] mb-2"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
          >
            We&rsquo;d love to help
          </p>
          <h2
            id="inquiry-title"
            className="text-2xl md:text-3xl font-semibold text-[#141313] leading-tight"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Speak to an Expert
          </h2>
          <p
            className="mt-2 text-sm md:text-[15px] text-[#424242] font-light leading-relaxed"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
          >
            Tell us about your trip — a Liberty India specialist will reach out within 24 hours.
          </p>

          {/* Itinerary context chip */}
          <div
            className="mt-5 inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FFFDEC] border border-[#E9E4BF]"
            style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#E07B39] font-semibold">
              Enquiring about
            </span>
            <span className="text-sm text-[#141313] font-medium">{itinerary.title}</span>
          </div>

          {status === 'sent' ? (
            <SuccessState onClose={onClose} />
          ) : (
            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              {serverError && (
                <div className="px-4 py-3 rounded-md bg-red-50 border border-red-200 text-sm text-red-700">
                  {serverError}
                </div>
              )}

              <Field label="Full Name" required>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  className={inputCls(errors.name)}
                  autoComplete="name"
                  required
                />
                {errors.name && <FieldError>{errors.name}</FieldError>}
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Email" required>
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

                <Field label="Phone" required>
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Preferred Travel Month">
                  <select
                    value={form.month}
                    onChange={(e) => update('month', e.target.value)}
                    className={inputCls(undefined)}
                  >
                    <option value="">Choose a month</option>
                    {MONTHS.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </Field>

                <Field label="Number of Travellers">
                  <input
                    type="number"
                    min={1}
                    value={form.travellers}
                    onChange={(e) => update('travellers', e.target.value)}
                    className={inputCls(undefined)}
                    placeholder="e.g. 2"
                  />
                </Field>
              </div>

              <Field label="Message">
                <textarea
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  className={`${inputCls(undefined)} min-h-[100px] resize-y`}
                  placeholder="Anything we should know about your trip…"
                />
              </Field>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full mt-2 inline-flex items-center justify-center px-7 py-3.5 rounded-[10px] bg-[#E07B39] hover:bg-[#c66a2f] disabled:opacity-60 disabled:cursor-not-allowed text-white text-base tracking-[0.02em] transition-colors"
                style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
              >
                {status === 'sending' ? 'Sending…' : 'Send Inquiry'}
              </button>

              <p
                className="text-xs text-[#424242]/70 text-center"
                style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
              >
                We&rsquo;ll never share your details. By submitting, you agree to be contacted by Liberty India.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function inputCls(error?: string) {
  return `w-full px-4 py-3 rounded-[8px] bg-[#FFFDEC] border ${
    error ? 'border-red-400' : 'border-[#E9E4BF]'
  } text-[#141313] placeholder:text-[#424242]/50 outline-none focus:border-[#E07B39] focus:bg-white transition-colors`;
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
        className="block text-xs md:text-sm text-[#424242] mb-1.5 tracking-[0.02em]"
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
  return <p className="mt-1 text-xs text-red-600">{children}</p>;
}

function SuccessState({ onClose }: { onClose: () => void }) {
  return (
    <div className="mt-8 text-center py-6">
      <div className="inline-flex w-14 h-14 rounded-full bg-[#FFFDEC] border border-[#E9E4BF] items-center justify-center text-[#E07B39] mb-4">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
          <polyline points="4 12 10 18 20 6" />
        </svg>
      </div>
      <h3
        className="text-xl md:text-2xl font-semibold text-[#141313]"
        style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
      >
        Inquiry sent.
      </h3>
      <p
        className="mt-2 text-sm md:text-[15px] text-[#424242] font-light max-w-sm mx-auto"
        style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
      >
        Thank you. A confirmation has been sent to your inbox, and a specialist will be in touch within 24 hours.
      </p>
      <button
        type="button"
        onClick={onClose}
        className="mt-6 inline-flex items-center justify-center px-6 py-2.5 rounded-[10px] border border-[#E9E4BF] text-[#424242] hover:bg-[#FFFDEC] transition-colors"
        style={{ fontFamily: 'var(--font-merriweather), Georgia, serif' }}
      >
        Close
      </button>
    </div>
  );
}
