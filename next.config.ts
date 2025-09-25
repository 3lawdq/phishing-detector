import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // إعدادات لتسهيل التعامل مع الـ API أثناء التطوير
  async rewrites() {
    return [
      {
        source: "/api/:path*",       // أي طلب يبدأ بـ /api
        destination: "http://127.0.0.1:5000/:path*", // يعاد توجيهه إلى Flask backend
      },
    ];
  },
};

export default nextConfig;
