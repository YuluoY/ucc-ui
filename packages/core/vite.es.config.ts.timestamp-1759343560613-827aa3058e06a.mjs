// vite.es.config.ts
import { defineConfig } from "file:///D:/Desktop/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/ucc-ui/node_modules/.pnpm/vite@5.4.20_@types+node@20.19.19_sass-embedded@1.93.2_sass@1.93.2/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Desktop/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/ucc-ui/node_modules/.pnpm/@vitejs+plugin-vue@5.2.4_vite@5.4.20_@types+node@20.19.19_sass-embedded@1.93.2_sass@1.93.2__vue@3.5.22_typescript@5.9.3_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "node:path";
import vueJsx from "file:///D:/Desktop/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/ucc-ui/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.4.20_@types+node@20.19.19_sass-embedded@1.93.2_sass@1.93._7elwlxab4qcn7c3qzfr2grqp5m/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import dts from "file:///D:/Desktop/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/ucc-ui/node_modules/.pnpm/vite-plugin-dts@4.5.4_@types+node@20.19.19_rollup@4.52.3_typescript@5.9.3_vite@5.4.20_@types+_dlsvcscofsg5v6ijghacs5sk3u/node_modules/vite-plugin-dts/dist/index.mjs";
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
  build: {
    outDir: "dist/es",
    minify: "terser",
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5lcy5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxEZXNrdG9wXFxcXFx1NjIxMVx1NzY4NFx1OTg3OVx1NzZFRVxcXFx1Y2MtdWlcXFxccGFja2FnZXNcXFxcY29yZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcRGVza3RvcFxcXFxcdTYyMTFcdTc2ODRcdTk4NzlcdTc2RUVcXFxcdWNjLXVpXFxcXHBhY2thZ2VzXFxcXGNvcmVcXFxcdml0ZS5lcy5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0Rlc2t0b3AvJUU2JTg4JTkxJUU3JTlBJTg0JUU5JUExJUI5JUU3JTlCJUFFL3VjYy11aS9wYWNrYWdlcy9jb3JlL3ZpdGUuZXMuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdub2RlOnBhdGgnXHJcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcclxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXHJcbmltcG9ydCBnbG9iIGZyb20gJ2Zhc3QtZ2xvYidcclxuaW1wb3J0IHsgYmFzZW5hbWUsIGV4dG5hbWUgfSBmcm9tICdub2RlOnBhdGgnXHJcblxyXG5jb25zdCBjb21wb25lbnRzID0gZ2xvYi5nbG9iU3luYygnLi4vY29tcG9uZW50cy8qL3NyYy8qLnt2dWUsdHN4fScpLm1hcChmaWxlID0+IGJhc2VuYW1lKGZpbGUsIGV4dG5hbWUoZmlsZSkpKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICB2dWUoKSxcclxuICAgIHZ1ZUpzeCgpLFxyXG4gICAgZHRzKHtcclxuICAgICAgb3V0RGlyOiAnZGlzdC90eXBlcycsXHJcbiAgICAgIHRzY29uZmlnUGF0aDogJy4uLy4uL3RzY29uZmlnLmJ1aWxkLmpzb24nXHJcbiAgICB9KVxyXG4gIF0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIG91dERpcjogJ2Rpc3QvZXMnLFxyXG4gICAgbWluaWZ5OiAndGVyc2VyJyxcclxuICAgIGxpYjoge1xyXG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsICcuL2luZGV4LnRzJyksXHJcbiAgICAgIG5hbWU6ICdVY2NVSScsXHJcbiAgICAgIGZpbGVOYW1lOiAnaW5kZXgnLFxyXG4gICAgICBmb3JtYXRzOiBbJ2VzJ11cclxuICAgIH0sXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGV4dGVybmFsOiBbXHJcbiAgICAgICAgJ3Z1ZScsXHJcbiAgICAgICAgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZScsXHJcbiAgICAgICAgJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucycsXHJcbiAgICAgICAgJ0Bmb3J0YXdlc29tZS92dWUtZm9udGF3ZXNvbWUnLFxyXG4gICAgICAgICdAcG9wcGVyanMvY29yZScsXHJcbiAgICAgICAgJ2FzeW5jLXZhbGlkYXRvcidcclxuICAgICAgXSxcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgLy8gXHU1MjA2XHU1MzA1XHJcbiAgICAgICAgbWFudWFsQ2h1bmtzKGlkKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpXHJcbiAgICAgICAgICAgIHJldHVybiAndmVuZG9ycydcclxuICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnL3BhY2thZ2VzL3V0aWxzJykpXHJcbiAgICAgICAgICAgIHJldHVybiAndXRpbHMnXHJcbiAgICAgICAgICBpZiAoaWQuaW5jbHVkZXMoJy9wYWNrYWdlcy9ob29rcycpKVxyXG4gICAgICAgICAgICByZXR1cm4gJ2hvb2tzJ1xyXG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCcvcGFja2FnZXMvbG9jYWxlJykpXHJcbiAgICAgICAgICAgIHJldHVybiAnbG9jYWxlJ1xyXG4gICAgICAgICAgaWYgKGlkLmluY2x1ZGVzKCcvcGFja2FnZXMvdGhlbWUnKSlcclxuICAgICAgICAgICAgcmV0dXJuICd0aGVtZSdcclxuXHJcbiAgICAgICAgICBjb25zdCBuYW1lID0gYmFzZW5hbWUoaWQsIGV4dG5hbWUoaWQpKVxyXG4gICAgICAgICAgaWYgKGNvbXBvbmVudHMuaW5jbHVkZXMobmFtZSkpXHJcbiAgICAgICAgICAgIHJldHVybiBuYW1lXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3NldEZpbGVOYW1lczogYXNzZXRJbmZvID0+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWYgKGFzc2V0SW5mby5uYW1lID09PSAnc3R5bGUuY3NzJylcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gJ2luZGV4LmNzcycgYXMgc3RyaW5nXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHJldHVybiBhc3NldEluZm8ubmFtZSBhcyBzdHJpbmdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnVixTQUFTLG9CQUFvQjtBQUM3VyxPQUFPLFNBQVM7QUFDaEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsVUFBVSxlQUFlO0FBTmxDLElBQU0sbUNBQW1DO0FBUXpDLElBQU0sYUFBYSxLQUFLLFNBQVMsaUNBQWlDLEVBQUUsSUFBSSxVQUFRLFNBQVMsTUFBTSxRQUFRLElBQUksQ0FBQyxDQUFDO0FBRTdHLElBQU8seUJBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxJQUNQLElBQUk7QUFBQSxNQUNGLFFBQVE7QUFBQSxNQUNSLGNBQWM7QUFBQSxJQUNoQixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLGtDQUFXLFlBQVk7QUFBQSxNQUN0QyxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixTQUFTLENBQUMsSUFBSTtBQUFBLElBQ2hCO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBO0FBQUEsUUFFTixhQUFhLElBQ2I7QUFDRSxjQUFJLEdBQUcsU0FBUyxjQUFjO0FBQzVCLG1CQUFPO0FBQ1QsY0FBSSxHQUFHLFNBQVMsaUJBQWlCO0FBQy9CLG1CQUFPO0FBQ1QsY0FBSSxHQUFHLFNBQVMsaUJBQWlCO0FBQy9CLG1CQUFPO0FBQ1QsY0FBSSxHQUFHLFNBQVMsa0JBQWtCO0FBQ2hDLG1CQUFPO0FBQ1QsY0FBSSxHQUFHLFNBQVMsaUJBQWlCO0FBQy9CLG1CQUFPO0FBRVQsZ0JBQU0sT0FBTyxTQUFTLElBQUksUUFBUSxFQUFFLENBQUM7QUFDckMsY0FBSSxXQUFXLFNBQVMsSUFBSTtBQUMxQixtQkFBTztBQUFBLFFBQ1g7QUFBQSxRQUNBLGdCQUFnQixlQUNoQjtBQUNFLGNBQUksVUFBVSxTQUFTO0FBRXJCLG1CQUFPO0FBRVQsaUJBQU8sVUFBVTtBQUFBLFFBQ25CO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
