// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@nuxt/image",
    "@nuxt/content",
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

  image: {
    format: ["webp", "jpg"],
  },

  nitro: {
    prerender: {
      routes: [
        "/_ipx/s_512x338/cta-laptop.jpg",
        // etc.
      ],
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
