import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
/* import LandPage from "../views/LandPage.vue";
import ArtistView from "../views/ArtistView.vue"; */


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    /* {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/artists",
      name: "artists",
      component: ArtistView,
    }, */

  ],
});

export default router;