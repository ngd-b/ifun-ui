/// <reference types="vitest" />
import { defineConfig, UserConfig } from "vite";
import Unocss from "./config/unocss";
// vue
import vue from "@vitejs/plugin-vue";
// jsx
import vueJSX from "@vitejs/plugin-vue-jsx";

// rollup options
const rollupOptions = {
  external: ["vue"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

// config vite

const config = {
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
    minify: "terser",
    sourcemap: true,
    outDir: "./dist",
    brotliSize: true,
    // cssCodeSplit: true,

    lib: {
      entry: "./src/entry.ts",
      name: "IFunUI",
      fileName: "ifun-ui",
      // 导出
      // 增加了umd，iife 会报错 it's recommanded to set `build.cssCodeSplit` to true.
      // formats: ["esm", "umd", "iife"],
      formats: ["esm", "umd", "iife"],
    },
  },
  // 单元测试
  test: {
    globals: true, // global API
    environment: "happy-dom", // 模拟真实DOM
    transformMode: {
      web: [/.[tj]sx$/], // 支持jsx语法
    },
    coverage: {
      provider: "istanbul", // 'c8'
      reporter: ["text", "json", "html"],
    },
  },
};

export { config };

export default defineConfig(config as UserConfig);
