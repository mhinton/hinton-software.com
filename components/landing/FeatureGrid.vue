<script setup>
const appConfig = useAppConfig();
</script>

<template>
  <div class="bg-white py-12">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl">
        <div class="lg:text-center">
          <h2 class="text-3xl md:text-5xl font-bold text-secondary my-12">
            {{ appConfig.feature.title }}
          </h2>
          <p class="mt-2 text-3xl text-left font-semibold text-primary">
            {{ appConfig.feature.subtitle }}
          </p>
        </div>
        <p class="mt-2 text-2xl mt-8 leading-8 text-gray-900">
          {{ appConfig.feature.description }}
        </p>
      </div>
      <!-- <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
        <dl class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div v-for="feature in appConfig.features" :key="feature.name" class="relative pl-16">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base leading-7 text-gray-600">
              {{ feature.description }}
            </dd>
          </div>
        </dl>
      </div> -->
    </div>
  </div>
</template>
