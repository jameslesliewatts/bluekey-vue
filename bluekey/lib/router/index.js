import "core-js/modules/es.object.to-string";
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
Vue.use(VueRouter);
var routes = [{
  path: "/",
  name: "Home",
  component: Home
}, {
  path: "/about",
  name: "About",
  component: function component() {
    return import(
    /* webpackChunkName: "about" */
    "../views/About.vue");
  }
}, {
  path: "/for-rent",
  name: "ForRent",
  component: function component() {
    return import(
    /* webpackChunkName: "about" */
    "../views/ForRent.vue");
  }
}, {
  path: "/furnished",
  name: "Furnished",
  component: function component() {
    return import(
    /* webpackChunkName: "about" */
    "../views/Furnished.vue");
  }
}];
var router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes
});
export default router;