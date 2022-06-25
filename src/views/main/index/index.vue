<template>
  <div class="home"> 这就是首页吗？ </div>
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
.home {
  font-size: 30px;
  color: #333;
  margin: 100px auto;
  text-align: center;
}
</style>
