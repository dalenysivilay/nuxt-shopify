<script setup lang="ts">
import CartSliderHeader from './CartSliderHeader.vue'

const navigationStore = useNavigationStore()
const isCartSliderOpen = computed(() => navigationStore.isCartSliderOpen)
const toggleCartSlider = () => navigationStore.toggleCartSlider()
</script>

<template>
  <GlobalSlider
    :is-open="isCartSliderOpen"
    :toggle-slider="toggleCartSlider"
    side="right"
    :header-component="CartSliderHeader"
  />
</template>
