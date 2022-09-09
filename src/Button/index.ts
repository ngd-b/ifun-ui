import FButton from "./Button";
import { App } from "vue";
import "uno.css";

// 导出button组件
export { FButton };

// 导出vue插件
export default {
  install(app: App) {
    app.component(FButton.name, FButton);
  },
};
