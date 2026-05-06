import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: './src/index.js',
    },
  },
  server: {
    port: 3000,
  },
});
