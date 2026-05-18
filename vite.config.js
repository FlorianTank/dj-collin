import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ueberMich: resolve(__dirname, "ueber-mich/index.html"),
      },
    },
  },
});
