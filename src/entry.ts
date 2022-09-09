import { App } from "vue";
import "uno.css";
import { FButton } from "./Button";
// 单个组件导出
export { FButton };

// 全部导入，install 方法
export default {
  install(app: App): void {
    app.component(FButton.name, FButton);
  },
};
