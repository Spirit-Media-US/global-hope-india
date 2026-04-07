import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://globalhopeindia.org',
  integrations: [
    sitemap({
      serialize(item) {
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
