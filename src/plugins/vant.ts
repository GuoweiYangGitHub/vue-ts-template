// Toast
import { App } from 'vue';
import { Toast, Dialog, Notify, ImagePreview } from 'vant';
import 'vant/es/toast/style';
import 'vant/es/dialog/style';
import 'vant/es/notify/style';
import 'vant/es/image-preview/style';

const components = [Toast, Dialog, Notify, ImagePreview];

/**
 * 初始化vant组件
 * @param app
 */
export function initVantComponent(app: App<Element>): void {
  components.forEach((component) => {
    app.use(component);
  });
}
