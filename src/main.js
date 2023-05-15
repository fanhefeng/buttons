import { createApp } from "vue";
import App from "./App.vue";
import hljs from "highlight.js/lib/common";
import hljsVuePlugin from "@highlightjs/vue-plugin";

import "highlight.js/styles/atom-one-dark.css";
import "./style.css";

const app = createApp(App);
app.use(hljsVuePlugin);
app.mount("#app");

