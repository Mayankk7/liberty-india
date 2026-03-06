/** @type {import('next').NextConfig} */
const nextConfig = {
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
