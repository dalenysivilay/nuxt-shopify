<script setup lang="ts">
const navigationStore = useNavigationStore()
const isNavSliderOpen = computed(() => navigationStore.isNavSliderOpen)
const toggleSlider = () => navigationStore.toggleNavSlider()
</script>

<template>
  <TemplateSlider
    :is-open="isNavSliderOpen"
    :toggle-slider="toggleSlider"
  />
</template>
