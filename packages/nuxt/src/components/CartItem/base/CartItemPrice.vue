<script setup lang="ts">
interface CartItemPriceProps {
  price: number
}

const props = defineProps<CartItemPriceProps>()

const price = formatPrice(props.price, 'USD')
</script>

<template>
  <div v-if="price">
    <p class="text-base text-black">
      {{ price }}
    </p>
  </div>
</template>
