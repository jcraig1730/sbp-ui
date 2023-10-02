/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "res.cloudinary.com" },
      { hostname: "alumni.engineering.utoronto.ca" },
    ],
  },
  env: {
    STRIPE_KEY: process.env.STRIPE_KEY,
    GA_ID: process.env.GA_ID,
  },
};

module.exports = nextConfig;
