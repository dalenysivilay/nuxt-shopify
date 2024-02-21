<script setup lang="ts">
interface HeroBannerTitleProps {
  title?: string
}

withDefaults(
  defineProps<HeroBannerTitleProps>(),
  {
    title: 'Default Title',
  },
)
</script>

<template>
  <h1
    class="
      mb-6 text-4xl font-semibold text-white

      md:text-5xl
    "
  >
    {{ title }}
  </h1>
</template>
