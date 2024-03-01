<script setup lang="ts">
import type { ProductCardType } from '~/types/components/components.types'

interface ProductCardProps {
  product: ProductCardType
  isLoading: boolean
}

const props = defineProps<ProductCardProps>()

const isAvailable = computed(() => !!props.product?.availableForSale)
</script>

<template>
  <div>
    <div v-if="!props.product">
      <p>Product data is not available.</p>
    </div>
    <div v-else-if="isLoading">
      <ProductCardLoading />
    </div>
    <div v-else-if="isAvailable">
      <BaseProductCard :product="props.product" />
    </div>
  </div>
</template>
~~/types/components/ProductCard.types
