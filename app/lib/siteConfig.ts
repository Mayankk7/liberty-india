/**
 * Third-party integration settings (tracking + HubSpot).
 *
 * Everything here is PUBLIC and is inlined into the browser bundle at build
 * time, so it works on a static host (no server needed). Set the values in
 * `.env.local` / the build environment, or replace the '' fallbacks below.
 *
 *   NEXT_PUBLIC_GTM_ID                      GTM-XXXXXXX
 *   NEXT_PUBLIC_HUBSPOT_PORTAL_ID           HubSpot account (Hub) ID, digits only
 *   NEXT_PUBLIC_HUBSPOT_NEWSLETTER_FORM_ID  GUID of the newsletter form
 *   NEXT_PUBLIC_HUBSPOT_ENQUIRY_FORM_ID     GUID of the enquiry form (optional)
 *   NEXT_PUBLIC_HUBSPOT_REGION             'eu1' for EU-hosted accounts, else leave empty
 *   NEXT_PUBLIC_PRIVACY_POLICY_URL          e.g. /privacy-policy/
 */

/** Google Tag Manager container. Empty = GTM is not loaded (consent still works). */
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID ?? '';

export const HUBSPOT = {
  portalId: process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID ?? '',
  newsletterFormId: process.env.NEXT_PUBLIC_HUBSPOT_NEWSLETTER_FORM_ID ?? '',
  /** Optional. When set, every enquiry form submits to this HubSpot form
   *  instead of the site's own /api routes (see app/lib/enquiry.ts). */
  enquiryFormId: process.env.NEXT_PUBLIC_HUBSPOT_ENQUIRY_FORM_ID ?? '',
  region: process.env.NEXT_PUBLIC_HUBSPOT_REGION ?? '',
};

/** True once both HubSpot IDs are set — the newsletter can actually submit. */
export const NEWSLETTER_CONFIGURED = Boolean(HUBSPOT.portalId && HUBSPOT.newsletterFormId);

/**
 * The newsletter UI is hidden on a production build until HubSpot is
 * configured, so a form that cannot submit never reaches visitors. It always
 * shows in `npm run dev` for review.
 */
export const NEWSLETTER_VISIBLE = NEWSLETTER_CONFIGURED || process.env.NODE_ENV !== 'production';

/** Linked from the cookie banner + newsletter consent line. Empty = no link shown. */
export const PRIVACY_POLICY_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL ?? '';

/**
 * Footer social icons. Paste the full profile URL; an empty value hides that
 * icon rather than leaving a dead link.
 */
export const SOCIAL_LINKS = {
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? '',
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? '',
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? '',
};

/** Seconds on a page before the newsletter pop-up appears. */
export const NEWSLETTER_POPUP_DELAY_S = 12;
