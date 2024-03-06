<script setup lang="ts">
interface CartItemTitleProps {
  title: string
}

defineProps <CartItemTitleProps> ()
</script>

<template>
  <div v-if="title">
    <p class="text-base font-semibold text-black">
      {{ title }}
    </p>
  </div>
</template>
