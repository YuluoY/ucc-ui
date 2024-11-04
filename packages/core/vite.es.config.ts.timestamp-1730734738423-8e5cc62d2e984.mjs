// vite.es.config.ts
import { defineConfig } from "file:///D:/Desktop/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/ucc-ui/node_modules/.pnpm/vite@5.4.0_@types+node@20.14.14_sass@1.77.8/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Desktop/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/ucc-ui/node_modules/.pnpm/@vitejs+plugin-vue@5.1.2_vite@5.4.0_@types+node@20.14.14_sass@1.77.8__vue@3.4.37_typescript@5.5.4_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "node:path";
import vueJsx from "file:///D:/Desktop/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/ucc-ui/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.4.0_@types+node@20.14.14_sass@1.77.8__vue@3.4.37_typescript@5.5.4_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import dts from "file:///D:/Desktop/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/ucc-ui/node_modules/.pnpm/vite-plugin-dts@4.0.2_@types+node@20.14.14_rollup@4.20.0_typescript@5.5.4_vite@5.4.0_@types+node@20.14.14_sass@1.77.8_/node_modules/vite-plugin-dts/dist/index.mjs";
import glob from "file:///D:/Desktop/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/ucc-ui/node_modules/.pnpm/fast-glob@3.3.2/node_modules/fast-glob/out/index.js";
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
  build: {
    outDir: "dist/es",
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
          const name = basename(id, extname(id));
          if (components.includes(name))
            return name;
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") {
            return "index.css";
          }
          return assetInfo.name;
        }
      }
    }
  }
});
export {
  vite_es_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5lcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxEZXNrdG9wXFxcXFx1NjIxMVx1NzY4NFx1OTg3OVx1NzZFRVxcXFx1Y2MtdWlcXFxccGFja2FnZXNcXFxcY29yZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcRGVza3RvcFxcXFxcdTYyMTFcdTc2ODRcdTk4NzlcdTc2RUVcXFxcdWNjLXVpXFxcXHBhY2thZ2VzXFxcXGNvcmVcXFxcdml0ZS5lcy5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0Rlc2t0b3AvJUU2JTg4JTkxJUU3JTlBJTg0JUU5JUExJUI5JUU3JTlCJUFFL3VjYy11aS9wYWNrYWdlcy9jb3JlL3ZpdGUuZXMuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwibm9kZTpwYXRoXCI7XHJcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcclxuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XHJcbmltcG9ydCBnbG9iIGZyb20gJ2Zhc3QtZ2xvYidcclxuaW1wb3J0IHsgYmFzZW5hbWUsIGV4dG5hbWUgIH0gZnJvbSAnbm9kZTpwYXRoJ1xyXG5cclxuY29uc3QgY29tcG9uZW50cyA9IGdsb2IuZ2xvYlN5bmMoJy4uL2NvbXBvbmVudHMvKi9zcmMvKi57dnVlLHRzeH0nKS5tYXAoZmlsZSA9PiBiYXNlbmFtZShmaWxlLCBleHRuYW1lKGZpbGUpKSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKCksIFxyXG4gICAgdnVlSnN4KCksXHJcbiAgICBkdHMoe1xyXG4gICAgICBvdXREaXI6IFwiZGlzdC90eXBlc1wiLFxyXG4gICAgICB0c2NvbmZpZ1BhdGg6ICcuLi8uLi90c2NvbmZpZy5idWlsZC5qc29uJ1xyXG4gICAgfSlcclxuICBdLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBvdXREaXI6ICdkaXN0L2VzJyxcclxuICAgIGxpYjoge1xyXG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL2luZGV4LnRzJyksXHJcbiAgICAgIG5hbWU6ICdVY2NVSScsXHJcbiAgICAgIGZpbGVOYW1lOiAnaW5kZXgnLFxyXG4gICAgICBmb3JtYXRzOiBbJ2VzJ11cclxuICAgIH0sXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGV4dGVybmFsOiBbXHJcbiAgICAgICAgJ3Z1ZScsXHJcbiAgICAgICAgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZScsXHJcbiAgICAgICAgJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucycsXHJcbiAgICAgICAgJ0Bmb3J0YXdlc29tZS92dWUtZm9udGF3ZXNvbWUnLFxyXG4gICAgICAgICdAcG9wcGVyanMvY29yZScsXHJcbiAgICAgICAgJ2FzeW5jLXZhbGlkYXRvcidcclxuICAgICAgXSxcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgLy8gXHU1MjA2XHU1MzA1XHJcbiAgICAgICAgbWFudWFsQ2h1bmtzKGlkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpXHJcbiAgICAgICAgICAgIHJldHVybiAndmVuZG9ycydcclxuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnL3BhY2thZ2VzL3V0aWxzJykpXHJcbiAgICAgICAgICAgIHJldHVybiAndXRpbHMnXHJcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJy9wYWNrYWdlcy9ob29rcycpKVxyXG4gICAgICAgICAgICByZXR1cm4gJ2hvb2tzJ1xyXG4gICAgXHJcbiAgICAgICAgICBjb25zdCBuYW1lID0gYmFzZW5hbWUoaWQsIGV4dG5hbWUoaWQpKVxyXG4gICAgICAgICAgaWYgKGNvbXBvbmVudHMuaW5jbHVkZXMobmFtZSkpXHJcbiAgICAgICAgICAgIHJldHVybiBuYW1lXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xyXG4gICAgICAgICAgaWYgKGFzc2V0SW5mby5uYW1lID09PSAnc3R5bGUuY3NzJykge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2luZGV4LmNzcycgYXMgc3RyaW5nXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gYXNzZXRJbmZvLm5hbWUgYXMgc3RyaW5nXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KSJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ1YsU0FBUyxvQkFBb0I7QUFDN1csT0FBTyxTQUFTO0FBQ2hCLFNBQVMsZUFBZTtBQUN4QixPQUFPLFlBQVk7QUFDbkIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sVUFBVTtBQUNqQixTQUFTLFVBQVUsZUFBZ0I7QUFObkMsSUFBTSxtQ0FBbUM7QUFRekMsSUFBTSxhQUFhLEtBQUssU0FBUyxpQ0FBaUMsRUFBRSxJQUFJLFVBQVEsU0FBUyxNQUFNLFFBQVEsSUFBSSxDQUFDLENBQUM7QUFFN0csSUFBTyx5QkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsSUFBSTtBQUFBLE1BQ0YsUUFBUTtBQUFBLE1BQ1IsY0FBYztBQUFBLElBQ2hCLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsa0NBQVcsWUFBWTtBQUFBLE1BQ3RDLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFNBQVMsQ0FBQyxJQUFJO0FBQUEsSUFDaEI7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUE7QUFBQSxRQUVOLGFBQWEsSUFDYjtBQUNFLGNBQUksR0FBRyxTQUFTLGNBQWM7QUFDNUIsbUJBQU87QUFDVCxjQUFJLEdBQUcsU0FBUyxpQkFBaUI7QUFDL0IsbUJBQU87QUFDVCxjQUFJLEdBQUcsU0FBUyxpQkFBaUI7QUFDL0IsbUJBQU87QUFFVCxnQkFBTSxPQUFPLFNBQVMsSUFBSSxRQUFRLEVBQUUsQ0FBQztBQUNyQyxjQUFJLFdBQVcsU0FBUyxJQUFJO0FBQzFCLG1CQUFPO0FBQUEsUUFDWDtBQUFBLFFBQ0EsZ0JBQWdCLENBQUMsY0FBYztBQUM3QixjQUFJLFVBQVUsU0FBUyxhQUFhO0FBQ2xDLG1CQUFPO0FBQUEsVUFDVDtBQUNBLGlCQUFPLFVBQVU7QUFBQSxRQUNuQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
