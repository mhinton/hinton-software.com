<script setup lang="ts">
import { consola } from "consola";

definePageMeta({
  layout: "landing",
});

useHead({
  title: "Hinton Software",
});

const contactMeIsOpen = ref(false);
function contactMeClicked(_event: any) {
  consola.info("open modal");
  contactMeIsOpen.value = true;
}
</script>

<template>
  <div>
    <!-- <LandingFeatureTwoColumn /> -->

    <LandingFeatureGrid />

    <LandingCta @contact="contactMeClicked" />

    <LandingContactMe :open="contactMeIsOpen" @close="contactMeIsOpen = false" />
  </div>
</template>
