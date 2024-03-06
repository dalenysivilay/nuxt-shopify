<script setup lang="ts">
import SliderHeader from './SliderHeader.vue'

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
      fixed top-0 z-50 h-full md:w-1/3 w-11/12 bg-white shadow-lg
      transition-transform
    "
    :class="{
      'left-0': side === 'left',
      'right-0': side === 'right',
      'translate-x-full': !isOpen && side === 'right',
      '-translate-x-full': !isOpen && side === 'left',
    }"
  >
    <div class="flex h-full flex-col justify-between px-6 py-4">
      <div>
        <SliderHeader :slider-header="headerComponent" :toggle-slider="toggleSlider" />
        <SliderBody :slider-body="bodyComponent" />
      </div>
      <SliderFooter :slider-footer="footerComponent" />
    </div>
  </div>
</template>
