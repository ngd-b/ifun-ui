import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";
import "@iconify-json/ic";

// 颜色
const colors = [
  "blue",
  "black",
  "gray",
  "red",
  "yellow",
  "green",
  "blue",
  "pink",
  "indiog",
  "purple",
];
// 图标
const icons = ["search", "edit", "check", "delete", "add"];
const safelist = [
  ...colors.map((item) => `bg-${item}-500`),
  ...colors.map((item) => `hover:bg-${item}-700`),
  ...icons.map((item) => `i-ic-baseline-${item}`),
];

export default () =>
  Unocss({
    safelist,
    presets: [presetUno(), presetAttributify(), presetIcons()],
  });
