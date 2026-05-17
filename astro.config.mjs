import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite'; 

export default defineConfig({
  // CORREGIDO: Cambiamos al dominio real que tenés activo en Netlify
  site: 'https://mueblesnaiv.com',
  
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()], 
  },
});