import process from 'node:process'
import { apollo, components, pagesExtendHook } from './configs/index.config'

export default defineNuxtConfig({
  runtimeConfig: {
    sanity: {
      token: process.env.SANITY_TOKEN,
    },
  },
  apollo,
  sanity: {
    projectId: 'm0m2ev5u',
    dataset: 'production',
  },
  srcDir: 'src',
  alias: {
    '@types/components': './types/components',
  },
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
