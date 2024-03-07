<script setup lang="ts">
import type { CarouselItemType } from '~/types/components/components.types'

interface BaseCarouselProps {
  showNumberOfItems: number
  title: string
  carouselItems: CarouselItemType[]
}

defineProps<BaseCarouselProps>()
</script>

<template>
  <div>
    <CarouselTitle :title="title" />
    <CarouselItems :carousel-items="carouselItems" :show-number-of-items="showNumberOfItems" />
  </div>
</template>
