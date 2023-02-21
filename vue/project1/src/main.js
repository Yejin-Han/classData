import { createApp } from "vue";
/* import { createApp } from "vue/dist/vue.esm-bundler"; */ //내부에서 선언한 component 인식 안될 떄
import App from "./App.vue";

createApp(App).mount("#app");
