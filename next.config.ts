/** @type {import('next').NextConfig} */
const nextConfig = {
  // @react-pdf/renderer (and its native-ish deps) must run as a real Node module
  // in the server runtime rather than being bundled by Next.
  serverExternalPackages: ['@react-pdf/renderer', 'sharp'],
  images: {
    // Enable SVG support
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    
    // Image formats for optimization
    formats: ['image/avif', 'image/webp'],
    
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
