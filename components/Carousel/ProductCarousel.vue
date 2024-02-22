<script setup lang="ts">
import ProductCard from '../ProductCard/ProductCard.vue'
import productCarouselQuery from '~/graphql/queries/productCarouselQuery'
import type { ProductCardType } from '~/types/components/ProductCard.types'
import type { CarouselItem } from '~/types/components/CarosuelItem.types'

interface QueryResult {
  collectionByHandle: {
    handle: string
    products: {
      edges: Array<{ node: ProductCardType }>
    }
  }
}

interface ProductCarouselProps {
  title: string
  showNumberOfItems?: number
  collectionHandle: string
}

const props = withDefaults(defineProps<ProductCarouselProps>(), {
  showNumberOfItems: 4,
  collectionHandle: 'turf-products',
})

const { data, error } = useAsyncQuery<QueryResult>(productCarouselQuery, {
  handle: props.collectionHandle,
  first: props.showNumberOfItems,
})

const isLoading = computed(() => !data.value && !error.value)

const productCards = computed((): CarouselItem[] => {
  return data.value?.collectionByHandle.products.edges.map(({ node }) => ({
    component: ProductCard as Component,
    props: { product: node, isLoading: isLoading.value },
  }))
})
</script>

<template>
  <div>
    <div v-if="error">
      <p>Error loading product data. Please try again later.</p>
    </div>
    <TemplateCarousel
      v-else
      :title="props.title"
      :carousel-items="productCards"
      :show-number-of-items="props.showNumberOfItems"
    />
  </div>
</template>
