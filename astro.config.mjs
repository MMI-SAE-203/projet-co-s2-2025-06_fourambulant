// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [],

  experimental: {
      svg: true
  },

  vite: {
    plugins: [tailwindcss()],
  },

  output: 'server',
});