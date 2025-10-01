import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      outDir: 'dist/types',
      tsconfigPath: '../../tsconfig.build.json'
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler' // 使用现代编译器 API
      }
    }
  },
  build: {
    outDir: 'dist/umd',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log'],
      },
      mangle: {
        toplevel: true,
      },
      format: {
        comments: false,
      }
    },
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: 'UccUI',
      fileName: 'index',
      formats: ['umd']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue'
        },
        assetFileNames: assetInfo =>
        {
          if (assetInfo.name === 'style.css')
          
            return 'index.css' as string
          
          return assetInfo.name as string
        }
      }
    }
  }
})