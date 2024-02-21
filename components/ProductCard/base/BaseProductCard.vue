<script setup lang="ts">
import type { ProductCard } from '~/types/components/ProductCard.types'

interface BaseProductCardProps {
  product: ProductCard
}

defineProps<BaseProductCardProps>()
</script>

<template>
  <div>
    <div class="max-w-fit space-y-4">
      <div class="space-y-2">
        <NuxtLink :to="`/products/${product?.handle}`" class="space-y-2">
          <ProductCardImage
            :src="product?.featuredImage?.src"
            :alt="product?.featuredImage?.altText"
          />
          <ProductCardTitle :title="product?.title" />
          <ProductPrice :price-range="product?.priceRange" />
        </NuxtLink>
      </div>
      <ViewProductButton :route="product?.handle" :is-loading="false" />
    </div>
  </div>
</template>
