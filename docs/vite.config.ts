import { defineConfig } from "vite";
import Unocss from "../config/unocss";
// jsx
import vueJSX from "@vitejs/plugin-vue-jsx";

// config vite
export default defineConfig({
  plugins: [
    Unocss(),
    vueJSX({
      // options
    }),
  ],
});
