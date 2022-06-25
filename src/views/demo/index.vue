<template>
  <div>
    <div>{{ msg }}</div>
    <div>{{ msg1 }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
  name: 'DemoPage',

  props: {},

  emits: [],

  setup(props, { attrs, slots, emit }) {
    const data = reactive({
      msg: '测试数据',
      msg1: 'demo123'
    });

    return {
      ...toRefs(data)
    };
  },

  components: {}
});
</script>

<style lang="scss" scoped></style>
