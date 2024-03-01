<script setup lang="ts">
import CartSliderHeader from './CartSliderHeader.vue'
import BaseCart from '~/components/Cart/base/BaseCart.vue'

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
    :body-component="BaseCart"
  />
</template>
