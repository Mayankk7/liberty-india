'use client';

import { useState } from 'react';

/**
 * Single "Download Itinerary" CTA with an OTP gate:
 *   1. Visitor enters their email → receives a 6-digit code.
 *   2. Visitor enters the code → it's verified server-side, Liberty India is
 *      notified who downloaded which journey, and the professionally formatted
 *      itinerary PDF is generated and downloaded.
 */
type Step = 'email' | 'otp' | 'done';

export default function DownloadActions({ slug, title }: { slug: string; title: string; fileName?: string }) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [token, setToken] = useState('');
  const [devOtp, setDevOtp] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const fontStyle = { fontFamily: 'var(--font-merriweather), Georgia, serif' };

  function close() {
    setOpen(false);
    setTimeout(() => {
      setStep('email');
      setEmail('');
      setOtp('');
      setToken('');
      setDevOtp(null);
      setError('');
      setBusy(false);
    }, 200);
  }

  async function requestCode(e?: React.FormEvent) {
    e?.preventDefault();
    setBusy(true);
    setError('');
    try {
      const res = await fetch('/api/itinerary-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ step: 'request', email, slug, title }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data?.errors?.email || data?.error || 'Could not send the code. Please try again.');
        return;
      }
      setToken(data.token);
      setDevOtp(data.devOtp ?? null);
      setStep('otp');
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setBusy(false);
    }
  }

  async function verifyCode(e?: React.FormEvent) {
    e?.preventDefault();
    setBusy(true);
    setError('');
    try {
      const res = await fetch('/api/itinerary-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ step: 'verify', token, otp }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data?.errors?.otp || data?.error || 'Verification failed. Please try again.');
        return;
      }
      // Trigger the PDF download.
      const a = document.createElement('a');
      a.href = `/api/itinerary-pdf?slug=${encodeURIComponent(slug)}&t=${encodeURIComponent(data.downloadToken)}`;
      a.rel = 'noopener';
      document.body.appendChild(a);
      a.click();
      a.remove();
      setStep('done');
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="li-no-print mt-8 flex flex-wrap gap-3">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 px-6 py-2.5 border border-[#E9E4BF] bg-white hover:bg-[#FFFDEC] text-[#141313] text-sm tracking-wider transition-colors cursor-pointer"
        style={fontStyle}
      >
        DOWNLOAD ITINERARY
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Download itinerary"
          onClick={close}
        >
          <div className="relative w-full max-w-md bg-white rounded-lg shadow-2xl p-6 md:p-8" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-3 right-3 text-[#8d8d8d] hover:text-[#141313] cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {step === 'email' && (
              <form onSubmit={requestCode}>
                <h3 className="text-xl md:text-2xl font-semibold text-[#141313] mb-2" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                  Download itinerary
                </h3>
                <p className="text-sm leading-relaxed text-[#424242] mb-5" style={fontStyle}>
                  Enter your email and we&apos;ll send a verification code to download <strong>{title}</strong>.
                </p>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  aria-label="Email address"
                  className="w-full px-4 py-3 border border-[#E9E4BF] rounded-md outline-none focus:border-[#E07B39] text-[15px] text-[#424242]"
                  style={fontStyle}
                />
                {error && <p className="mt-2 text-sm text-red-600" style={fontStyle}>{error}</p>}
                <button
                  type="submit"
                  disabled={busy}
                  className="mt-5 w-full px-8 py-3 text-sm font-medium text-white rounded-full bg-[#E07B39] hover:brightness-110 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  style={fontStyle}
                >
                  {busy ? 'Sending…' : 'Send verification code'}
                </button>
              </form>
            )}

            {step === 'otp' && (
              <form onSubmit={verifyCode}>
                <h3 className="text-xl md:text-2xl font-semibold text-[#141313] mb-2" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                  Enter verification code
                </h3>
                <p className="text-sm leading-relaxed text-[#424242] mb-5" style={fontStyle}>
                  We&apos;ve sent a 6-digit code to <strong>{email}</strong>. Enter it below to download your itinerary.
                </p>
                {devOtp && (
                  <p className="mb-3 text-xs text-[#8a6d3b] bg-[#FFFDEC] border border-[#E9E4BF] rounded px-3 py-2" style={fontStyle}>
                    Dev mode (email not configured): your code is <strong>{devOtp}</strong>
                  </p>
                )}
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="\d{6}"
                  maxLength={6}
                  required
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  placeholder="••••••"
                  aria-label="Verification code"
                  className="w-full px-4 py-3 border border-[#E9E4BF] rounded-md outline-none focus:border-[#E07B39] text-[20px] tracking-[0.4em] text-center text-[#141313]"
                  style={fontStyle}
                />
                {error && <p className="mt-2 text-sm text-red-600" style={fontStyle}>{error}</p>}
                <button
                  type="submit"
                  disabled={busy || otp.length !== 6}
                  className="mt-5 w-full px-8 py-3 text-sm font-medium text-white rounded-full bg-[#E07B39] hover:brightness-110 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  style={fontStyle}
                >
                  {busy ? 'Verifying…' : 'Verify & download'}
                </button>
                <button
                  type="button"
                  onClick={() => requestCode()}
                  disabled={busy}
                  className="mt-3 w-full text-xs text-[#E07B39] hover:underline cursor-pointer disabled:opacity-60"
                  style={fontStyle}
                >
                  Resend code
                </button>
              </form>
            )}

            {step === 'done' && (
              <div className="text-center py-4">
                <div className="mx-auto mb-4 w-12 h-12 rounded-full bg-[#FFFDEC] flex items-center justify-center text-[#E07B39]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#141313] mb-2" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                  Your download has started
                </h3>
                <p className="text-[15px] leading-relaxed text-[#424242]" style={fontStyle}>
                  If it doesn&apos;t begin automatically, check your browser&apos;s downloads. Thank you for your interest in <strong>{title}</strong>.
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="mt-6 inline-block px-8 py-2.5 text-sm font-medium text-white rounded-full bg-[#E07B39] hover:brightness-110 transition-all cursor-pointer"
                  style={fontStyle}
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
