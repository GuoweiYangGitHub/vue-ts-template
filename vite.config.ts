import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '/@/': path.resolve(__dirname, 'types')
    }
  },
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [VantResolver()],
      dts: './types/components.d.ts'
    })
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
    hmr: {
      host: '127.0.0.1',
      port: 8080
    },
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
