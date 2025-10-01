import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'
import glob from 'fast-glob'
import { basename, extname } from 'node:path'
import { minifyPlugin } from './vite-plugin-minify.js'

const components = glob.globSync('../components/*/src/*.{vue,tsx}').map(file => basename(file, extname(file)))

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      outDir: 'dist/types',
      tsconfigPath: '../../tsconfig.build.json'
    }),
    minifyPlugin({
      dir: 'dist/es',
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
      }
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
    outDir: 'dist/es',
    minify: false, // 第一步：不压缩，只编译
    lib: {
      entry: resolve(__dirname, './index.ts'),
      name: 'UccUI',
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      external: [
        'vue',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/vue-fontawesome',
        '@popperjs/core',
        'async-validator'
      ],
      output: {
        // 分包
        manualChunks(id)
        {
          if (id.includes('node_modules'))
            return 'vendors'
          if (id.includes('/packages/utils'))
            return 'utils'
          if (id.includes('/packages/hooks'))
            return 'hooks'
          if (id.includes('/packages/locale'))
            return 'locale'
          if (id.includes('/packages/theme'))
            return 'theme'

          const name = basename(id, extname(id))
          if (components.includes(name))
            return name
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