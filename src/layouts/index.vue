<template>
  <div class="">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LayoutIndex',

  props: {},

  emits: [],

  setup(props, { attrs, slots, emit }) {
    return {};
  },

  components: {}
});
</script>

<style lang="less" scoped></style>
