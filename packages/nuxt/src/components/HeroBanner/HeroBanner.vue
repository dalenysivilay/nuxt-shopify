<script setup lang="ts">
import type { HeroBannerContent, HeroBannerProps } from '~/types/components/components.types'

const props = defineProps<HeroBannerProps>()
const content = ref<HeroBannerContent>()
const query = `*[_type == "heroBanner" && _id == "${props.id}"][0]`

const data = useSanityContent({ id: props.id, query, defaultContent: props.content })

onMounted(() => {
  content.value = data.value
})
</script>

<template>
  <div v-if="content">
    <div
      class="
        h-3/6 bg-cover bg-center

        md:rounded
      "
      :style="{ backgroundImage: `url(${content.backgroundImage})` }"
    >
      <div
        class="
          mx-auto flex h-full max-w-7xl px-4 py-12

          sm:py-24

          md:px-6
        "
      >
        <div class="flex flex-1 flex-col justify-center">
          <HeroBannerTitle :title="content.title" />
          <HeroBannerSubtitle :subtitle="content.subtitle" />
          <div
            class="
              flex flex-col space-y-4

              md:flex-row md:space-x-4 md:space-y-0
            "
          >
            <ShopCollectionButton route="/collections" />
            <ShopCollectionButton route="/collections" />
          </div>
        </div>
        <div
          class="
            hidden items-center justify-center

            md:block
          "
        >
          <div class="size-96 overflow-hidden rounded-md">
            <img :src="content.productImage" class="size-full object-cover">
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="!content" class="animate-pulse">
    <div
      class="
        h-3/6 bg-gray-300

        md:rounded
      "
    >
      <div
        class="
          mx-auto flex h-full max-w-7xl px-4 py-12

          sm:py-24

          md:px-6
        "
      >
        <div class="flex flex-1 flex-col justify-center space-y-6">
          <div class="h-8 w-3/4 rounded bg-gray-200" />
          <div class="h-6 w-1/2 rounded bg-gray-200" />
          <div
            class="
              flex flex-col space-y-4

              md:flex-row md:space-x-4 md:space-y-0
            "
          >
            <div class="h-10 w-32 rounded bg-gray-200" />
            <div class="h-10 w-32 rounded bg-gray-200" />
          </div>
        </div>
        <div
          class="
            hidden w-1/3 items-center justify-center

            md:block
          "
        >
          <div class="size-48 rounded-md bg-gray-200" />
        </div>
      </div>
    </div>
  </div>
</template>
