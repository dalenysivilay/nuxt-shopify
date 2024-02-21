<script setup lang="ts">
interface ProductCardTitleProps {
  title: string
}

defineProps<ProductCardTitleProps>()
</script>

<template>
  <div>
    <h1
      v-if="title"
      class="
        text-left text-xl font-bold text-brandTextDark

        md:text-2xl
      "
    >
      {{ title }}
    </h1>
  </div>
</template>
