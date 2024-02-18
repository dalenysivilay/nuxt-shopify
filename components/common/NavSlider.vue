<script setup lang="ts">
const navigationStore = useNavigationStore()
const isOpen = computed(() => navigationStore.isNavSliderOpen)
const toggleSlider = () => navigationStore.toggleNavSlider()
</script>

<template>
  <GlobalSlider
    :is-open="isOpen"
    :toggle-slider="toggleSlider"
    side="left"
  />
</template>
