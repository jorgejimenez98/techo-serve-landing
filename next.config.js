/** @type {import('next').NextConfig} */
const path = require("path")

const { i18n } = require("./next-i18next.config")

const nextConfig = {
  i18n,
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'assets/scss')],
  },
  env: {
    RESEND_EMAIL_API_KEY: process.env.RESEND_EMAIL_API_KEY,
    RESEND_EMAIL: process.env.RESEND_EMAIL,
  }
}

module.exports = nextConfig
