import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/mass",
      name: "mass",
      component: () => import("../views/MassView.vue"),
    },
    {
      path: "/catechism",
      name: "catechism",
      component: () => import("../views/CatechismView.vue"),
    },
    {
      path: "/songs",
      name: "songs",
      component: () => import("../views/SongsView.vue"),
    },
  ],
});

export default router;
