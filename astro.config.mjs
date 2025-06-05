// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';


// https://astro.build/config
export default defineConfig({
  integrations: [react()],

  experimental: {
    svg: true,
    session: true,
  },

  vite: {
    plugins: [tailwindcss()],
  },
  adapter: netlify(),
  output: 'server',
});