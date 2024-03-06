<script setup lang="ts">
import CartSliderHeader from './base/CartSlider/CartSliderHeader.vue'
import CartSliderBody from './base/CartSlider/CartSliderBody.vue'
import CartSliderFooter from './base/CartSlider/CartSliderFooter.vue'

const navigationStore = useNavigationStore()
const isCartSliderOpen = computed(() => navigationStore.isCartSliderOpen)
const toggleCartSlider = () => navigationStore.toggleCartSlider()
</script>

<template>
  <TemplateSlider
    :is-open="isCartSliderOpen"
    :toggle-slider="toggleCartSlider"
    side="right"
    :header-component="CartSliderHeader"
    :body-component="CartSliderBody"
    :footer-component="CartSliderFooter"
  />
</template>
