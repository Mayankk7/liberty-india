import PolicyPage from '../components/PolicyPage';
import { pageMetadata } from '../lib/seo';
import { CONSENT_DAYS } from '../lib/consent-defaults';

export const metadata = pageMetadata('/cookie-policy/');

export default function CookiePolicy() {
  return (
    <PolicyPage title="Cookie Policy">
      <p>On your first visit you can accept all optional cookies, reject them or choose which categories to allow. Your choice applies to this browser. You can browse our journeys and send a travel enquiry with optional cookies turned off.</p>
      <h2>Necessary storage</h2>
      <p>We save your category choices, the date and the policy version in your browser’s local storage for up to {CONSENT_DAYS} days. This lets us remember your decision. We also log the categories you chose and the time of the decision.</p>
      <h2>Analytics</h2>
      <p>With analytics consent, Google Analytics 4 uses browser identifiers such as the _ga cookie to measure visits, pages viewed and how people navigate the site. We use these measurements to understand which journeys and services visitors explore.</p>
      <h2>Marketing</h2>
      <p>With marketing consent, Meta Pixel, Google Ads and LinkedIn Insight Tag can help measure advertising and show relevant ads when those services are enabled. They can receive the page address, browser identifiers and information about your device. Examples of identifiers include Meta’s _fbp and Google’s _gcl cookies.</p>
      <h2>Changing your choice</h2>
      <p>Select Cookie settings in the footer, change your categories and save. Withdrawing consent stops the relevant tags from loading on subsequent visits. You can also remove cookies and local storage through your browser settings. Clearing the saved choice will bring back the banner.</p>
      <p>For questions about cookies, email <a href="mailto:India@liberty-india.com">India@liberty-india.com</a>. Our <a href="/privacy-policy/">Privacy Policy</a> explains how Liberty India uses personal information.</p>
    </PolicyPage>
  );
}
