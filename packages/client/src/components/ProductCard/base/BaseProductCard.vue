<script setup lang="ts">
import type { ProductCardType } from '~/types/components/ProductCard.types'

interface BaseProductCardProps {
  product: ProductCardType
}

defineProps<BaseProductCardProps>()
</script>

<template>
  <div>
    <div class="max-w-fit space-y-4">
      <div class="space-y-2">
        <NuxtLink :to="`/products/${product?.handle}`" class="space-y-2">
          <ProductCardImage
            v-if="product?.featuredImage?.src"
            :src="product?.featuredImage?.src"
            :alt="product?.featuredImage?.altText"
          />
          <ProductCardTitle
            v-if="product?.title"
            :title="product?.title"
          />
          <ProductPrice
            v-if="product?.priceRange"
            :price-range="product?.priceRange"
          />
        </NuxtLink>
      </div>
      <ViewProductButton
        v-if="product?.handle"
        :route="product?.handle"
        :is-loading="false"
      />
    </div>
  </div>
</template>
