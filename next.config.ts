/** @type {import('next').NextConfig} */
const nextConfig = {
  // @react-pdf/renderer (and its native-ish deps) must run as a real Node module
  // in the server runtime rather than being bundled by Next.
  serverExternalPackages: ['@react-pdf/renderer', 'sharp'],
  async redirects() {
    return [
      // Itinerary renamed "Northeast India & The City of Joy" → "East India";
      // the old slug is live on the deployed production site.
      {
        source: '/itineraries/northeast-india-city-of-joy',
        destination: '/itineraries/eastindia',
        permanent: true,
      },
    ];
  },
  images: {
    // Enable SVG support
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    
    // Image formats for optimization
    formats: ['image/avif', 'image/webp'],

    // Next 16 requires an allowlist of quality values; HeroCarousel uses 90.
    qualities: [75, 90],
    
    // Allow local images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
