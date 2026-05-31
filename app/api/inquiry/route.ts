import { NextResponse } from 'next/server';

/**
 * Itinerary inquiry handler.
 *
 * POSTed to from the "Speak to an Expert" modal in DetailsSection. Sends
 * two emails via Resend (when configured):
 *   1. Company inbox  — the actual lead, with itinerary context.
 *   2. Customer inbox — a short branded acknowledgement.
 *
 * Env:
 *   RESEND_API_KEY  - required for real delivery
 *   INQUIRY_TO      - destination inbox (falls back to CONTACT_TO,
 *                     then India@liberty-int.com)
 *   CONTACT_FROM    - verified Resend sender (reused across the site)
 *
 * Without RESEND_API_KEY, both payloads are logged server-side and the
 * request still succeeds — same dev pattern as /api/contact.
 */

interface InquiryPayload {
  name?: string;
  email?: string;
  phone?: string;
  month?: string;
  travellers?: string | number;
  message?: string;
  itinerary?: { slug?: string; title?: string };
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: InquiryPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const name = body.name?.trim() ?? '';
  const email = body.email?.trim() ?? '';
  const phone = body.phone?.trim() ?? '';
  const month = body.month?.trim() ?? '';
  const travellers = body.travellers != null ? String(body.travellers).trim() : '';
  const message = body.message?.trim() ?? '';
  const itinerarySlug = body.itinerary?.slug?.trim() ?? '';
  const itineraryTitle = body.itinerary?.title?.trim() ?? '';

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = 'Please enter your name.';
  if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.';
  if (phone.replace(/\D/g, '').length < 7) errors.phone = 'Please enter a valid phone number.';

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const to =
    process.env.INQUIRY_TO ?? process.env.CONTACT_TO ?? 'India@liberty-int.com';
  const from = process.env.CONTACT_FROM ?? 'Liberty India <onboarding@resend.dev>';
  const apiKey = process.env.RESEND_API_KEY;

  const subjectTitle = itineraryTitle || 'Itinerary inquiry';

  const companyHtml = `
    <h2>New itinerary inquiry from libertyindia.com</h2>
    <p><strong>Itinerary:</strong> ${escapeHtml(itineraryTitle || '—')}${
      itinerarySlug ? ` <em>(${escapeHtml(itinerarySlug)})</em>` : ''
    }</p>
    <hr/>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Preferred travel month:</strong> ${escapeHtml(month || '—')}</p>
    <p><strong>Travellers:</strong> ${escapeHtml(travellers || '—')}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message || '—').replace(/\n/g, '<br/>')}</p>
  `;

  const customerHtml = `
    <div style="font-family: Georgia, serif; color: #424242; max-width: 560px; line-height: 1.6;">
      <h2 style="color: #141313; font-weight: 600;">Thank you for your inquiry, ${escapeHtml(
        name.split(' ')[0] || name,
      )}.</h2>
      <p>We've received your enquiry${
        itineraryTitle ? ` about <strong>${escapeHtml(itineraryTitle)}</strong>` : ''
      }.</p>
      <p>A Liberty India travel specialist will personally review your request and reach out within <strong>24 hours</strong> to start shaping your journey.</p>
      <p>If anything urgent comes up before then, you can reply to this email or write to us at <a href="mailto:${escapeHtml(
        to,
      )}" style="color: #E07B39;">${escapeHtml(to)}</a>.</p>
      <p style="margin-top: 28px;">Warmly,<br/>The Liberty India team</p>
    </div>
  `;

  if (!apiKey) {
    console.info('[inquiry] RESEND_API_KEY not set — logging payloads instead:');
    console.info('[inquiry] → company', {
      to,
      itinerary: itineraryTitle,
      slug: itinerarySlug,
      name,
      email,
      phone,
      month,
      travellers,
      message,
    });
    console.info('[inquiry] → customer auto-reply', { to: email });
    return NextResponse.json({ ok: true });
  }

  try {
    // 1. Company lead
    const companyRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `New itinerary inquiry: ${subjectTitle} — ${name}`,
        html: companyHtml,
      }),
    });

    if (!companyRes.ok) {
      const detail = await companyRes.text();
      console.error('[inquiry] Resend (company) error:', companyRes.status, detail);
      return NextResponse.json(
        { error: 'We could not send your inquiry. Please try again or email us directly.' },
        { status: 502 },
      );
    }

    // 2. Customer auto-reply — best-effort, do not fail the request if it errors
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [email],
        subject: 'We received your inquiry — Liberty India',
        html: customerHtml,
      }),
    })
      .then(async (res) => {
        if (!res.ok) {
          console.error(
            '[inquiry] Resend (customer auto-reply) error:',
            res.status,
            await res.text(),
          );
        }
      })
      .catch((err) => console.error('[inquiry] Auto-reply send failed:', err));

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('[inquiry] Unexpected error:', err);
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
