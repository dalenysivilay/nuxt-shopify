<script setup lang="ts">
import type { ProductCard } from '~/types/components/ProductCard.types'

interface ProductPriceProps {
  priceRange: ProductCard['priceRange']
}

const props = defineProps<ProductPriceProps>()

const priceRange = props.priceRange
const minVariant = priceRange.minVariantPrice
const maxVariant = priceRange.maxVariantPrice

function formatVariantPrice(variant: { amount: number, currencyCode: string }) {
  return formatPrice(variant.amount, variant.currencyCode, formatWholeNumberPrice)
}

const displayedMinPrice = formatVariantPrice(minVariant)
const displayedMaxPrice = formatVariantPrice(maxVariant)

const priceRangeText = `${displayedMinPrice} - ${displayedMaxPrice}`
</script>

<template>
  <div>
    <p class="text-wrap text-left text-base font-semibold text-brandTextDark">
      <span>
        {{ priceRangeText }}
      </span>
    </p>
  </div>
</template>
~~/types/components/ProductCard.types
