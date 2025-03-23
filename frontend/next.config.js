/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Включает строгий режим React
  swcMinify: true, // Включает SWC для минимизации кода
  images: {
    domains: ['example.com'], // Разрешает загрузку изображений с указанных доменов
  },
  async redirects() {
    return [
      {
        source: '/old-route',
        destination: '/new-route',
        permanent: true, // Указывает, что редирект постоянный (301)
      },
    ];
  },
};

module.exports = nextConfig;
