import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import del from "rollup-plugin-delete";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  root: 'src',
  build: {
    outDir: '../_dist',
    emptyOutDir: true,
    rollupOptions: {
      plugins: [
        del({ targets: "dist/*", hook: "generateBundle" }),
      ]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
