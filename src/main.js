import Vue from "vue";
import App from "./App.vue";

import { store } from "./_store";
import  router from "./_helpers/router";
// app.js
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { TokenService } from "./_services";
import { ApiService } from "./_services";

//import http  from './http';
Vue.config.productionTip = false;
Vue.use(BootstrapVue);

// Set the base URL of the API
ApiService.init(process.env.VUE_APP_ROOT_API);
console.log(process.env.VUE_APP_ROOT_API);

// If token exists set header
if (TokenService.getToken()) {
  ApiService.setHeader();
}

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
