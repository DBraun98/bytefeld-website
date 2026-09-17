// @ts-check
import { defineConfig } from 'astro/config';

// Entwurf auf GitHub Pages: https://dbraun98.github.io/bytefeld-website/
// Zum Livegang: site auf 'https://bytefeld.com' setzen und base entfernen.
export default defineConfig({
  site: 'https://dbraun98.github.io',
  base: '/bytefeld-website',
  output: 'static',
});
