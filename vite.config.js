import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main:       resolve(__dirname, "index.html"),
        ueberMich:  resolve(__dirname, "ueber-mich/index.html"),
        leistungen: resolve(__dirname, "leistungen/index.html"),
        hochzeiten: resolve(__dirname, "leistungen/hochzeiten/index.html"),
        faq:        resolve(__dirname, "faq/index.html"),
        impressum:   resolve(__dirname, "impressum/index.html"),
        datenschutz: resolve(__dirname, "datenschutz/index.html"),
      },
    },
  },
});
