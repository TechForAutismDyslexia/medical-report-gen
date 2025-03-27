import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteRestart from "vite-plugin-restart";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/reportgen",
  plugins: [
    react(),
    ViteRestart({
      restart: [
        "./src/components/document*.tsx",
        "./src/components/document/**/*.tsx",
      ],
      reload: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
      delay: 4,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
