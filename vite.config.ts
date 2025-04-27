import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: '/', // Root-relative paths for Render.com
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Disable code splitting entirely for maximum compatibility
    cssCodeSplit: true,
    sourcemap: false, 
    rollupOptions: {
      output: {
        // Don't split code into chunks to avoid dependency loading issues
        manualChunks: undefined,
        // IMPORTANT: This format ensures all code is in a single bundle
        format: 'es',
      },
    },
  },
});
