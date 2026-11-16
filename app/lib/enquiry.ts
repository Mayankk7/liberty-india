import { trackLead } from './consent';
import { submitHubspotForm } from './hubspot';
import { HUBSPOT } from './siteConfig';

/**
 * One submit path for every enquiry form on the site.
 *
 *  - If a HubSpot enquiry form is configured (NEXT_PUBLIC_HUBSPOT_ENQUIRY_FORM_ID)
 *    the enquiry goes straight from the browser to HubSpot. This is the path
 *    that works on a static host.
 *  - Otherwise it posts to the site's own API route (needs a Node server).
 *
 * Either way, `generate_lead` is pushed to the dataLayer only once the
 * enquiry has actually been accepted.
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ENQUIRY_CONSENT_TEXT =
  'I agree to Liberty India storing and processing my details to respond to my enquiry.';

export interface EnquiryResult {
  ok: boolean;
  status: number;
  // Shape mirrors the API routes: { error?: string; errors?: Record<string, string> }
  data: { error?: string; errors?: Record<string, string> };
}

interface EnquiryArgs {
  /** Own-server fallback, e.g. '/api/contact'. */
  apiPath: string;
  apiBody: Record<string, unknown>;
  /** Reported on the generate_lead event. */
  formName: string;
  formLocation: string;
  /** What HubSpot receives. `details` is appended to the message. */
  contact: {
    name: string;
    email: string;
    phone?: string;
    company?: string;
    message?: string;
    details?: Record<string, string | undefined>;
  };
}

/** Same rules the API routes enforce, so the HubSpot path validates identically. */
function contactErrors(args: EnquiryArgs): Record<string, string> {
  const { contact, apiPath, apiBody } = args;
  const errors: Record<string, string> = {};
  if (contact.name.trim().length < 2) errors.name = 'Please enter your name.';
  if (!EMAIL_RE.test(contact.email.trim())) errors.email = 'Please enter a valid email address.';
  if ((contact.phone ?? '').replace(/\D/g, '').length < 7) errors.phone = 'Please enter a valid phone number.';
  if (apiPath === '/api/contact') {
    if (!apiBody.purpose) errors.purpose = 'Please select a purpose.';
    if (apiBody.agree !== true) errors.agree = 'Please accept the terms to continue.';
  }
  return errors;
}

export async function sendEnquiry(args: EnquiryArgs): Promise<EnquiryResult> {
  const { contact } = args;
  let result: EnquiryResult;

  if (HUBSPOT.portalId && HUBSPOT.enquiryFormId) {
    const errors = contactErrors(args);
    if (Object.keys(errors).length > 0) return { ok: false, status: 422, data: { errors } };

    const [first, ...rest] = contact.name.trim().split(/\s+/);
    const details = Object.entries(contact.details ?? {})
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`)
      .join('\n');
    const hs = await submitHubspotForm(
      HUBSPOT.enquiryFormId,
      {
        firstname: first,
        lastname: rest.join(' '),
        email: contact.email.trim(),
        phone: (contact.phone ?? '').trim(),
        company: (contact.company ?? '').trim(),
        message: [details, (contact.message ?? '').trim()].filter(Boolean).join('\n\n'),
      },
      ENQUIRY_CONSENT_TEXT,
    );
    result = { ok: hs.ok, status: hs.ok ? 200 : 502, data: hs.ok ? {} : { error: hs.error } };
  } else {
    // Throws on a network failure — callers already catch that.
    const res = await fetch(args.apiPath, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(args.apiBody),
    });
    result = { ok: res.ok, status: res.status, data: res.ok ? {} : await res.json().catch(() => ({})) };
  }

  if (result.ok) trackLead(args.formName, args.formLocation);
  return result;
}
