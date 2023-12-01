/** @type {import('next').NextConfig} */
const path = require("path")

const nextConfig = {
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
    }
}

module.exports = nextConfig
