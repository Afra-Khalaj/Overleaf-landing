/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const nextConfig = {
    i18n,
  // Ensuring the middleware is enabled in Next.js 13.4+
  async rewrites() {
    return [];
  },
}

module.exports = nextConfig
