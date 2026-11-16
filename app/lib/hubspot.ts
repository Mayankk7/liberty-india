import { HUBSPOT } from './siteConfig';

/**
 * Submits straight from the browser to HubSpot's public Forms endpoint. This
 * endpoint needs no API key and allows cross-origin calls, so it works on a
 * static host. The form (and each field's internal name) must exist in the
 * HubSpot account.
 */
export interface HubspotResult {
  ok: boolean;
  error?: string;
}

function readCookie(name: string): string | undefined {
  const m = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return m ? decodeURIComponent(m[1]) : undefined;
}

export async function submitHubspotForm(
  formId: string,
  fields: Record<string, string>,
  consentText: string,
): Promise<HubspotResult> {
  if (!HUBSPOT.portalId || !formId) {
    return { ok: false, error: 'Newsletter sign-up is not connected yet. Please try again later.' };
  }

  const host = HUBSPOT.region ? `api-${HUBSPOT.region}.hsforms.com` : 'api.hsforms.com';
  const url = `https://${host}/submissions/v3/integration/submit/${HUBSPOT.portalId}/${formId}`;
  // Only present if the HubSpot tracking code is installed; links the
  // submission to the visitor's browsing history in HubSpot.
  const hutk = readCookie('hubspotutk');

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: Object.entries(fields)
          .filter(([, value]) => value !== '')
          .map(([name, value]) => ({ objectTypeId: '0-1', name, value })),
        context: {
          pageUri: window.location.href,
          pageName: document.title,
          ...(hutk ? { hutk } : {}),
        },
        legalConsentOptions: {
          consent: { consentToProcess: true, text: consentText },
        },
      }),
    });

    if (res.ok) return { ok: true };

    const data = await res.json().catch(() => null);
    const invalidEmail = data?.errors?.some((e: { errorType?: string }) =>
      ['INVALID_EMAIL', 'BLOCKED_EMAIL'].includes(e.errorType ?? ''),
    );
    return {
      ok: false,
      error: invalidEmail
        ? 'Please enter a valid work email address.'
        : 'Something went wrong. Please try again.',
    };
  } catch {
    return { ok: false, error: 'Network error. Please check your connection and try again.' };
  }
}
