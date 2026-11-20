import { ALL_OFF, CONSENT_DAYS, CONSENT_KEY, CONSENT_VERSION, consentSignals, type ConsentChoice } from './consent-defaults';

// The fallbacks are the public identifiers displayed by Liberty India's live site.
const gaId = process.env.NEXT_PUBLIC_GA4_ID ?? 'G-ZF4KF99T6G';
const metaId = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? '2581942485659902';
const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
const linkedInId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;

type Pixel = ((...args: unknown[]) => void) & {
  queue: unknown[][];
  callMethod?: (...args: unknown[]) => void;
  push?: Pixel;
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    fbq?: Pixel;
    _fbq?: Pixel;
    _linkedin_data_partner_ids?: string[];
  }
}

export interface ConsentReceipt extends ConsentChoice {
  version: number;
  timestamp: number;
}

let current: ConsentChoice = ALL_OFF;
let sessionReceipt: ConsentReceipt | null = null;
const configuredGoogleTags = new Set<string>();

export function readConsent(): ConsentReceipt | null {
  let saved = sessionReceipt;
  try {
    saved = JSON.parse(localStorage.getItem(CONSENT_KEY) ?? 'null');
  } catch { /* Storage can be unavailable. Use this page's choice. */ }
  if (!saved || saved.version !== CONSENT_VERSION ||
      typeof saved.analytics !== 'boolean' || typeof saved.marketing !== 'boolean' ||
      !Number.isFinite(saved.timestamp) || saved.timestamp > Date.now() ||
      Date.now() - saved.timestamp >= CONSENT_DAYS * 86_400_000) return null;
  return saved;
}

function loadScript(src: string) {
  const script = document.createElement('script');
  script.async = true;
  script.src = src;
  document.head.appendChild(script);
}

function enableGoogleTag(id: string) {
  if (configuredGoogleTags.has(id)) return;
  if (!configuredGoogleTags.size) {
    window.gtag('js', new Date());
    loadScript('https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id));
  }
  configuredGoogleTags.add(id);
  window.gtag('config', id);
}

function enableMarketing() {
  if (adsId) enableGoogleTag(adsId);
  if (metaId && !window.fbq) {
    const pixel: Pixel = Object.assign((...args: unknown[]) => {
      if (pixel.callMethod) pixel.callMethod(...args);
      else pixel.queue.push(args);
    }, { queue: [] as unknown[][], loaded: true, version: '2.0' });
    pixel.push = pixel;
    window.fbq = window._fbq = pixel;
    pixel('init', metaId);
    pixel('track', 'PageView');
    loadScript('https://connect.facebook.net/en_US/fbevents.js');
  }
  if (linkedInId) {
    window._linkedin_data_partner_ids = [linkedInId];
    loadScript('https://snap.licdn.com/li.lms-analytics/insight.min.js');
  }
}

export function applyConsent(choice: ConsentChoice) {
  const previous = current;
  current = choice;
  window.gtag('consent', 'update', consentSignals(choice));
  if (previous.marketing && !choice.marketing) window.fbq?.('consent', 'revoke');
  if ((previous.marketing && !choice.marketing) || (previous.analytics && !choice.analytics)) {
    // Unload already-running vendor code, including LinkedIn's navigation listeners.
    window.location.reload();
    return;
  }
  if (choice.analytics && gaId) enableGoogleTag(gaId);
  if (choice.marketing && !previous.marketing) enableMarketing();
}

export function saveConsent(choice: ConsentChoice) {
  const receipt = { ...choice, version: CONSENT_VERSION, timestamp: Date.now() };
  sessionReceipt = receipt;
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(receipt));
  } catch { /* Still apply the choice when storage is blocked. */ }
  void fetch('/api/cookie-consent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(receipt),
    keepalive: true,
  }).catch(() => { /* The local receipt also records the decision. */ });
  applyConsent(choice);
}
