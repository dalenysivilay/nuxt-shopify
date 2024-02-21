<script setup lang="ts">
interface HeroBannerSubtitleProps {
  subtitle?: string
}

withDefaults(
  defineProps<HeroBannerSubtitleProps>(),
  {
    subtitle: 'Default Subtitle',
  },
)
</script>

<template>
  <p
    class="
      mb-8 text-lg font-medium text-white

      md:text-2xl
    "
  >
    {{ subtitle }}
  </p>
</template>
