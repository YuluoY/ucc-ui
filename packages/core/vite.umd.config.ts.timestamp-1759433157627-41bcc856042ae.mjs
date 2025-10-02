// vite.umd.config.ts
import { defineConfig } from "file:///D:/Desktop/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/ucc-ui/node_modules/.pnpm/vite@5.4.20_@types+node@20.19.19_sass-embedded@1.93.2_sass@1.93.2_terser@5.44.0/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Desktop/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/ucc-ui/node_modules/.pnpm/@vitejs+plugin-vue@5.2.4_vite@5.4.20_@types+node@20.19.19_sass-embedded@1.93.2_sass@1.93.2_te_mwh7lr7eeyp4kowxkbjnskt63e/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { resolve } from "node:path";
import vueJsx from "file:///D:/Desktop/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/ucc-ui/node_modules/.pnpm/@vitejs+plugin-vue-jsx@3.1.0_vite@5.4.20_@types+node@20.19.19_sass-embedded@1.93.2_sass@1.93._smuxq4mdyde2tdzug64vl6rnji/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import dts from "file:///D:/Desktop/%E6%88%91%E7%9A%84%E9%A1%B9%E7%9B%AE/ucc-ui/node_modules/.pnpm/vite-plugin-dts@4.5.4_@types+node@20.19.19_rollup@4.52.3_typescript@5.9.3_vite@5.4.20_@types+_vpjagatiy4hbutko6w6tq54rg4/node_modules/vite-plugin-dts/dist/index.mjs";
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
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler"
        // 使用现代编译器 API
      }
    }
  },
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
          if (assetInfo.name === "style.css")
            return "index.css";
          return assetInfo.name;
        }
      }
    }
  }
});
export {
  vite_umd_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS51bWQuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcRGVza3RvcFxcXFxcdTYyMTFcdTc2ODRcdTk4NzlcdTc2RUVcXFxcdWNjLXVpXFxcXHBhY2thZ2VzXFxcXGNvcmVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXERlc2t0b3BcXFxcXHU2MjExXHU3Njg0XHU5ODc5XHU3NkVFXFxcXHVjYy11aVxcXFxwYWNrYWdlc1xcXFxjb3JlXFxcXHZpdGUudW1kLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovRGVza3RvcC8lRTYlODglOTElRTclOUElODQlRTklQTElQjklRTclOUIlQUUvdWNjLXVpL3BhY2thZ2VzL2NvcmUvdml0ZS51bWQuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnLCBQbHVnaW5PcHRpb24gfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ25vZGU6cGF0aCdcclxuaW1wb3J0IHZ1ZUpzeCBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUtanN4J1xyXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKCksXHJcbiAgICB2dWVKc3goKSxcclxuICAgIGR0cyh7XHJcbiAgICAgIG91dERpcjogJ2Rpc3QvdHlwZXMnLFxyXG4gICAgICB0c2NvbmZpZ1BhdGg6ICcuLi8uLi90c2NvbmZpZy5idWlsZC5qc29uJ1xyXG4gICAgfSkgYXMgdW5rbm93biBhcyBQbHVnaW5PcHRpb25cclxuICBdLFxyXG4gIGNzczoge1xyXG4gICAgcHJlcHJvY2Vzc29yT3B0aW9uczoge1xyXG4gICAgICBzY3NzOiB7XHJcbiAgICAgICAgYXBpOiAnbW9kZXJuLWNvbXBpbGVyJyAvLyBcdTRGN0ZcdTc1MjhcdTczQjBcdTRFRTNcdTdGMTZcdThCRDFcdTU2NjggQVBJXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBvdXREaXI6ICdkaXN0L3VtZCcsXHJcbiAgICBsaWI6IHtcclxuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9pbmRleC50cycpLFxyXG4gICAgICBuYW1lOiAnVWNjVUknLFxyXG4gICAgICBmaWxlTmFtZTogJ2luZGV4JyxcclxuICAgICAgZm9ybWF0czogWyd1bWQnXVxyXG4gICAgfSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgZXh0ZXJuYWw6IFsndnVlJ10sXHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIGV4cG9ydHM6ICduYW1lZCcsXHJcbiAgICAgICAgZ2xvYmFsczoge1xyXG4gICAgICAgICAgdnVlOiAnVnVlJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6IGFzc2V0SW5mbyA9PlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlmIChhc3NldEluZm8ubmFtZSA9PT0gJ3N0eWxlLmNzcycpXHJcbiAgICAgICAgICAgIHJldHVybiAnaW5kZXguY3NzJyBhcyBzdHJpbmdcclxuICAgICAgICAgIHJldHVybiBhc3NldEluZm8ubmFtZSBhcyBzdHJpbmdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFrVixTQUFTLG9CQUFrQztBQUM3WCxPQUFPLFNBQVM7QUFDaEIsU0FBUyxlQUFlO0FBQ3hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLFNBQVM7QUFKaEIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTywwQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsSUFBSTtBQUFBLE1BQ0YsUUFBUTtBQUFBLE1BQ1IsY0FBYztBQUFBLElBQ2hCLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxxQkFBcUI7QUFBQSxNQUNuQixNQUFNO0FBQUEsUUFDSixLQUFLO0FBQUE7QUFBQSxNQUNQO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxrQ0FBVyxZQUFZO0FBQUEsTUFDdEMsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsU0FBUyxDQUFDLEtBQUs7QUFBQSxJQUNqQjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsVUFBVSxDQUFDLEtBQUs7QUFBQSxNQUNoQixRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsVUFDUCxLQUFLO0FBQUEsUUFDUDtBQUFBLFFBQ0EsZ0JBQWdCLGVBQ2hCO0FBQ0UsY0FBSSxVQUFVLFNBQVM7QUFDckIsbUJBQU87QUFDVCxpQkFBTyxVQUFVO0FBQUEsUUFDbkI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
