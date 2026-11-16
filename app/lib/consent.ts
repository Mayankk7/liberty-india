/**
 * Cookie consent state + Google Consent Mode v2 plumbing.
 *
 * Flow:
 *  1. `consentBootstrapScript()` runs inline in <head> BEFORE Google Tag
 *     Manager. It sets every consent signal to "denied" by default, then
 *     re-applies a previously saved choice, then loads GTM.
 *  2. The banner (`CookieConsent.tsx`) calls `saveConsent()` when the visitor
 *     chooses, which stores the choice and sends a `consent update`.
 *
 * Entirely client-side (localStorage) — no server required.
 */

export const CONSENT_STORAGE_KEY = 'li_cookie_consent';
export const CONSENT_VERSION = 1;
/** Ask again after this long. */
export const CONSENT_MAX_AGE_DAYS = 180;

/** Fired on `window` whenever the saved choice changes. */
export const CONSENT_CHANGED_EVENT = 'li:consent-changed';
/** Dispatch on `window` to reopen the preferences panel (footer link). */
export const CONSENT_OPEN_EVENT = 'li:open-cookie-settings';

export interface ConsentChoice {
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

interface StoredConsent extends ConsentChoice {
  v: number;
  ts: number;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const g = (granted: boolean) => (granted ? 'granted' : 'denied');

/** Maps the three banner categories onto the Consent Mode v2 signals. */
export function toConsentSignals(c: ConsentChoice) {
  return {
    ad_storage: g(c.marketing),
    ad_user_data: g(c.marketing),
    ad_personalization: g(c.marketing),
    analytics_storage: g(c.analytics),
    functionality_storage: g(c.preferences),
    personalization_storage: g(c.preferences),
    security_storage: 'granted',
  };
}

/** The saved choice, or null if the visitor has not chosen (or it expired). */
export function readConsent(): ConsentChoice | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw) as StoredConsent;
    if (s.v !== CONSENT_VERSION) return null;
    if (Date.now() - s.ts > CONSENT_MAX_AGE_DAYS * 86_400_000) return null;
    return { analytics: !!s.analytics, marketing: !!s.marketing, preferences: !!s.preferences };
  } catch {
    return null;
  }
}

export function saveConsent(choice: ConsentChoice) {
  const stored: StoredConsent = { ...choice, v: CONSENT_VERSION, ts: Date.now() };
  try {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(stored));
  } catch {
    // Storage blocked (private mode): the choice still applies to this page view.
  }
  window.gtag?.('consent', 'update', toConsentSignals(choice));
  // Custom event so GTM triggers can fire tags right after a choice is made.
  pushDataLayer({
    event: 'cookie_consent_update',
    consent_analytics: choice.analytics,
    consent_marketing: choice.marketing,
    consent_preferences: choice.preferences,
  });
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT, { detail: choice }));
}

export function pushDataLayer(payload: Record<string, unknown>) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
}

/**
 * Lead conversion for GA4 / Meta (via GTM). Call ONLY after a form has been
 * accepted by its endpoint.
 */
export function trackLead(formName: string, formLocation: string) {
  pushDataLayer({
    event: 'generate_lead',
    form_name: formName,
    form_location: formLocation,
    page_path: window.location.pathname,
  });
}

/**
 * Inline <head> script. Must be the first script on the page so the default
 * (denied) consent state exists before any Google tag reads it.
 */
export function consentBootstrapScript(gtmId: string): string {
  const denied = JSON.stringify({
    ...toConsentSignals({ analytics: false, marketing: false, preferences: false }),
    wait_for_update: 500,
  });
  const gtm = /^GTM-[A-Z0-9]+$/.test(gtmId)
    ? `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`
    : '';
  return `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',${denied});
gtag('set','ads_data_redaction',true);
try{var s=JSON.parse(localStorage.getItem('${CONSENT_STORAGE_KEY}')||'null');
if(s&&s.v===${CONSENT_VERSION}&&Date.now()-s.ts<${CONSENT_MAX_AGE_DAYS}*864e5){var y=function(b){return b?'granted':'denied'};
gtag('consent','update',{ad_storage:y(s.marketing),ad_user_data:y(s.marketing),ad_personalization:y(s.marketing),analytics_storage:y(s.analytics),functionality_storage:y(s.preferences),personalization_storage:y(s.preferences),security_storage:'granted'});}}catch(e){}
${gtm}`;
}
