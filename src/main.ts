import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "normalize.css";
import "./assets/css/index.less";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(ElementPlus);
app.use(router);
app.use(store);

app.mount("#app");
