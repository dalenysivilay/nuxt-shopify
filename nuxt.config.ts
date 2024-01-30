import apollo from './src/configs/apollo.config'

export default defineNuxtConfig({
  srcDir: './src',
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
