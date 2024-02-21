<script setup lang="ts">
interface ProductCarousel {
  title: string
  showNumberOfItems?: number
  productCards: Component[] | undefined
}

defineProps<ProductCarousel>()
</script>

<template>
  <div>
    <BaseCarousel
      title="Featured Products"
      :carousel-items="productCards"
      :show-number-of-items="3"
    />
  </div>
</template>
