/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   serverActions: true,
  // },
  i18n: {
    locales: ["fa", "en"],
    defaultLocale: "fa", // Set fa as default
    // localeDetection: false,
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/",
  //       destination: "/fa",
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
