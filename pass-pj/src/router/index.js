import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/views/Main.vue";
import InformationView from "@/views/InformationView.vue";
import InformationDetail from "@/views/InformationDetail.vue";
import InformationModify from "@/views/InformationModify.vue";
import InformationWrite from "@/views/InformationWrite.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/information",
    name: "information",
    component: InformationView,
  },
  {
    path: "/information/detail/:no",
    name: "informationDetail",
    component: InformationDetail,
  },
  {
    path: "/information/modify/:no",
    name: "informationModify",
    component: InformationModify,
  },
  {
    path: "/information/write",
    name: "informationWrite",
    component: InformationWrite,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
