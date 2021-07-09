import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import App from "./App.vue";
import VueApexCharts from "vue-apexcharts";
import Skeleton from "vue-loading-skeleton";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VueApexCharts);
Vue.use(Skeleton);
Vue.component("apexchart", VueApexCharts);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
