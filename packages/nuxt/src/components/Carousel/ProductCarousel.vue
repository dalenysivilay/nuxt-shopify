<script setup lang="ts">
import ProductCard from '../ProductCard/ProductCard.vue'
import productCarouselQuery from '~/graphql/queries/productCarouselQuery'
import type { CarouselItemType, ProductCardType } from '~/types/components/components.types'

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

const productCards = computed((): CarouselItemType[] => {
  return data.value?.collectionByHandle.products.edges.map(({ node }: { node: ProductCardType }) => ({
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
