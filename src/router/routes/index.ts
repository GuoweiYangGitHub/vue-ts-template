import type { AppRouteRecordRaw, AppRouteModule } from '@/router/types';

import { LAYOUT, PAGE_NOT_FOUND_NAME, EXCEPTION_COMPONENT } from '@/router/constant';

const modules = import.meta.globEager('./modules/**/*.ts');

const routeModuleList: AppRouteModule[] = [];

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {};
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  routeModuleList.push(...modList);
});

export const RootRoute: AppRouteRecordRaw = {
  path: '/',
  name: 'Dashboard',
  redirect: '/main/index',
  meta: {
    orderNo: 10,
    title: '首页',
    icon: 'ion:grid-outline',
    hideMenu: true
  }
};

export const LoginRoute: AppRouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/systerm/login/index.vue'),
  meta: {
    title: '登录',
    hideMenu: true
  }
};

export const RegisterRoute: AppRouteRecordRaw = {
  path: '/register',
  name: 'Register',
  component: () => import('@/views/systerm/register/index.vue'),
  meta: {
    title: '注册',
    hideMenu: true
  }
};

// 404 on a page
export const PAGE_NOT_FOUND_ROUTE: AppRouteRecordRaw = {
  path: '/:path(.*)*',
  name: PAGE_NOT_FOUND_NAME,
  component: LAYOUT,
  meta: {
    title: 'ErrorPage',
    hideBreadcrumb: true,
    hideMenu: true
  },
  children: [
    {
      path: '/:path(.*)*',
      name: PAGE_NOT_FOUND_NAME,
      component: EXCEPTION_COMPONENT,
      meta: {
        title: 'ErrorPage',
        hideBreadcrumb: true,
        hideMenu: true
      }
    }
  ]
};

export default [RootRoute, LoginRoute, RegisterRoute, ...routeModuleList, PAGE_NOT_FOUND_ROUTE];
