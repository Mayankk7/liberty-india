import { pageMetadata } from '../lib/seo';

// The page itself is a client component, so its SEO metadata lives here.
export const metadata = pageMetadata('/heritage/');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
