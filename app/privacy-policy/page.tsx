import PolicyPage from '../components/PolicyPage';
import { pageMetadata } from '../lib/seo';

export const metadata = pageMetadata('/privacy-policy/');

export default function PrivacyPolicy() {
  return (
    <PolicyPage title="Privacy Policy">
      <p>Liberty India is responsible for the personal information you share on this website. You can write to us at <a href="mailto:India@liberty-india.com">India@liberty-india.com</a> or at 105, Complex, Sushant Lok Rd, Sector 28A, Sushant Lok Phase 1, Gurugram, Haryana 122001, India.</p>
      <h2>When you enquire about a trip</h2>
      <p>We use your name, contact details, country of residence, dates and any travel preferences you share to answer your questions and prepare the proposal you request. If you request an itinerary download, we use your email address to send a verification code and record which itinerary you requested.</p>
      <p>Our travel team receives website enquiries by email. We use Resend to deliver messages and HubSpot to manage contact-form enquiries. Submitting an enquiry gives our team permission to contact you about that request. Subscribing to marketing updates is a separate choice.</p>
      <h2>When you browse</h2>
      <p>Our hosting and media providers receive technical details such as your IP address and the files you request to deliver and secure the site. If you allow analytics or marketing, the providers listed in our <a href="/cookie-policy/">Cookie Policy</a> may receive information about your browser, device and visits.</p>
      <h2>Where and how long we use your information</h2>
      <p>Our travel team works in India. Service providers may process information in other countries. We use enquiry details to respond, follow up on your travel arrangements and meet applicable recordkeeping requirements. Contact us for information about retention or the arrangements that apply to your enquiry.</p>
      <h2>Your choices</h2>
      <p>You can ask for access to your information, a correction or deletion, or ask us to limit its use. You can withdraw consent for optional tracking through Cookie settings in the footer. To make a privacy request, withdraw permission for further contact or raise a concern, email <a href="mailto:India@liberty-india.com">India@liberty-india.com</a>. Depending on where you live, you may also contact your local data protection authority.</p>
    </PolicyPage>
  );
}
