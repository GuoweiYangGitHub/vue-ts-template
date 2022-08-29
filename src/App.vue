<template>
  <Suspense>
    <router-view></router-view>

    <template #fallback>加载中。。。 </template>
  </Suspense>
</template>

<script lang="ts" setup>
import { watchEffect } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
watchEffect(() => {
  if (route.meta?.title) {
    document.title = route.meta?.title as any;
  }
});
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
}

#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: colors(bodyColor);
}
</style>
