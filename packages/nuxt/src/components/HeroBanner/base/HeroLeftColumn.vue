<script setup lang="ts">
interface HeroLeftColumn {
  title?: string
  subtitle?: string
}

defineProps<HeroLeftColumn>()
</script>

<template>
  <div>
    <div class="flex flex-col space-y-8">
      <HeroBannerTitle v-if="title" :title="title" />
      <HeroBannerSubtitle v-if="subtitle" :subtitle="subtitle" />
      <HeroBannerCTA />
    </div>
  </div>
</template>
