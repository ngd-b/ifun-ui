import { config } from "../vite.config";
import path from "path";
import fs from "fs-extra";
import { build, defineConfig, InlineConfig, UserConfig } from "vite";

const buildAll = async () => {
  // 全量打包
  await build(defineConfig(config as UserConfig) as InlineConfig);

  // 复制 Package.json 文件
  const packageJson = require("../package.json");
  packageJson.main = "ifun-ui.umd.js";
  packageJson.module = "ifun-ui.esm.js";
  fs.outputFile(
    path.resolve(config.build.outDir, `package.json`),
    JSON.stringify(packageJson, null, 2)
  );
  // 拷贝 README.md文件
  fs.copyFileSync(
    path.resolve("./README.md"),
    path.resolve(config.build.outDir + "/README.md")
  );
  // 分模块打包
  const srcDir = path.resolve(__dirname, "../src/");
  fs.readdirSync(srcDir)
    .filter((name) => {
      // 获取组件包
      const componentDir = path.resolve(srcDir, name);
      const isDir = fs.lstatSync(componentDir).isDirectory();

      return isDir && fs.readdirSync(componentDir).includes("index.ts");
    })
    .forEach(async (name) => {
      const outDir = path.resolve(config.build.outDir, name);

      const custom = {
        lib: {
          entry: path.resolve(srcDir, name),
          name,
          fileName: "index",
          formats: ["es", "umd"],
        },
        outDir,
      };
      Object.assign(config.build, custom);

      await build(defineConfig(config as UserConfig) as InlineConfig);

      // 创建package.json文件
      fs.outputFile(
        path.resolve(outDir, "package.json"),
        `{
            "name":"ifun-ui/${name}",
            "main":"index.umd.js",
            "module":"index.esm.js"}`,
        "utf-8"
      );
    });
};

// run
buildAll();
