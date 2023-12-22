import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store';
import '@/styles/index.scss';
import 'nprogress/nprogress.css'; // 进度条样式
import 'element-plus/dist/index.css';
const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
