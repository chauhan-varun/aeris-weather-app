import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: './', // Add this line to ensure assets are loaded with relative paths
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Use a more conservative chunking strategy for better compatibility
          if (id.includes('node_modules')) {
            // Group React and TanStack together to ensure dependencies are available
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom') || id.includes('tanstack')) {
              return 'react-tanstack-vendor';
            }
            // Other libraries
            if (id.includes('recharts')) {
              return 'data-vendor';
            }
            return 'vendor';
          }
          
          // Application code
          if (id.includes('/components/')) {
            return 'components';
          }
        },
        // Optimize code splitting
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
    // Optimize build
    target: 'esnext',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
