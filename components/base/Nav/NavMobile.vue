<script setup lang="ts">
const navigationStore = useNavigationStore()
const toggleSlider = () => navigationStore.toggleNavSlider()
</script>

<template>
  <div
    class="
        flex w-full flex-row items-center justify-between
      "
  >
    <button @click="toggleSlider">
      <Icon name="ic:round-menu" class="size-6" />
    </button>
    <NavLogo />
    <NavUtilityLinks />
  </div>
</template>
