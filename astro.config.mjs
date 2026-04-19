import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import inline from '@playform/inline';

export default defineConfig({
  site: 'https://globalhopeindia.org',
  build: {
    inlineStylesheets: 'auto',
  },
  integrations: [
    // Beasties: extract above-fold critical CSS, inline it, async-load the rest.
    inline(),
    sitemap({
      serialize(item) {
        // Giving landing pages — highest priority
        if (item.url.includes('/give/')) {
          return { ...item, changefreq: 'monthly', priority: 0.95, lastmod: new Date().toISOString() };
        }
        if (item.url.includes('/blog/') && item.url !== 'https://globalhopeindia.org/blog/') {
          return { ...item, changefreq: 'weekly', priority: 0.9, lastmod: new Date().toISOString() };
        }
        if (item.url.endsWith('/blog/')) {
          return { ...item, changefreq: 'weekly', priority: 0.8, lastmod: new Date().toISOString() };
        }
        if (item.url === 'https://globalhopeindia.org/') {
          return { ...item, changefreq: 'weekly', priority: 1.0, lastmod: new Date().toISOString() };
        }
        return { ...item, changefreq: 'monthly', priority: 0.7, lastmod: new Date().toISOString() };
      },
    }),
  ],
  vite: {
    server: {
      port: 4331,
      allowedHosts: ['preview.spiritmediapublishing.com'],
    },
    plugins: [tailwindcss()],
  },
});
