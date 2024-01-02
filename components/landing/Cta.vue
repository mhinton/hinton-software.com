<script setup lang="ts">
const emit = defineEmits<{
  (event: "contact"): void
}>();
const appConfig = useAppConfig();
</script>

<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 my-4">
      <div
        class="relative isolate overflow-hidden bg-blue-zodiac-800 p-6 shadow-2xl rounded-3xl sm:px-8 sm:py-16 lg:px-16 lg:py-16 lg:flex lg:items-center"
      >
        <div
          class="flex-col justify-center items-center mx-auto max-w-md text-center lg:mx-0 lg:flex-auto md:flex lg:py-32 lg:text-left"
        >
          <h2
            class="text-3xl font-bold tracking-tight text-blue-zodiac-50 sm:text-4xl"
          >
            {{ appConfig.cta.title }}
          </h2>
          <p class="my-6 text-2xl leading-8 text-blue-zodiac-100">
            {{ appConfig.cta.description }}
          </p>
          <div
            class="flex items-center justify-center gap-x-6 mb-6 lg:justify-start"
          >
            <template v-for="link in appConfig.cta.links" :key="link.title">
              <!-- <NuxtLink
                v-if="link.type === 'primary'" :to="link.url"
                class="rounded-md bg-secondary px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-pomegranate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                @click.prevent="emit('contact')"
              >
                {{ link.title }}
              </NuxtLink> -->
              <button
                v-if="link.type === 'primary'"
                type="button"
                class="text-xl rounded-md mt-3 bg-secondary px-4 py-2 text-base font-semibold leading-7 tracking-wider text-white shadow-sm hover:bg-pomegranate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                @click.prevent="emit('contact')"
              >
                {{ link.title }}
              </button>
              <NuxtLink
                v-else-if="link.type === 'alt'"
                :to="link.url"
                class="text-base font-semibold leading-7 text-white"
              >
                {{ link.title }}
                <span v-if="link.arrow" aria-hidden="true">→</span>
              </NuxtLink>
            </template>
          </div>
        </div>
        <div class="overflow-hidden hidden md:block mx-auto">
          <NuxtImg
            :src="appConfig.cta.image"
            class="max-w-lg rounded-md mx-auto my-0 mx-0"
            width="512"
            height="338"
            alt="Laptop slightly opened"
          />
        </div>
      </div>
    </div>
  </div>
</template>
