/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler:{
    styledComponents: true,
  },
  swcMinify: true,
  images: {
    domains: ['raw.githubusercontent.com']
  }
}

module.exports = nextConfig
