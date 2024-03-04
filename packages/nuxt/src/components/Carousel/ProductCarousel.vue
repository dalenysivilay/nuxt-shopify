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
  id?: string
}

interface ProductCarouselFields {
  title: string
  collectionHandle: string
  showNumberOfItems: number
}

const props = defineProps<ProductCarouselProps>()

const query = `*[_type == "featuredCollection" && _id == "${props.id}"][0]`

const sanityData = await useSanityQuery<ProductCarouselFields>(query)

const collectionTitle = sanityData?.data?.value?.title
const collectionHandle = sanityData?.data?.value?.collectionHandle
const showNumberOfItems = sanityData?.data?.value?.showNumberOfItems

const { data, error } = useAsyncQuery<QueryResult>(productCarouselQuery, {
  handle: collectionHandle,
  first: showNumberOfItems,
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
      :title="collectionTitle"
      :carousel-items="productCards"
      :show-number-of-items="showNumberOfItems"
    />
  </div>
</template>
