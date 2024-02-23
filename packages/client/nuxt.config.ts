import type { NuxtPage } from 'nuxt/schema'
import apollo from './src/configs/apollo.config'

export default defineNuxtConfig({
  apollo,
  srcDir: 'src',
  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false,
      },
      {
        path: '~/pages',
        pattern: '*/components/**',
        pathPrefix: false,
      },
    ],
  },
  hooks: {
    'pages:extend': function (pages) {
      const pagesToRemove: NuxtPage[] = []
      pages.forEach((page) => {
        if (page.path.includes('component'))
          pagesToRemove.push(page)
      })

      pagesToRemove.forEach((page: NuxtPage) => {
        pages.splice(pages.indexOf(page), 1)
      })
    },
  },
  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/apollo',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    'nuxt-swiper',
  ],
  devtools: { enabled: true },
})