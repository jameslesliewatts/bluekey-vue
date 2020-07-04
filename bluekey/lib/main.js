import Vue from "vue";
import "./assets/styles/main.scss";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;
new Vue({
  router: router,
  store: store,
  render: function render(h) {
    return h(App);
  }
}).$mount("#app");