/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env : { 
    "BASE_URL" : 'https://note-alighdeveloper.vercel.app/api'
  }
}

module.exports = nextConfig
