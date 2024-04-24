/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/myapp', //[tbd]
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
