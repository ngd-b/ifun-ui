import { defineConfig } from "vite";
import Unocss from "../config/unocss";
// jsx
import vueJSX from "@vitejs/plugin-vue-jsx";

// config vite
export default defineConfig({
  base: "/ifun-ui/",
  plugins: [
    Unocss(),
    vueJSX({
      // options
    }),
  ],
});
