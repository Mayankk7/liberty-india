import { PRIVACY_POLICY_URL } from '../lib/siteConfig';

/**
 * "Privacy Policy" text that becomes a real link once
 * NEXT_PUBLIC_PRIVACY_POLICY_URL is set. Until then it renders as plain text
 * rather than a dead link.
 */
export default function PrivacyPolicyLink({
  children = 'Privacy Policy',
  className = 'underline underline-offset-2 hover:text-[#E07B39]',
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  if (!PRIVACY_POLICY_URL) return <span>{children}</span>;
  return (
    <a href={PRIVACY_POLICY_URL} target="_blank" rel="noopener" className={className}>
      {children}
    </a>
  );
}
