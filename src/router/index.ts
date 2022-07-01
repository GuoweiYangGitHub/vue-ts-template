import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import routes from '@/router/routes/index';
// console.log(routes, 'routes');

const router = createRouter({
  history: createWebHistory(import.meta.env.MODE),
  routes: routes as unknown as RouteRecordRaw[]
});

export default router;
