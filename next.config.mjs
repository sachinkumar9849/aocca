/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      '156.67.104.182',
      'placehold.co'
    ],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '156.67.104.182',
        port: '8081',
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