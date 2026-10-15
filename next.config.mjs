const securityHeaders = [
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  { key: 'Content-Security-Policy', value: "object-src 'none'; base-uri 'self'; frame-ancestors 'self'" },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 2592000,
    domains: [
      'api.aoc.edu.np',
      'placehold.co',
      'icrier.org'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.aoc.edu.np',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'icrier.org',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;