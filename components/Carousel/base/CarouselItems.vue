<script setup lang="ts">
interface CarouselItemsProps {
  carouselItems?: Component | undefined
}

defineProps<CarouselItemsProps>()
</script>

<template>
  <div>
    <div v-for="(item, index) in carouselItems" :key="item" :index="index" />
  </div>
</template>
