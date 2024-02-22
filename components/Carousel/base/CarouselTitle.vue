<script setup lang="ts">
interface CarouselTitleProps {
  title: string
}

defineProps<CarouselTitleProps>()
</script>

<template>
  <h2 v-if="title" class="mb-4 text-center text-3xl font-semibold capitalize text-brandTextDark">
    {{ title }}
  </h2>
</template>
