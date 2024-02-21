<script setup lang="ts">
interface HeroBannerProps {
  title?: string
  subtitle?: string
  backgroundImageUrl?: string
  productImageUrl?: string
  productImageAlt?: string
}

withDefaults(
  defineProps<HeroBannerProps>(),
  {
    title: 'Default Title',
    subtitle: 'Default Subtitle',
    backgroundImageUrl: 'https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1374,c_limit/aed77280-16c6-45c3-9928-e7a063269e0d/men-s-shoes-clothing-accessories.jpg',
    productImageUrl: 'https://via.placeholder.com/384x384',
    productImageAlt: 'Placeholder Image',
  },
)
</script>

<template>
  <div>
    <div
      class="
        h-3/6 bg-cover bg-center

        md:rounded
      "
      :style="{ backgroundImage: `url(${backgroundImageUrl})` }"
    >
      <div
        class="
          mx-auto flex h-full max-w-7xl px-4 py-12

          sm:py-24

          md:px-6
        "
      >
        <div class="flex flex-1 flex-col justify-center">
          <HeroBannerTitle :title="title" />
          <HeroBannerSubtitle :subtitle="subtitle" />
          <div
            class="
              flex flex-col space-y-4

              md:flex-row md:space-x-4 md:space-y-0
            "
          >
            <ShopCollectionButton route="/collections" />
            <ShopCollectionButton route="/collections" />
          </div>
        </div>
        <div
          class="
            hidden items-center justify-center

            md:block
          "
        >
          <div class="size-96 overflow-hidden rounded-md">
            <img
              :src="productImageUrl"
              :alt="productImageAlt"
              class="size-full object-cover"
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
