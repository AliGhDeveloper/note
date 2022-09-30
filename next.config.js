/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env : { 
    "BASE_URL" : 'http://localhost:3000/api'
  }
}

module.exports = nextConfig
