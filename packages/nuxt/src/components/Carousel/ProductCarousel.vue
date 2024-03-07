<script setup lang="ts">
import ProductCard from '~/components/ProductCard/ProductCard.vue'
import getProductCarousel from '~/graphql/queries/productCarouselQuery'
import type { CarouselItemType, ProductCardType } from '~/types/components/components.types'

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

const data = await getProductCarousel(collectionHandle, showNumberOfItems)

const isLoading = computed(() => !data.value)

const productCards = computed((): CarouselItemType[] => {
  return data.value?.collectionByHandle.products.edges.map(({ node }: { node: ProductCardType }) => ({
    component: ProductCard as Component,
    props: { product: node, isLoading: isLoading.value },
  }))
})
</script>

<template>
  <div>
    <TemplateCarousel
      :title="collectionTitle"
      :carousel-items="productCards"
      :show-number-of-products="showNumberOfItems"
    />
  </div>
</template>
