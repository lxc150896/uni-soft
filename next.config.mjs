// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;


// next.config.mjs
export const i18n = {
  locales: ["en", "vi"], // Danh sách các ngôn ngữ hỗ trợ
  defaultLocale: "en", // Ngôn ngữ mặc định
};

export default {
  i18n, // Gán cấu hình i18n vào Next.js
};