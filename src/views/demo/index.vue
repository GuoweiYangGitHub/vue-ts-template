<template>
  <div>
    <div>{{ msg }}</div>
    <div>{{ msg1 }}</div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from 'vue';

const data = reactive({
  msg: '测试数据',
  msg1: 'demo123'
});
const { msg, msg1 } = toRefs(data);
</script>

<style lang="scss" scoped></style>
