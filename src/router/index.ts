import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import routes from '@/router/routes/index';
import NProgress from 'nprogress'; // progress bar
// NProgress.configure({ showSpinner: false }); // NProgress Configuration

const router = createRouter({
  history: createWebHistory(import.meta.env.MODE),
  routes: routes as unknown as RouteRecordRaw[]
});

router.beforeEach(async (to, _, next) => {
  NProgress.start(); // start progress
  console.log(to.name, 'to');
  next();
});

router.afterEach((to, from, failure) => {
  NProgress.done(); // finish progress bar
});
export default router;
