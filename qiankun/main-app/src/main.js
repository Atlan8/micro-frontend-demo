import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { registerMicroApps, start } from "qiankun";

createApp(App).use(router).mount("#app");

registerMicroApps([
  {
    name: "react app",
    entry: "//localhost:3000",
    container: "#container",
    activeRule: "/sub-app",
  },
]);

start({
  prefetch: true, // 预加载子应用
  sandbox: {
    strictStyleIsolation: true, //  shadow dom的方式实现样式隔离
    // experimentalStyleIsolation: true, //添加特殊的选择器的方式实现样式隔离
  },
});
