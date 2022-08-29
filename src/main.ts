import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';
import '@/styles/index.scss';
import { initVantComponent } from '@/plugins/vant';
import 'nprogress/nprogress.css'; // 进度条样式

const app = createApp(App);

app.use(router);
app.use(store);

// vant 组件
initVantComponent(app);

app.mount('#app');
