<script setup lang="ts">
const navigationStore = useNavigationStore()
const navSliderOpen = computed(() => navigationStore.navSliderOpen)
const toggleSlider = () => navigationStore.toggleSlider()
</script>

<template>
  <div
    class="
        flex w-full flex-row items-center justify-between
      "
  >
    <button @click="toggleSlider">
      <Icon :name="navSliderOpen ? 'ic:round-close' : 'ic:round-menu'" class="size-6" />
    </button>
    <NavLogo />
    <NavUtilityLinks />
  </div>
</template>
