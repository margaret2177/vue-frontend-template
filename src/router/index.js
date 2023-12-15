import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
import HomeView from "@/views/HomeView";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.users.isAuthenticated;

  if (to.matched.some((route) => route.meta.requiresAuth) && !isAuthenticated) {
    // Redirect to the login page if authentication is required but the user is not authenticated
    next("/");
  } else {
    // Continue to the requested route
    next();
  }
});

export default router;
