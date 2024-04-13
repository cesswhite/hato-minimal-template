// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@vueuse/motion/nuxt", "@nuxt/image"],
  image: {
    q: 50,
    alias: {
      unsplash: "https://images.unsplash.com",
    },
    dir: "assets/images",
    provider: "unsplash",
    unsplash: {
      modifiers: {
        q: 50,
        w: 1920,
        auto: "format",
        fit: "crop",
        fm: "webp",
        ixlib: "rb-4.0.3",
        ixid: "M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    },
  },
});
