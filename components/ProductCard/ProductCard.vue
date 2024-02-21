<script setup lang="ts">
import productCardQuery from './gql/productCardQuery'
import type { ProductCard } from '~/types/components/ProductCard.types'

interface QueryResult {
  productByHandle: ProductCard
}

const productHandle = ref('4-ever-green')

const query = productCardQuery
const variables = { handle: productHandle.value }

const { data, error } = useAsyncQuery<QueryResult>(query, variables)

const product = ref<ProductCard | null>(null)
const isLoading = ref(true)

watchEffect(() => {
  if (data.value && data.value.productByHandle) {
    product.value = data.value.productByHandle
    isLoading.value = false
  }
})

if (error.value) {
  logError(error.value as Error, 'Failed to fetch product in ProductCard')
  isLoading.value = false
}

const isAvailable = computed(() => !!product.value?.availableForSale)
</script>

<template>
  <div>
    <div v-if="error">
      <p>Error loading product data. Please try again later.</p>
    </div>
    <div v-else-if="isLoading">
      <ProductCardLoading />
    </div>
    <div v-if="product && isAvailable">
      <BaseProductCard :product="product" />
    </div>
  </div>
</template>
