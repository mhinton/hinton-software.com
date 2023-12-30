// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxt/image",
    "@nuxt/content"
  ],

  typescript: {
    shim: false,
  },

  // debug: true,
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
