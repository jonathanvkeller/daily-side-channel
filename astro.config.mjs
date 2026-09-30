import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jonathanvkeller.github.io',
  base: '/daily-side-channel',
  trailingSlash: 'always',
  markdown: {
    shikiConfig: { theme: 'github-light' }
  }
});
