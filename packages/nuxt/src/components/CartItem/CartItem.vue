<script setup lang="ts">
</script>

<template>
  <div>
    <div class="flex flex-row items-center justify-between">
      <div class="flex flex-row text-sm">
        <CartItemImage />
        <div>
          <CartItemTitle
            title="Product Title"
          />
          <CartItemQuantity
            :quantity="1"
          />
          <CartItemPrice
            :price="100"
          />
        </div>
      </div>
      <CartItemRemove />
    </div>
  </div>
</template>
