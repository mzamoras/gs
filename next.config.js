const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['source.unsplash.com'],
    },
    env: {
      BACKEND_URL: process.env.BACKEND_URL,
    },
  }
  
  module.exports = nextConfig