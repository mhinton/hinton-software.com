<script setup lang="ts">
const appConfig = useAppConfig();
const navigation = appConfig.navigation;
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div
      class="bg-white" :class="{
        isolate: $route.path === '/',
      }"
    >
      <div class="px-6 py-6 lg:px-8">
        <LandingNav :navigation="navigation" />
        <LandingMobileNav :navigation="navigation" />
      </div>
    </div>
    <div class="flex-1 container mx-auto z-0 px-4 py-6 lg:px-0">
      <slot />
    </div>
    <LandingFooter />
  </div>
</template>

<style scoped>

</style>
