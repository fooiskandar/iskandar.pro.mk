import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import tailwindcss from "@tailwindcss/vite";
 import partytown from ‘@astrojs/partytown‘;

// https://astro.build/config
export default defineConfig({
  site: "https://iskandar.pro.mk",
  integrations: [sitemap(), mdx(), pagefind(),
                 partytown({
                     Adds dataLayer.push as a forwarding-event.
                     config: {
                       forward: ["dataLayer.push"],
                     },
                   }),
                ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
