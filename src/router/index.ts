import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/News.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "News",
    component: Home
  },
  {
    path: "/news",
    name: "News",
    component: () => import("../views/News.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
