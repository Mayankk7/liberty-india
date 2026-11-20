import { CONSENT_VERSION } from '../../lib/consent-defaults';

export async function POST(request: Request) {
  const choice = await request.json().catch(() => null);
  if (choice?.version !== CONSENT_VERSION || typeof choice.analytics !== 'boolean' ||
      typeof choice.marketing !== 'boolean') {
    return new Response(null, { status: 400 });
  }
  // Record choices without adding a visitor identifier or enquiry details.
  console.info('[cookie-consent]', {
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
    analytics: choice.analytics,
    marketing: choice.marketing,
  });
  return new Response(null, { status: 204 });
}
