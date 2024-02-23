<script setup lang="ts">
import type { CarouselItem } from '~/types/components/CarosuelItem.types'

interface BaseCarouselProps {
  showNumberOfItems: number
  title: string
  carouselItems: CarouselItem[]
}

defineProps<BaseCarouselProps>()
</script>

<template>
  <div>
    <CarouselTitle :title="title" />
    <CarouselItems :carousel-items="carouselItems" :show-number-of-items="showNumberOfItems" />
  </div>
</template>
