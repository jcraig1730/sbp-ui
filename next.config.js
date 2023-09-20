/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "images-pw.pixieset.com",
      },
      { hostname: "res.cloudinary.com" },
    ],
  },
  env: {
    STRIPE_KEY: process.env.STRIPE_KEY,
  },
};

module.exports = nextConfig;
