import { NextResponse } from 'next/server';
import { sign, verifyToken, otpHash, generateOtp } from '../../lib/otp';

export const runtime = 'nodejs';

/**
 * OTP-gated itinerary download.
 *
 *   step: 'request' { email, slug, title }
 *     → emails a 6-digit code to the visitor, returns a signed token that
 *       carries an HMAC of the code (not the code itself).
 *
 *   step: 'verify'  { token, otp }
 *     → checks the code, emails Liberty India a note of who downloaded which
 *       journey, and returns a short-lived `downloadToken` that authorises the
 *       PDF download from /api/itinerary-pdf.
 *
 * Env: RESEND_API_KEY, CONTACT_FROM, INQUIRY_TO / CONTACT_TO, OTP_SECRET.
 * Without RESEND_API_KEY the payloads are logged and the code is returned as
 * `devOtp` so local testing still works.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const OTP_TTL = 10 * 60 * 1000; // 10 minutes
const DL_TTL = 15 * 60 * 1000; // 15 minutes

interface OtpPayload {
  e: string; // email
  s: string; // slug
  t: string; // title
  x: number; // expiry (ms)
  h: string; // otp hash
}

async function sendEmail(opts: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM ?? 'Liberty India <onboarding@resend.dev>';
  if (!apiKey) {
    console.info('[otp] RESEND_API_KEY not set — would send:', opts.to, '|', opts.subject);
    return true;
  }
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [opts.to],
      subject: opts.subject,
      html: opts.html,
      ...(opts.replyTo ? { reply_to: opts.replyTo } : {}),
    }),
  });
  if (!res.ok) {
    console.error('[otp] Resend error:', res.status, await res.text());
    return false;
  }
  return true;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  if (body.step === 'request') return handleRequest(body);
  if (body.step === 'verify') return handleVerify(body);
  return NextResponse.json({ error: 'Unknown step.' }, { status: 400 });
}

async function handleRequest(body: Record<string, unknown>) {
  const email = String(body.email ?? '').trim();
  const slug = String(body.slug ?? '').trim();
  const title = String(body.title ?? 'your itinerary').trim();

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ errors: { email: 'Please enter a valid email address.' } }, { status: 422 });
  }
  if (!slug) return NextResponse.json({ error: 'Missing itinerary.' }, { status: 400 });

  const otp = generateOtp();
  const token = sign({
    e: email.toLowerCase(),
    s: slug,
    t: title,
    x: Date.now() + OTP_TTL,
    h: otpHash(otp, email, slug),
  } satisfies OtpPayload);

  const html = `
    <div style="font-family: Georgia, serif; color: #424242; max-width: 520px; line-height: 1.6;">
      <h2 style="color: #141313; font-weight: 600;">Your download verification code</h2>
      <p>Use this code to download <strong>${escapeHtml(title)}</strong>:</p>
      <p style="font-size: 32px; font-weight: 700; letter-spacing: 8px; color: #E07B39; margin: 20px 0;">${otp}</p>
      <p style="font-size: 13px; color: #6b6b6b;">This code expires in 10 minutes. If you didn't request it, you can ignore this email.</p>
      <p style="margin-top: 24px;">Warmly,<br/>The Liberty India team</p>
    </div>`;

  await sendEmail({ to: email, subject: 'Your Liberty India download code', html });

  const devOtp = process.env.RESEND_API_KEY ? undefined : otp;
  return NextResponse.json({ ok: true, token, ...(devOtp ? { devOtp } : {}) });
}

async function handleVerify(body: Record<string, unknown>) {
  const token = String(body.token ?? '');
  const otp = String(body.otp ?? '').trim();

  const payload = verifyToken<OtpPayload>(token);
  if (!payload) {
    return NextResponse.json({ error: 'Session expired. Please request a new code.' }, { status: 400 });
  }
  if (typeof payload.x !== 'number' || payload.x < Date.now()) {
    return NextResponse.json({ error: 'Your code has expired. Please request a new one.' }, { status: 400 });
  }
  if (!/^\d{6}$/.test(otp) || otpHash(otp, payload.e, payload.s) !== payload.h) {
    return NextResponse.json({ errors: { otp: 'Incorrect code. Please try again.' } }, { status: 422 });
  }

  // Notify Liberty India who downloaded which journey.
  const to = process.env.INQUIRY_TO ?? process.env.CONTACT_TO ?? 'India@liberty-int.com';
  await sendEmail({
    to,
    replyTo: payload.e,
    subject: `Itinerary downloaded: ${payload.t}`,
    html: `
      <div style="font-family: Georgia, serif; color: #424242; max-width: 560px; line-height: 1.6;">
        <h2 style="color: #141313; font-weight: 600;">An itinerary was downloaded</h2>
        <p><strong>Journey:</strong> ${escapeHtml(payload.t)} <em>(${escapeHtml(payload.s)})</em></p>
        <p><strong>Downloaded by:</strong> <a href="mailto:${escapeHtml(payload.e)}" style="color:#E07B39;">${escapeHtml(payload.e)}</a></p>
      </div>`,
  });

  const downloadToken = sign({ e: payload.e, s: payload.s, x: Date.now() + DL_TTL, dl: 1 });
  return NextResponse.json({ ok: true, downloadToken });
}
