/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.fakercloud.com', 'uploads-ssl.webflow.com']
  }
}

module.exports = nextConfig
