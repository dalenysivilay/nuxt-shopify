<script setup lang="ts">
type Side = 'left' | 'right'

interface BaseSliderProps {
  isOpen: boolean
  toggleSlider: () => void
  side: Side
  headerComponent?: Component | undefined
  bodyComponent?: Component | undefined
  footerComponent?: Component | undefined
}

defineProps<BaseSliderProps>()
</script>

<template>
  <div
    class="
      fixed top-0 z-50 h-full min-w-96 bg-white shadow-lg
      transition-transform
    "
    :class="{
      'left-0': side === 'left',
      'right-0': side === 'right',
      'translate-x-full': !isOpen && side === 'right',
      '-translate-x-full': !isOpen && side === 'left',
    }"
  >
    <div class="flex h-full flex-col justify-between px-4 py-2">
      <SliderHeader :slider-header="headerComponent" :toggle-slider="toggleSlider" />
      <SliderBody :slider-body="bodyComponent" />
      <SliderFooter :slider-footer="footerComponent" />
    </div>
  </div>
</template>
