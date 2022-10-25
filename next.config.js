/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["tailwindui.com", "images.unsplash.com"],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  i18n: {
    locales: ["pt-BR", "en-US"],
    defaultLocale: "pt-BR",
  },
};

module.exports = nextConfig;
