<script setup lang="ts">
import CartSliderHeader from './CartSliderHeader.vue'
import CartBody from '~/components/Cart/base/CartBody.vue'
import CartFooter from '~/components/Cart/base/CartFooter.vue'

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
    :body-component="CartBody"
    :footer-component="CartFooter"
  />
</template>
