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
  }
}

const query = `*[_type == "homePage"][0]`
const { data } = await useSanityQuery<HomePageQuery>(query)

const heroBannerRef = data?.value?.pageContent?.heroBanner?._ref
const orderInfoRef = data?.value?.pageContent?.orderInfoCards?._ref
</script>

<template>
  <div>
    <PageContainer>
      <HeroBanner :id="heroBannerRef" />
      <OrderInfo :id="orderInfoRef" />
      <ProductCarousel title="Featured Turf Products" collection-handle="turf-products" />
    </PageContainer>
  </div>
</template>
