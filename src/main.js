import Vue from "vue";
import NProgress from "vue-nprogress";
import App from "./App.vue";

import './assets/sass/omegaforce.scss'

Vue.use(NProgress);
const nprogress = new NProgress();
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  nprogress,
  render: h => h(App)
}).$mount("#application-frontpage-entry");
