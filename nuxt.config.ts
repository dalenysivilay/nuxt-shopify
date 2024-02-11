import apollo from './configs/apollo.config'

export default defineNuxtConfig({
  components: {
    dirs: [
      {
        path: '~/components/base',
        pathPrefix: false,
      },
      {
        path: '~/components/global',
        pathPrefix: true,
      },
    ],
  },
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
