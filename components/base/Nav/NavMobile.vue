<script setup lang="ts">
const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<template>
  <div class="md:hidden">
    <!-- Hamburger Icon -->
    <button class="p-2" @click="toggleMenu">
      <!-- Replace with your hamburger icon -->
      <Icon name="ic:round-menu" class="size-6" />
    </button>

    <!-- Overlay & Menu Drawer -->
    <div v-if="isMenuOpen" class="fixed inset-0 z-40">
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black opacity-50" @click="closeMenu" />

      <!-- Drawer -->
      <div class="relative w-64 bg-white p-5 shadow-xl">
        <div class="flex items-center justify-between">
          <NavLogo />
          <button @click="closeMenu">
            <!-- Replace with your close icon -->
            <Icon name="ic:round-close" class="size-6" />
          </button>
        </div>
        <nav class="mt-5">
          <NavLinks @close-menu="closeMenu" />
        </nav>
      </div>
    </div>
  </div>
</template>
