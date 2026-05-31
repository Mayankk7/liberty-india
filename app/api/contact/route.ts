import { NextResponse } from 'next/server';

/**
 * Contact form handler.
 *
 * Delivery: if RESEND_API_KEY is set, the enquiry is emailed via the Resend
 * REST API (no SDK dependency). Set these env vars in Vercel / .env.local:
 *   RESEND_API_KEY   - Resend API key
 *   CONTACT_TO       - destination inbox (default: India@liberty-int.com)
 *   CONTACT_FROM     - verified sender, e.g. "Liberty India <web@yourdomain>"
 * Without a key, the enquiry is logged server-side and the request still
 * succeeds, so the form is fully functional in development.
 */

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  purpose?: string;
  message?: string;
  agree?: boolean;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const name = body.name?.trim() ?? '';
  const email = body.email?.trim() ?? '';
  const phone = body.phone?.trim() ?? '';
  const purpose = body.purpose?.trim() ?? '';
  const message = body.message?.trim() ?? '';

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = 'Please enter your name.';
  if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.';
  if (phone.replace(/\D/g, '').length < 7) errors.phone = 'Please enter a valid phone number.';
  if (!purpose) errors.purpose = 'Please select a purpose.';
  if (body.agree !== true) errors.agree = 'Please accept the terms to continue.';

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const to = process.env.CONTACT_TO ?? 'India@liberty-int.com';
  const from = process.env.CONTACT_FROM ?? 'Liberty India <onboarding@resend.dev>';
  const apiKey = process.env.RESEND_API_KEY;

  const html = `
    <h2>New enquiry from libertyindia.com</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Purpose:</strong> ${escapeHtml(purpose)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message || '—').replace(/\n/g, '<br/>')}</p>
  `;

  if (!apiKey) {
    console.info('[contact] RESEND_API_KEY not set — logging enquiry instead:', {
      name,
      email,
      phone,
      purpose,
      message,
    });
    return NextResponse.json({ ok: true });
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New enquiry: ${purpose} — ${name}`,
        html,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error('[contact] Resend error:', res.status, detail);
      return NextResponse.json(
        { error: 'We could not send your message. Please try again or email us directly.' },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[contact] Unexpected error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 },
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
