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
      <main>
        <slot />
      </main>
    </div>
    <Footer />
  </div>
</template>
