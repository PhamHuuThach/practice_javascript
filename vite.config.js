import { defineConfig } from "vite";

// Import SCSS plugin (if needed)
import path from "path";

export default defineConfig({
  server: {
    port: 3000, // The port on which the Vite server will run
    proxy: {
      "/api": "http://localhost:3001", // Proxy JSON-server for API calls
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Alias to simplify imports
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/global.scss";`, // Global SCSS imports
      },
    },
  },
  build: {
    outDir: "dist", // Output folder for the build
    rollupOptions: {
      // Additional rollup configurations, if needed
    },
  },
});
