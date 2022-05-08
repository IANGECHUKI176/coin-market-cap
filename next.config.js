/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["s2.coinmarketcap.com", "s3.coinmarketcap.com","encrypted-tbn0.gstatic.com"],
  },
};

module.exports = nextConfig
