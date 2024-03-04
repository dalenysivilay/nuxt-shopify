<script setup lang="ts">
definePageMeta({
  path: '/',
})

interface HomePageQuery {
  pageContent: {
    heroBanner: {
      _ref: string
    }
    orderInfoCards: {
      _ref: string
    }
    featuredCollections: Array<{ _ref: string }>
  }
}

const query = `*[_type == "homePage"][0]`
const { data } = await useSanityQuery<HomePageQuery>(query)

const heroBannerRef = data?.value?.pageContent?.heroBanner?._ref
const orderInfoRef = data?.value?.pageContent?.orderInfoCards?._ref
const featuredCollectionsRef = data?.value?.pageContent?.featuredCollections
</script>

<template>
  <div>
    <PageContainer>
      <HeroBanner :id="heroBannerRef" />
      <OrderInfo :id="orderInfoRef" />
      <ProductCarousel v-for="(ref, index) in featuredCollectionsRef" :id="ref._ref" :key="index" />
    </PageContainer>
  </div>
</template>
