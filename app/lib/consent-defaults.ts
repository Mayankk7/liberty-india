export const CONSENT_OPEN_EVENT = 'li:open-cookie-settings';
export const CONSENT_KEY = 'li_cookie_consent';
export const CONSENT_VERSION = 2;
export const CONSENT_DAYS = 180;

export interface ConsentChoice {
  analytics: boolean;
  marketing: boolean;
}

export const ALL_OFF: ConsentChoice = { analytics: false, marketing: false };

export function consentSignals({ analytics, marketing }: ConsentChoice) {
  const ad = marketing ? 'granted' : 'denied';
  return {
    analytics_storage: analytics ? 'granted' : 'denied',
    ad_storage: ad,
    ad_user_data: ad,
    ad_personalization: ad,
  };
}

// Synchronous, first-party bootstrap. No vendor script runs in the default state.
export const consentDefaults = `window.dataLayer=window.dataLayer||[];
window.gtag=function(){window.dataLayer.push(arguments)};
gtag('consent','default',${JSON.stringify(consentSignals(ALL_OFF))});
gtag('set','ads_data_redaction',true);`;
