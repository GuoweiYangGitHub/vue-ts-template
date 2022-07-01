<template>
  <div class="">
    <div>这就是首页吗？</div>
    <div>
      <el-row class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
        <el-button>中文</el-button>
      </el-row>
    </div>

    <div class="icons">
      <el-icon><i-ep-BottomLeft /></el-icon>
      <el-icon><i-ep-Bell /></el-icon>
      <el-icon><i-ep-BellFilled /></el-icon>
      <el-icon><i-ep-Check /></el-icon>
      <el-icon><i-ep-Close /></el-icon>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainIndex',

  props: {},

  emits: [],

  setup(props, { attrs, slots, emit }) {
    return {};
  },

  components: {}
});
</script>

<style lang="scss" scoped>
.mb-4 {
  margin-top: 40px;
}
</style>
