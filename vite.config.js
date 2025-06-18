import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/ttm-flashcards/' : '/',
  plugins: [vue()],
  define: {
    __BUILD_TIMESTAMP__: JSON.stringify(new Date().toISOString())
  }
})
