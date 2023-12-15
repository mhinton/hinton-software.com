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
function contactMeClose(_event: any) {
  consola.info("close modal");
  contactMeIsOpen.value = false;
}
</script>

<template>
  <div>
    <!-- <LandingFeatureTwoColumn /> -->

    <LandingFeatureGrid />

    <LandingCta @contact="contactMeClicked" />

    <LandingContactMe :open="contactMeIsOpen" @close="contactMeClose" />
  </div>
</template>
