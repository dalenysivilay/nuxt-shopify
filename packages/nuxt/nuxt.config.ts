import process from 'node:process'
import { apollo, components, pagesExtendHook, sanity } from './configs/index.config'

export default defineNuxtConfig({
  runtimeConfig: {
    sanity: {
      token: process.env.SANITY_TOKEN,
    },
  },
  apollo,
  sanity,
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
    '@nuxtjs/sanity',
    'nuxt-icon',
    'nuxt-swiper',
  ],
  devtools: { enabled: true },
})
