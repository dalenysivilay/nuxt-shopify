<script setup lang="ts">
interface ProductPageTitleProps {
  title: string
}

defineProps<ProductPageTitleProps>()
</script>

<template>
  <div v-if="title">
    <h1
      class="
        text-left font-serif text-2xl font-bold text-gray-900

        md:text-3xl
      "
    >
      {{ title }}
    </h1>
  </div>
</template>
