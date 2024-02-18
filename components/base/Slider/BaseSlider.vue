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

const props = defineProps<BaseSliderProps>()

const slideDirection = computed(() => {
  return props.side === 'left' ? 'translate-x-0' : 'translate-x-full'
})
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
      [slideDirection]: !isOpen,
      '-translate-x-full': side === 'left' && isOpen,
      'translate-x-0': side === 'right' && isOpen,
    }"
  >
    <div class="flex h-full flex-col justify-between px-4 py-2">
      <SliderHeader :slider-header="headerComponent" :toggle-slider="toggleSlider" />
      <SliderBody :slider-body="bodyComponent" />
      <SliderFooter :slider-footer="footerComponent" />
    </div>
  </div>
</template>
