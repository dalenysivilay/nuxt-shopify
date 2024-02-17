<script setup lang="ts">
const navigationStore = useNavigationStore()
const toggleCartSlider = () => navigationStore.toggleSlider()
</script>

<template>
  <div class="flex space-x-3">
    <NuxtLink to="/account">
      <Icon
        name="ic:round-account-circle" class="
          size-6 text-black

          hover:text-brandPrimary
        "
      />
    </NuxtLink>
    <button @click="toggleCartSlider">
      <Icon
        name="ic:outline-shopping-cart" class="
          size-6 text-black

          hover:text-brandPrimary
        "
      />
    </button>
  </div>
</template>
