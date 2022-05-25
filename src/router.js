import Vue from "vue";
import Router from "vue-router";
import Usuario from "@/views/Usuario.vue";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
      {
        path: "/usuario",
        name: "usuario",
        component: Usuario
      }
    ],
  });