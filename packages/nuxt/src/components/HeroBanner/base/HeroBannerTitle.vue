<script setup lang="ts">
interface HeroBannerTitleProps {
  title?: string
}

defineProps<HeroBannerTitleProps>()
</script>

<template>
  <div v-if="title">
    <h1
      class="
        text-4xl font-semibold text-white

        md:text-5xl
      "
    >
      {{ title }}
    </h1>
  </div>
</template>
