<script setup lang="ts">
interface CarouselTitleProps {
  title?: string
}

defineProps<CarouselTitleProps>()
</script>

<template>
  <h2>{{ title }}</h2>
</template>
