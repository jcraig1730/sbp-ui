/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images-pw.pixieset.com",
      },
      { hostname: "res.cloudinary.com" },
      { hostname: "alumni.engineering.utoronto.ca" },
    ],
  },
  env: {
    STRIPE_KEY: process.env.STRIPE_KEY,
  },
};

module.exports = nextConfig;
