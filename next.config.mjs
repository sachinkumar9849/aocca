/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
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