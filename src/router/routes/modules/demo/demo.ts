import type { AppRouteModule } from '@/router/types';
import { LAYOUT } from '@/router/constant';

const Demo: AppRouteModule = {
  path: '/demo',
  name: 'Demo',
  component: LAYOUT,
  redirect: '/demo/index',
  meta: {
    title: '测试',
    icon: ''
  },
  children: [
    {
      path: 'index',
      name: 'index',
      component: () => import('@/views/demo/index.vue'),
      meta: {
        title: '首页',
        icon: ''
      }
    }
  ]
};

export default Demo;
