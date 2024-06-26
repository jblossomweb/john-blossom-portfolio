/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    PORTFOLIO_IMAGE_HOST: process.env.PORTFOLIO_IMAGE_HOST,
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.PORTFOLIO_IMAGE_HOST,
        port: '',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig
