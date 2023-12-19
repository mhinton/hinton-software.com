// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxt/image",
    "@nuxt/test-utils/module",
  ],

  typescript: {
    shim: false,
  },

  devtools: {
    timeline: {
      enabled: true,
    },
  },

  vite: {
    vue: {
      script: {
        propsDestructure: true,
      },
    },
  },
});
