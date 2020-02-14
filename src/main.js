import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { routes } from "./routes";
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active"
});
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
