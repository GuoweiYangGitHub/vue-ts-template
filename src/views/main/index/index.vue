<template>
  <div class="home">
    <div>这就是首页吗？</div>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Toast } from 'vant';
export default defineComponent({
  name: 'MainIndex',

  props: {},

  emits: [],

  setup(props, { attrs, slots, emit }) {
    Toast.loading({
      message: '加载中...',
      forbidClick: true
    });

    return {};
  },

  components: {}
});
</script>

<style lang="scss" scoped>
.home {
  font-size: 30px;
  color: #333;
  margin: 100px auto;
  text-align: center;
}
</style>
