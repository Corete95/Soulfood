/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: { styledComponents: true },
  images: {
    domains: ['soulfood-map.vercel.app', 'search.pstatic.net'],
  },
  i18n: {
    locales: ['ko'],
    defaultLocale: 'ko',
  },
};

module.exports = nextConfig;
