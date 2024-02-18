<script setup lang="ts">
interface SliderHeaderProps {
  sliderHeader: Component | undefined
  toggleSlider: () => void
}

defineProps<SliderHeaderProps>()
</script>

<template>
  <div>
    <div class="space-y-2">
      <div class="flex h-10 flex-row items-center justify-between">
        <component :is="sliderHeader" />
        <button @click="toggleSlider">
          <Icon name="ic:round-close" class="size-6" />
        </button>
      </div>
      <Divider v-if="sliderHeader" />
    </div>
  </div>
</template>
