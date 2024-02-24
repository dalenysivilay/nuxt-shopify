import { apollo, components, pagesExtendHook } from './configs/index.config'

export default defineNuxtConfig({
  apollo,
  srcDir: 'src',
  components,
  hooks: {
    'pages:extend': pagesExtendHook,
  },
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/apollo',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/strapi',
    'nuxt-icon',
    'nuxt-swiper',
  ],
  devtools: { enabled: true },
})
