import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import Library from "./views/Library.vue";
import store from "./store";
// import data from "./assets/childrensbooks.json";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
