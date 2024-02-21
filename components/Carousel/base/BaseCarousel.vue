<script setup lang="ts">
interface BaseCarouselProps {
  showNumberOfItems?: number
  title: string
  carouselItems: Component | undefined
}

defineProps<BaseCarouselProps>()
</script>

<template>
  <div>
    <CarouselTitle :title="title" />
    <CarouselContainer>
      <template #carousel-items>
        <CarouselItems :carousel-items="carouselItems" />
      </template>
    </CarouselContainer>
  </div>
</template>
