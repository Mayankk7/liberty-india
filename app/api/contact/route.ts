import { createHash } from 'node:crypto';
import { NextResponse } from 'next/server';
import { ENQUIRY_CONSENT_TEXT } from '../../lib/contact';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DELIVERY_ERROR = 'We could not confirm your enquiry. Please try again or email India@liberty-india.com.';

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
  function field(key: string): string {
    return typeof body[key] === 'string' ? body[key].trim() : '';
  }
  const name = field('name');
  const email = field('email');
  const phone = field('phone');
  const purpose = field('purpose');
  const country = field('country');
  const travelDates = field('travelDates');
  const message = field('message');

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = 'Please enter your name.';
  if (!EMAIL_RE.test(email)) errors.email = 'Please enter a valid email address.';
  if (phone.replace(/\D/g, '').length < 7) errors.phone = 'Please enter a valid phone number.';
  if (!purpose) errors.purpose = 'Please select a purpose.';
  if (body.agree !== true) errors.agree = 'Please agree to be contacted about your enquiry.';
  if (Object.keys(errors).length) return NextResponse.json({ errors }, { status: 422 });

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM;
  const to = process.env.CONTACT_TO || 'India@liberty-india.com';
  const portal = process.env.HUBSPOT_PORTAL_ID || process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
  const form = process.env.HUBSPOT_ENQUIRY_FORM_ID || process.env.NEXT_PUBLIC_HUBSPOT_ENQUIRY_FORM_ID;
  if (!apiKey || !from || !portal || !form) {
    return NextResponse.json({ error: DELIVERY_ERROR }, { status: 503 });
  }

  const details = [
    'Purpose: ' + purpose,
    'Country of residence: ' + (country || 'Unspecified'),
    'Travel dates: ' + (travelDates || 'Flexible'),
    'Message: ' + (message || 'None supplied'),
  ].join('\n');
  const emailBody = JSON.stringify({
    from, to: [to], reply_to: email, subject: `New enquiry: ${purpose} — ${name}`,
    text: `New enquiry from liberty-india.com\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n${details}`,
  });
  // Retrying after a CRM error must not send the inbox a second copy.
  const key = createHash('sha256').update(field('submissionId') + '\n' + emailBody).digest('hex');
  try {
    const mail = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + apiKey,
        'Content-Type': 'application/json',
        'Idempotency-Key': 'contact/' + key,
      },
      body: emailBody,
      signal: AbortSignal.timeout(10000),
    });
    if (!mail.ok) throw new Error('Resend HTTP ' + mail.status);

    const [firstname, ...rest] = name.split(/\s+/);
    const fields = { firstname, lastname: rest.join(' '), email, phone, message: details };
    const region = process.env.HUBSPOT_REGION || process.env.NEXT_PUBLIC_HUBSPOT_REGION;
    const host = region === 'eu1' ? 'api-eu1.hsforms.com' : 'api.hsforms.com';
    const submission = await fetch(`https://${host}/submissions/v3/integration/submit/${encodeURIComponent(portal)}/${encodeURIComponent(form)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: Object.entries(fields).filter(([, value]) => value).map(([name, value]) => ({
          objectTypeId: '0-1', name, value,
        })),
        legalConsentOptions: { consent: { consentToProcess: true, text: ENQUIRY_CONSENT_TEXT } },
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!submission.ok) throw new Error('HubSpot HTTP ' + submission.status);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[contact] Delivery failed', error instanceof Error ? error.message : 'Unknown error');
    return NextResponse.json({ error: DELIVERY_ERROR }, { status: 502 });
  }
}
