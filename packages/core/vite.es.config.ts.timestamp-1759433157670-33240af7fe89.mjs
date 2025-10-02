// vite.es.config.ts
import { defineConfig } from "file:///D:/Desktop/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/ucc-ui/node_modules/.pnpm/vite@5.4.20_@types+node@20.19.19_sass-embedded@1.93.2_sass@1.93.2_terser@5.44.0/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Desktop/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/ucc-ui/node_modules/.pnpm/@vitejs+plugin-vue@5.2.4_vite@5.4.20_@types+node@20.19.19_sass-embedded@1.93.2_sass@1.93.2_te_mwh7lr7eeyp4kowxkbjnskt63e/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "node:path";
import vueJsx from "file:///D:/Desktop/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/ucc-ui/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.4.20_@types+node@20.19.19_sass-embedded@1.93.2_sass@1.93._smuxq4mdyde2tdzug64vl6rnji/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import dts from "file:///D:/Desktop/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/ucc-ui/node_modules/.pnpm/vite-plugin-dts@4.5.4_@types+node@20.19.19_rollup@4.52.3_typescript@5.9.3_vite@5.4.20_@types+_vpjagatiy4hbutko6w6tq54rg4/node_modules/vite-plugin-dts/dist/index.mjs";
import glob from "file:///D:/Desktop/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/ucc-ui/node_modules/.pnpm/fast-glob@3.3.3/node_modules/fast-glob/out/index.js";
import { basename, extname } from "node:path";
var __vite_injected_original_dirname = "D:\\Desktop\\\u6211\u7684\u9879\u76EE\\ucc-ui\\packages\\core";
var components = glob.globSync("../components/*/src/*.{vue,tsx}").map((file) => basename(file, extname(file)));
var vite_es_config_default = defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      outDir: "dist/types",
      tsconfigPath: "../../tsconfig.build.json"
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
        // 使用现代编译器 API
      }
    }
  },
  build: {
    outDir: "dist/es",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ["console.log"]
      },
      mangle: {
        toplevel: true
      },
      format: {
        comments: false
      }
    },
    lib: {
      entry: resolve(__vite_injected_original_dirname, "./index.ts"),
      name: "UccUI",
      fileName: "index",
      formats: ["es"]
    },
    rollupOptions: {
      external: [
        "vue",
        "@fortawesome/fontawesome-svg-core",
        "@fortawesome/free-solid-svg-icons",
        "@fortawesome/vue-fontawesome",
        "@popperjs/core",
        "async-validator"
      ],
      output: {
        // 分包
        manualChunks(id) {
          if (id.includes("node_modules"))
            return "vendors";
          if (id.includes("/packages/utils"))
            return "utils";
          if (id.includes("/packages/hooks"))
            return "hooks";
          if (id.includes("/packages/locale"))
            return "locale";
          if (id.includes("/packages/theme"))
            return "theme";
          const name = basename(id, extname(id));
          if (components.includes(name))
            return name;
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css")
            return "index.css";
          return assetInfo.name;
        }
      }
    }
  }
});
export {
  vite_es_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5lcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxEZXNrdG9wXFxcXFx1NjIxMVx1NzY4NFx1OTg3OVx1NzZFRVxcXFx1Y2MtdWlcXFxccGFja2FnZXNcXFxcY29yZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcRGVza3RvcFxcXFxcdTYyMTFcdTc2ODRcdTk4NzlcdTc2RUVcXFxcdWNjLXVpXFxcXHBhY2thZ2VzXFxcXGNvcmVcXFxcdml0ZS5lcy5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0Rlc2t0b3AvJUU2JTg4JTkxJUU3JTlBJTg0JUU5JUExJUI5JUU3JTlCJUFFL3VjYy11aS9wYWNrYWdlcy9jb3JlL3ZpdGUuZXMuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBQbHVnaW5PcHRpb24gfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCdcclxuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xyXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcclxuaW1wb3J0IGdsb2IgZnJvbSAnZmFzdC1nbG9iJ1xyXG5pbXBvcnQgeyBiYXNlbmFtZSwgZXh0bmFtZSB9IGZyb20gJ25vZGU6cGF0aCdcclxuXHJcbmNvbnN0IGNvbXBvbmVudHMgPSBnbG9iLmdsb2JTeW5jKCcuLi9jb21wb25lbnRzLyovc3JjLyoue3Z1ZSx0c3h9JykubWFwKGZpbGUgPT4gYmFzZW5hbWUoZmlsZSwgZXh0bmFtZShmaWxlKSkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHZ1ZSgpLFxyXG4gICAgdnVlSnN4KCksXHJcbiAgICBkdHMoe1xyXG4gICAgICBvdXREaXI6ICdkaXN0L3R5cGVzJyxcclxuICAgICAgdHNjb25maWdQYXRoOiAnLi4vLi4vdHNjb25maWcuYnVpbGQuanNvbidcclxuICAgIH0pIGFzIHVua25vd24gYXMgUGx1Z2luT3B0aW9uXHJcbiAgXSxcclxuICBjc3M6IHtcclxuICAgIHByZXByb2Nlc3Nvck9wdGlvbnM6IHtcclxuICAgICAgc2Nzczoge1xyXG4gICAgICAgIGFwaTogJ21vZGVybi1jb21waWxlcicgLy8gXHU0RjdGXHU3NTI4XHU3M0IwXHU0RUUzXHU3RjE2XHU4QkQxXHU1NjY4IEFQSVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBidWlsZDoge1xyXG4gICAgb3V0RGlyOiAnZGlzdC9lcycsXHJcbiAgICBtaW5pZnk6ICd0ZXJzZXInLFxyXG4gICAgdGVyc2VyT3B0aW9uczoge1xyXG4gICAgICBjb21wcmVzczoge1xyXG4gICAgICAgIGRyb3BfY29uc29sZTogdHJ1ZSxcclxuICAgICAgICBkcm9wX2RlYnVnZ2VyOiB0cnVlLFxyXG4gICAgICAgIHB1cmVfZnVuY3M6IFsnY29uc29sZS5sb2cnXSxcclxuICAgICAgfSxcclxuICAgICAgbWFuZ2xlOiB7XHJcbiAgICAgICAgdG9wbGV2ZWw6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1hdDoge1xyXG4gICAgICAgIGNvbW1lbnRzOiBmYWxzZSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGxpYjoge1xyXG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL2luZGV4LnRzJyksXHJcbiAgICAgIG5hbWU6ICdVY2NVSScsXHJcbiAgICAgIGZpbGVOYW1lOiAnaW5kZXgnLFxyXG4gICAgICBmb3JtYXRzOiBbJ2VzJ11cclxuICAgIH0sXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGV4dGVybmFsOiBbXHJcbiAgICAgICAgJ3Z1ZScsXHJcbiAgICAgICAgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZScsXHJcbiAgICAgICAgJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucycsXHJcbiAgICAgICAgJ0Bmb3J0YXdlc29tZS92dWUtZm9udGF3ZXNvbWUnLFxyXG4gICAgICAgICdAcG9wcGVyanMvY29yZScsXHJcbiAgICAgICAgJ2FzeW5jLXZhbGlkYXRvcidcclxuICAgICAgXSxcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgLy8gXHU1MjA2XHU1MzA1XHJcbiAgICAgICAgbWFudWFsQ2h1bmtzKGlkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIC8vIFx1NTE3Nlx1NEVENiBub2RlX21vZHVsZXMgXHU0RjlEXHU4RDU2XHJcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJ25vZGVfbW9kdWxlcycpKVxyXG4gICAgICAgICAgICByZXR1cm4gJ3ZlbmRvcnMnXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIFx1NTE4NVx1OTBFOFx1NTMwNVxyXG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCcvcGFja2FnZXMvdXRpbHMnKSlcclxuICAgICAgICAgICAgcmV0dXJuICd1dGlscydcclxuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnL3BhY2thZ2VzL2hvb2tzJykpXHJcbiAgICAgICAgICAgIHJldHVybiAnaG9va3MnXHJcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJy9wYWNrYWdlcy9sb2NhbGUnKSlcclxuICAgICAgICAgICAgcmV0dXJuICdsb2NhbGUnXHJcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJy9wYWNrYWdlcy90aGVtZScpKVxyXG4gICAgICAgICAgICByZXR1cm4gJ3RoZW1lJ1xyXG5cclxuICAgICAgICAgIGNvbnN0IG5hbWUgPSBiYXNlbmFtZShpZCwgZXh0bmFtZShpZCkpXHJcblxyXG4gICAgICAgICAgaWYgKGNvbXBvbmVudHMuaW5jbHVkZXMobmFtZSkpXHJcbiAgICAgICAgICAgIHJldHVybiBuYW1lXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3NldEZpbGVOYW1lczogYXNzZXRJbmZvID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWYgKGFzc2V0SW5mby5uYW1lID09PSAnc3R5bGUuY3NzJylcclxuICAgICAgICAgICAgcmV0dXJuICdpbmRleC5jc3MnIGFzIHN0cmluZ1xyXG4gICAgICAgICAgcmV0dXJuIGFzc2V0SW5mby5uYW1lIGFzIHN0cmluZ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBQWdWLFNBQVMsb0JBQWtDO0FBQzNYLE9BQU8sU0FBUztBQUNoQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sU0FBUztBQUNoQixPQUFPLFVBQVU7QUFDakIsU0FBUyxVQUFVLGVBQWU7QUFObEMsSUFBTSxtQ0FBbUM7QUFRekMsSUFBTSxhQUFhLEtBQUssU0FBUyxpQ0FBaUMsRUFBRSxJQUFJLFVBQVEsU0FBUyxNQUFNLFFBQVEsSUFBSSxDQUFDLENBQUM7QUFFN0csSUFBTyx5QkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsSUFBSTtBQUFBLE1BQ0YsUUFBUTtBQUFBLE1BQ1IsY0FBYztBQUFBLElBQ2hCLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixLQUFLO0FBQUE7QUFBQSxNQUNQO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLGVBQWU7QUFBQSxRQUNmLFlBQVksQ0FBQyxhQUFhO0FBQUEsTUFDNUI7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLFVBQVU7QUFBQSxNQUNaO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixVQUFVO0FBQUEsTUFDWjtBQUFBLElBQ0Y7QUFBQSxJQUNBLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxrQ0FBVyxZQUFZO0FBQUEsTUFDdEMsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsU0FBUyxDQUFDLElBQUk7QUFBQSxJQUNoQjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1I7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQTtBQUFBLFFBRU4sYUFBYSxJQUNiO0FBRUUsY0FBSSxHQUFHLFNBQVMsY0FBYztBQUM1QixtQkFBTztBQUdULGNBQUksR0FBRyxTQUFTLGlCQUFpQjtBQUMvQixtQkFBTztBQUNULGNBQUksR0FBRyxTQUFTLGlCQUFpQjtBQUMvQixtQkFBTztBQUNULGNBQUksR0FBRyxTQUFTLGtCQUFrQjtBQUNoQyxtQkFBTztBQUNULGNBQUksR0FBRyxTQUFTLGlCQUFpQjtBQUMvQixtQkFBTztBQUVULGdCQUFNLE9BQU8sU0FBUyxJQUFJLFFBQVEsRUFBRSxDQUFDO0FBRXJDLGNBQUksV0FBVyxTQUFTLElBQUk7QUFDMUIsbUJBQU87QUFBQSxRQUNYO0FBQUEsUUFDQSxnQkFBZ0IsZUFDaEI7QUFDRSxjQUFJLFVBQVUsU0FBUztBQUNyQixtQkFBTztBQUNULGlCQUFPLFVBQVU7QUFBQSxRQUNuQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
