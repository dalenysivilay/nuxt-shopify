<script setup lang="ts">
const navigationStore = useNavigationStore()
const toggleCartSlider = () => navigationStore.toggleCartSlider()
</script>

<template>
  <div class="flex space-x-4">
    <NuxtLink to="/account">
      <Icon
        name="ic:outline-account-circle" class="
          size-6 text-brandTextDark

          hover:text-brandPrimary
        "
      />
    </NuxtLink>
    <button @click="toggleCartSlider">
      <Icon
        name="ic:outline-shopping-cart" class="
          size-6 text-brandTextDark

          hover:text-brandPrimary
        "
      />
    </button>
  </div>
</template>
