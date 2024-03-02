<script setup lang="ts">
interface HeroBannerSubtitleProps {
  subtitle?: string
}

defineProps<HeroBannerSubtitleProps>()
</script>

<template>
  <div v-if="subtitle">
    <p
      class="
        text-lg font-medium text-white

        md:text-2xl
      "
    >
      {{ subtitle }}
    </p>
  </div>
</template>
