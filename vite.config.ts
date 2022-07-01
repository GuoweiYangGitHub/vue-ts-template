import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Icons from 'unplugin-icons/vite'; // icon相关
import IconsResolver from 'unplugin-icons/resolver'; // icon相关
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import Inspect from 'vite-plugin-inspect';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '/@/': path.resolve(__dirname, 'types')
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core'],
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon'
        })
      ],
      dts: path.resolve(__dirname, 'types', 'auto-imports.d.ts')
    }),
    Components({
      resolvers: [
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep'] // 重点，记住这里配了个ep，参数别改，就用ep，改了后我发现就不好使了
        }),
        ElementPlusResolver()
      ],
      dts: path.resolve(__dirname, 'types', 'components.d.ts')
    }),
    Icons({
      autoInstall: true
    }),
    Inspect()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ['@import "@/styles/variables.scss";']
      }
    }
  },
  server: {
    port: 8080,
    host: '0.0.0.0',
    open: true,
    // 设置http代理
    proxy: {
      '/api': {
        target: 'https://api.guowei.link/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
