<script setup lang="ts">
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <NavSlider />
    <CartSlider />
    <div
      class="
        grow px-4

        md:px-8

        lg:px-24
      "
    >
      <Header />
      <div
        class="
          py-4

          md:py-6

          lg:py-8
        "
      >
        <slot />
      </div>
    </div>
    <Footer />
  </div>
</template>
