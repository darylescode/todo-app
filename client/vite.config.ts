// vite.config.ts
import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  base: "/",
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }]
  },
});
