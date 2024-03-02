<script setup lang="ts">
import type { HeroBannerContent, HeroBannerProps } from '~/types/components/components.types'

const props = defineProps<HeroBannerProps>()
const content = ref<HeroBannerContent>()
const query = `*[_type == "heroBanner" && _id == "${props.id}"][0] {
  "title": title,
  "subtitle": subtitle,
  "backgroundImage": backgroundImage.asset->url,
  "productImage": productImage.asset->url,
}`

const data = useSanityContent({ id: props.id, query, defaultContent: props.content })

onMounted(() => {
  content.value = data.value
})
</script>

<template>
  <div v-if="content">
    <HeroBannerContainer :background-image="content.backgroundImage">
      <template #heroBannerContent>
        <HeroLeftColumn :title="content.title" :subtitle="content.subtitle" />
        <HeroRightColumn :product-image="content.productImage" />
      </template>
    </HeroBannerContainer>
  </div>
  <div v-if="!content" class="animate-pulse">
    <HeroBannerLoading />
  </div>
</template>
