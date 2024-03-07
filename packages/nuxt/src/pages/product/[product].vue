<script lang="ts">
</script>

<template>
  <div
    class="
      mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-8

      sm:px-6

      md:grid-cols-2

      lg:gap-12 lg:px-8
    "
  >
    <div class="md:sticky md:top-0">
      <img
        class="size-full rounded-lg object-cover shadow-lg"
        src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
      >
    </div>
    <div class="space-y-4">
      <ProductPageTitle title="Product Title" />
      <QuantityStepper />
      <Divider />
    </div>
  </div>
</template>
