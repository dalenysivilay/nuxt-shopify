<script setup lang="ts">
type Side = 'left' | 'right'

interface TemplateSliderProps {
  isOpen: boolean
  toggleSlider: () => void
  side: Side
  headerComponent?: Component | undefined
  bodyComponent?: Component | undefined
  footerComponent?: Component | undefined
}

withDefaults(defineProps<TemplateSliderProps>(), {
  isOpen: false,
  toggleSlider: () => {},
  side: 'left',
  headerComponent: undefined,
  bodyComponent: undefined,
  footerComponent: undefined,
})
</script>

<template>
  <BaseSlider
    :is-open="isOpen"
    :toggle-slider="toggleSlider"
    :side="side"
    :header-component="headerComponent"
    :body-component="bodyComponent"
    :footer-component="footerComponent"
  />
</template>
