// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/raziz1.github.io/', // ← important!
  plugins: [react()],
});