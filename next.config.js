/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  image: {
    domains: ['raw.githubusercontent.com'],
  }
}

module.exports = nextConfig
