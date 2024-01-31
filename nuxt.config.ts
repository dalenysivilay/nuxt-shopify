import apollo from './configs/apollo.config'

export default defineNuxtConfig({
  apollo,
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/apollo',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
  ],
  devtools: { enabled: true },
})
