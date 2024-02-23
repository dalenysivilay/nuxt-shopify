<script setup lang="ts">
interface SliderBodyProps {
  sliderBody: Component | undefined
}

defineProps<SliderBodyProps>()
</script>

<template>
  <div>
    <div class="py-2">
      <component :is="sliderBody" />
    </div>
  </div>
</template>
