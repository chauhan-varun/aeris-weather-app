import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
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
          // Create a 'vendor' chunk for node_modules
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
              return 'react-vendor';
            }
            if (id.includes('tanstack')) {
              return 'tanstack-vendor';
            }
            if (id.includes('recharts')) {
              return 'recharts-vendor';
            }
            return 'vendor';
          }
          
          // Group UI components
          if (id.includes('/components/ui/')) {
            return 'ui-components';
          }
          
          // Group other components
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
