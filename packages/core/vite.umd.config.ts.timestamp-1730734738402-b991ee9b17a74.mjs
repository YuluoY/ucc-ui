// vite.umd.config.ts
import { defineConfig } from "file:///D:/Desktop/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/ucc-ui/node_modules/.pnpm/vite@5.4.0_@types+node@20.14.14_sass@1.77.8/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Desktop/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/ucc-ui/node_modules/.pnpm/@vitejs+plugin-vue@5.1.2_vite@5.4.0_@types+node@20.14.14_sass@1.77.8__vue@3.4.37_typescript@5.5.4_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "node:path";
import vueJsx from "file:///D:/Desktop/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/ucc-ui/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.4.0_@types+node@20.14.14_sass@1.77.8__vue@3.4.37_typescript@5.5.4_/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import dts from "file:///D:/Desktop/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/ucc-ui/node_modules/.pnpm/vite-plugin-dts@4.0.2_@types+node@20.14.14_rollup@4.20.0_typescript@5.5.4_vite@5.4.0_@types+node@20.14.14_sass@1.77.8_/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\Desktop\\\u6211\u7684\u9879\u76EE\\ucc-ui\\packages\\core";
var vite_umd_config_default = defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      outDir: "dist/types",
      tsconfigPath: "../../tsconfig.build.json"
    })
  ],
  build: {
    outDir: "dist/umd",
    lib: {
      entry: resolve(__vite_injected_original_dirname, "./index.ts"),
      name: "UccUI",
      fileName: "index",
      formats: ["umd"]
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        exports: "named",
        globals: {
          vue: "Vue"
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
  vite_umd_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS51bWQuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcRGVza3RvcFxcXFxcdTYyMTFcdTc2ODRcdTk4NzlcdTc2RUVcXFxcdWNjLXVpXFxcXHBhY2thZ2VzXFxcXGNvcmVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXERlc2t0b3BcXFxcXHU2MjExXHU3Njg0XHU5ODc5XHU3NkVFXFxcXHVjYy11aVxcXFxwYWNrYWdlc1xcXFxjb3JlXFxcXHZpdGUudW1kLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovRGVza3RvcC8lRTYlODglOTElRTclOUElODQlRTklQTElQjklRTclOUIlQUUvdWNjLXVpL3BhY2thZ2VzL2NvcmUvdml0ZS51bWQuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwibm9kZTpwYXRoXCI7XHJcbmltcG9ydCB2dWVKc3ggZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlLWpzeCdcclxuaW1wb3J0IGR0cyBmcm9tIFwidml0ZS1wbHVnaW4tZHRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHZ1ZSgpLCBcclxuICAgIHZ1ZUpzeCgpLFxyXG4gICAgZHRzKHtcclxuICAgICAgb3V0RGlyOiBcImRpc3QvdHlwZXNcIixcclxuICAgICAgdHNjb25maWdQYXRoOiAnLi4vLi4vdHNjb25maWcuYnVpbGQuanNvbidcclxuICAgIH0pXHJcbiAgXSxcclxuICBidWlsZDoge1xyXG4gICAgb3V0RGlyOiAnZGlzdC91bWQnLFxyXG4gICAgbGliOiB7XHJcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJy4vaW5kZXgudHMnKSxcclxuICAgICAgbmFtZTogJ1VjY1VJJyxcclxuICAgICAgZmlsZU5hbWU6ICdpbmRleCcsXHJcbiAgICAgIGZvcm1hdHM6IFsndW1kJ11cclxuICAgIH0sXHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIGV4dGVybmFsOiBbJ3Z1ZSddLFxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBleHBvcnRzOiAnbmFtZWQnLFxyXG4gICAgICAgIGdsb2JhbHM6IHtcclxuICAgICAgICAgIHZ1ZTogJ1Z1ZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAoYXNzZXRJbmZvKSA9PiB7XHJcbiAgICAgICAgICBpZiAoYXNzZXRJbmZvLm5hbWUgPT09ICdzdHlsZS5jc3MnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAnaW5kZXguY3NzJyBhcyBzdHJpbmdcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBhc3NldEluZm8ubmFtZSBhcyBzdHJpbmdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrVixTQUFTLG9CQUFvQjtBQUMvVyxPQUFPLFNBQVM7QUFDaEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLFNBQVM7QUFKaEIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTywwQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsSUFBSTtBQUFBLE1BQ0YsUUFBUTtBQUFBLE1BQ1IsY0FBYztBQUFBLElBQ2hCLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsa0NBQVcsWUFBWTtBQUFBLE1BQ3RDLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLFNBQVMsQ0FBQyxLQUFLO0FBQUEsSUFDakI7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLFVBQ1AsS0FBSztBQUFBLFFBQ1A7QUFBQSxRQUNBLGdCQUFnQixDQUFDLGNBQWM7QUFDN0IsY0FBSSxVQUFVLFNBQVMsYUFBYTtBQUNsQyxtQkFBTztBQUFBLFVBQ1Q7QUFDQSxpQkFBTyxVQUFVO0FBQUEsUUFDbkI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
