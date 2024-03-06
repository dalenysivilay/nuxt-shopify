<script setup lang="ts">
interface CartItemQuantityProps {
  quantity: number
}

defineProps<CartItemQuantityProps>()
</script>

<template>
  <div v-if="quantity">
    <p class="text-base text-black">
      Quantity: {{ quantity }}
    </p>
  </div>
</template>
