import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000, // Server chạy trên cổng 3000
    proxy: {
      "/api": "http://localhost:3001", // Proxy tới JSON-server
    },
  },
  resolve: {
    alias: {
      "@assets": "/src/assets", // Đặt alias cho thư mục chứa hình ảnh
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "@/src/stylesheets/main.scss";`, // Đường dẫn tới file SCSS chính
  //     },
  //   },
  // },
});
