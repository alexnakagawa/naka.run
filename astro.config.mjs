import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import UnoCSS from 'unocss/astro';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://naka.run',
  integrations: [
    mdx(),
    sitemap(),
    UnoCSS({
      injectReset: true
    })
  ],
});
