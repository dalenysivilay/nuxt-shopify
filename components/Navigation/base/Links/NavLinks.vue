<script setup lang="ts">
import { navLinks } from '~/utils/constants'
</script>

<template>
  <div
    class="
      flex flex-col items-center

      md:flex-row md:space-x-4
    "
  >
    <NuxtLink
      v-for="link in navLinks"
      :key="link.label"
      :to="link.path"
      class="
        text-base font-medium text-black

        hover:text-brandPrimary hover:underline
      "
    >
      {{ link.label }}
    </NuxtLink>
  </div>
</template>
