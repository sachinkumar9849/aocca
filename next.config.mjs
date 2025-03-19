/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
 
      domains: ['gadget-api-develop.mantraideas.com.np', 'placehold.co'], 
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'gadget-api-develop.mantraideas.com.np',
          port: '',
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