'use client';

import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import PrivacyPolicyLink from '../PrivacyPolicyLink';
import { sendEnquiry } from '../../lib/enquiry';

type CustomizedProgramsProps = {
  imageSrc: string;
  imageAlt?: string;
};

const EMPTY = { name: '', org: '', email: '', phone: '', brief: '', privacy: false, updates: false };

const labelCls = 'block text-[10px] uppercase tracking-[0.22em] text-[#424242]/60 mb-1.5';
const inputCls =
  'w-full bg-transparent border-0 border-b border-[#42424226] px-0 py-2 text-[14px] text-[#424242] focus:outline-none focus:border-[#E07B39] transition-colors';
const sans = { fontFamily: 'var(--font-merriweather), Georgia, serif' };

export default function CustomizedPrograms({ imageSrc, imageAlt }: CustomizedProgramsProps) {
  const pathname = usePathname();
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [error, setError] = useState('');

  const set = <K extends keyof typeof EMPTY>(key: K, value: (typeof EMPTY)[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  // The fields' native `required` attributes validate before this runs.
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    setError('');

    const purpose = pathname.includes('incentives') ? 'incentive-programs' : 'meetings-conferences';
    const updates = form.updates ? 'Yes' : 'No';
    const extras = [form.org && `Organization: ${form.org}`, `Send updates: ${updates}`]
      .filter(Boolean)
      .join('\n');

    try {
      const res = await sendEnquiry({
        apiPath: '/api/contact',
        apiBody: {
          name: form.name,
          email: form.email,
          phone: form.phone,
          purpose,
          message: [extras, form.brief].filter(Boolean).join('\n\n'),
          agree: form.privacy,
        },
        formName: 'customised_programme',
        formLocation: purpose,
        contact: {
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.org,
          message: form.brief,
          details: { Purpose: purpose, 'Send updates': updates },
        },
      });
      if (res.ok) {
        setStatus('sent');
        setForm(EMPTY);
        return;
      }
      const first = res.data.errors ? Object.values(res.data.errors)[0] : res.data.error;
      setError(first || 'Something went wrong. Please try again.');
      setStatus('error');
    } catch {
      setError('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  };

  return (
    <section className="w-full flex flex-col md:flex-row items-stretch bg-[#FDF8E8] md:h-screen">
      {/* Left: Image */}
      <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-0 md:h-full">
        <Image
          src={imageSrc}
          alt={imageAlt ?? 'Customised Programs'}
          fill
          className="object-cover object-center"
          priority={false}
        />
      </div>

      {/* Right: Form column */}
      <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-16 md:px-8 md:py-20 lg:px-10">
        <div className="w-full max-w-md">
          {/* Eyebrow */}
          <p className="text-[11px] tracking-[0.34em] uppercase text-[#E07B39] mb-4 font-medium" style={sans}>
            Get in touch
          </p>

          {/* Heading */}
          <h2
            className="text-[30px] md:text-[36px] font-normal mb-4 text-[#424242] leading-[1.1]"
            style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          >
            Customised Programs
          </h2>

          {/* Thin brand accent rule */}
          <div className="w-12 h-px bg-[#E07B39] mb-6" />

          {status === 'sent' ? (
            <p
              role="status"
              aria-live="polite"
              className="text-[15px] text-[#424242] leading-relaxed border-l-2 border-[#E07B39] pl-4"
            >
              Thank you — we&apos;ve received your brief. A Liberty India specialist will be in touch shortly.
            </p>
          ) : (
            <>
              {/* Lede */}
              <p className="text-[14.5px] text-[#424242]/70 mb-7 leading-relaxed">
                Share your brief and our team will design a tailored programme for your group.
              </p>

              <form onSubmit={onSubmit} className="space-y-5 w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
                  <div>
                    <label htmlFor="cp-name" className={labelCls} style={sans}>
                      Full Name *
                    </label>
                    <input
                      id="cp-name"
                      type="text"
                      required
                      minLength={2}
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => set('name', e.target.value)}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label htmlFor="cp-org" className={labelCls} style={sans}>
                      Organization
                    </label>
                    <input
                      id="cp-org"
                      type="text"
                      autoComplete="organization"
                      value={form.org}
                      onChange={(e) => set('org', e.target.value)}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label htmlFor="cp-email" className={labelCls} style={sans}>
                      Email *
                    </label>
                    <input
                      id="cp-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => set('email', e.target.value)}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label htmlFor="cp-phone" className={labelCls} style={sans}>
                      Phone *
                    </label>
                    <input
                      id="cp-phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => set('phone', e.target.value)}
                      className={inputCls}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="cp-plans" className={labelCls} style={sans}>
                    Brief / requirements
                  </label>
                  <textarea
                    id="cp-plans"
                    value={form.brief}
                    onChange={(e) => set('brief', e.target.value)}
                    className={`${inputCls} resize-none min-h-[80px]`}
                  />
                </div>

                <div className="flex flex-col gap-2 pt-1">
                  <label className="flex items-start gap-2 text-[12px] text-[#424242]/75 cursor-pointer leading-snug">
                    <input
                      type="checkbox"
                      required
                      checked={form.privacy}
                      onChange={(e) => set('privacy', e.target.checked)}
                      className="accent-[#E07B39] mt-0.5 w-3.5 h-3.5 shrink-0"
                    />
                    <span>
                      I accept the <PrivacyPolicyLink />.
                    </span>
                  </label>
                  <label className="flex items-start gap-2 text-[12px] text-[#424242]/75 cursor-pointer leading-snug">
                    <input
                      type="checkbox"
                      checked={form.updates}
                      onChange={(e) => set('updates', e.target.checked)}
                      className="accent-[#E07B39] mt-0.5 w-3.5 h-3.5 shrink-0"
                    />
                    <span>Send me updates from Liberty India.</span>
                  </label>
                </div>

                {status === 'error' && (
                  <p role="alert" className="text-[13px] text-red-600">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group inline-flex items-center gap-2.5 px-10 py-3.5 bg-[#E07B39] text-white text-[12px] tracking-[0.32em] uppercase font-medium hover:bg-[#c66a2f] focus:outline-none focus:ring-2 focus:ring-[#E07B39] focus:ring-offset-2 transition-all mt-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  style={sans}
                >
                  {status === 'sending' ? 'Sending…' : 'Send brief'}
                  <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
