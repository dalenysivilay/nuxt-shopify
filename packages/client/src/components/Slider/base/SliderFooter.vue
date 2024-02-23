<script setup lang="ts">
interface SliderFooterProps {
  sliderFooter: Component | undefined
}

defineProps<SliderFooterProps>()
</script>

<template>
  <div>
    <div class="space-y-2">
      <Divider v-if="sliderFooter" />
      <component :is="sliderFooter" />
    </div>
  </div>
</template>
