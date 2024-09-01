/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["quantfun.com.ua"],
  },
};

export default nextConfig;
