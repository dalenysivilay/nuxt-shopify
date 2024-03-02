<script setup lang="ts">
interface HeroRightColumn {
  productImage?: string
}

defineProps<HeroRightColumn>()
</script>

<template>
  <div>
    <div
      class="
        hidden

        md:block
      "
    >
      <div class="size-96">
        <img :src="productImage" class="size-full">
      </div>
    </div>
  </div>
</template>
