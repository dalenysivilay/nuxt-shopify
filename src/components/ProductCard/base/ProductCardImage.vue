<script setup lang="ts">
interface ProductCardImageProps {
  alt?: string
  src: string
}

defineProps<ProductCardImageProps>()
</script>

<template>
  <img
    :alt="alt"
    :src="src"
    class="size-80 rounded-sm"
  >
</template>
