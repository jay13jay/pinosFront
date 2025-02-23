import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/pinosFront/', // serve app at this base path
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
