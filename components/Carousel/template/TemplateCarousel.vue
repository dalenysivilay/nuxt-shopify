<script setup lang="ts">
import type { CarouselItem } from '~/types/components/CarosuelItem.types'

interface TemplateCarouselProps {
  showNumberOfItems?: number
  title?: string
  carouselItems: CarouselItem[]
}

withDefaults(defineProps<TemplateCarouselProps>(), {
  showNumberOfItems: 3,
  title: 'Carousel Title',
  carouselItems: () => [],
})
</script>

<template>
  <div>
    <BaseCarousel
      :title="title"
      :show-number-of-items="showNumberOfItems"
      :carousel-items="carouselItems"
    />
  </div>
</template>
