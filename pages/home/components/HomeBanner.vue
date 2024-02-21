<script setup lang="ts">
interface HomeBannerProps {
  title: string
  subtitle: string
  backgroundImageUrl: string
  productImageUrl: string
  productImageAlt: string
}

withDefaults(
  defineProps<HomeBannerProps>(),
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
          <h1
            class="
              mb-6 text-4xl font-semibold text-white

              md:text-5xl
            "
          >
            {{ title }}
          </h1>
          <p
            class="
              mb-8 text-lg font-medium text-white

              md:text-2xl
            "
          >
            {{ subtitle }}
          </p>
          <div
            class="
              flex flex-col space-y-4

              md:flex-row md:space-x-4 md:space-y-0
            "
          >
            <ViewProductButton
              route="/collections/ag-products"
            />
            <ViewProductButton
              route="/collections/turf-products"
            />
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
