<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<template>
  <div>
    <div class="relative px-6 lg:px-8">
      <div class="mx-auto flex flex-col items-center">
        <Logo />
        <!-- <div v-if="appConfig.announcement.enabled" class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            {{  appConfig.announcement.message }}
            <NuxtLink :to="appConfig.announcement.url" class="font-semibold text-indigo-600"><span class="absolute inset-0" aria-hidden="true" />Read more <span aria-hidden="true">&rarr;</span></NuxtLink>
          </div>
        </div> -->
        <div class="text-center">
          <!-- <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {{  appConfig.title  }}
          </h1> -->
          <!-- <p class="text-lg leading-8 text-gray-600"> -->
          <h1 class="text-4xl font-bold break-words tracking-tight leading-relaxed text-gray-900 sm:text-6xl">
            {{ appConfig.description }}
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
