import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  define: {
    PROD: JSON.stringify(false),
    DEV: JSON.stringify(false),
    TEST: JSON.stringify(true)
  },
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/__test__/**/*.test.tsx'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/true/coverage/**',
      '**/coverage/**'
    ],
    setupFiles: [resolve(__dirname, './vitest.setup.ts')]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json', '.css'],
  }
})
