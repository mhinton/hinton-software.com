<script setup lang="ts">
const { data } = await useAsyncData('blog', () => queryContent("/blog").find());
</script>

<template>
  <div>
    <h1>Blog</h1>
  </div>

  <main>
    <ContentDoc>
      <template #not-found>
        No content found for url.
      </template>
    </ContentDoc>

    <div v-for="article in data">
      <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
    </div>
  </main>

</template>

<style scoped>

</style>
