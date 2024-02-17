<script setup lang="ts">
const navigationStore = useNavigationStore()
const cartSliderOpen = computed(() => navigationStore.cartSliderOpen)
</script>

<template>
  <Header />
  <div>
    <BaseSlider :is-open="cartSliderOpen" side="left" />
  </div>
  <div
    class="
      px-4

      md:px-24
    "
  >
    <slot />
  </div>
</template>
