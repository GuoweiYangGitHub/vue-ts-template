import type { AppRouteModule } from '@/router/types';
import { LAYOUT } from '@/router/constant';

const Main: AppRouteModule = {
  path: '/main',
  name: 'Main',
  component: LAYOUT,
  redirect: '/main/index',
  meta: {
    title: '首页',
    icon: '',
    isShow: false
  },
  children: [
    {
      path: 'index',
      name: 'index',
      component: () => import('@/views/main/index/index.vue'),
      meta: {
        title: '首页',
        icon: '',
        isShow: true
      }
    }
  ]
};

export default Main;
