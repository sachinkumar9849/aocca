/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'api.aoc.edu.np',
      'placehold.co'
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
      }
    ],
  },
};

export default nextConfig;