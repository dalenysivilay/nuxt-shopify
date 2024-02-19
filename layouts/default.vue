<script setup lang="ts">
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <NavSlider />
    <CartSlider />
    <Header />
    <div
      class="
        grow px-4

        md:px-24
      "
    >
      <slot />
    </div>
    <Footer />
  </div>
</template>
