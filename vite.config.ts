import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensure relative asset paths so the site works when deployed to Vercel or any static host
  base: './',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
