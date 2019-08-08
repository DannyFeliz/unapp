import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import "tailwindcss/dist/base.css";
import "tailwindcss/dist/components.css";
import "tailwindcss/dist/utilities.css";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
