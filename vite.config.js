import { fileURLToPath, URL } from 'node:url'


import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  define: {
    "process.env.DEBUG": false,
    "window.global": {},
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      "./runtimeConfig": "./runtimeConfig.browser",
      'node-fetch': 'node-fetch-polyfill',
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // or "modern"
      }
    }
  },
  routes: { 
    '/': { prerender: true }, 
    '/*': { cors: true } 
  } 

})
