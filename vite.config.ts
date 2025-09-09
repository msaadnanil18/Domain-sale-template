import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig(({ mode }) => ({
  // server: {
  //   host: "::",
  //   port: 3000,
  //   allowedHosts: true,
  // },
  plugins: [react(), viteSingleFile()],
  build: {
    target: "esnext",
    minify: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
