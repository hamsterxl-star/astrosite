// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Три языка: испанский без префикса (/), русский (/ru/) и английский (/en/).
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'ru', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
