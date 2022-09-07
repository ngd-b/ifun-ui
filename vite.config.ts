/// <reference types="vitest" />
import { defineConfig } from "vite";
import Unocss from "./config/unocss";
// vue
import vue from "@vitejs/plugin-vue";
// jsx
import vueJSX from "@vitejs/plugin-vue-jsx";

// rollup options
const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

// config vite
export default defineConfig({
  plugins: [
    Unocss(),
    vue(),
    vueJSX({
      // options
    }),
  ],
  // 库模式，编译打包
  build: {
    rollupOptions,
    minify: false,
    // cssCodeSplit: true,

    lib: {
      entry: "./src/entry.ts",
      name: "FunUI",
      fileName: "fun-ui",
      // 导出
      // 增加了umd，iife 会报错 it's recommanded to set `build.cssCodeSplit` to true.
      // formats: ["esm", "umd", "iife"],
      formats: ["es"],
    },
  },
  // 单元测试
  test: {
    globals: true, // global API
    environment: "happy-dom", // 模拟真实DOM
    transformMode: {
      web: [/.[tj]sx$/], // 支持jsx语法
    },
  },
});
