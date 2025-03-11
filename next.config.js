/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['tipok.com.ua'], // ✅ Дозволяє завантажувати зображення з цього сайту
  },
};

module.exports = nextConfig;