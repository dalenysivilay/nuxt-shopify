<script setup lang="ts">
import { navLinks } from '~/utils/constants'
</script>

<template>
  <div
    class="
      flex flex-col

      md:flex-row md:items-center md:space-x-4
    "
  >
    <div
      class="
        flex flex-col items-center

        md:flex-row md:space-x-3
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
    <div
      class="
        hidden

        md:flex
      "
    >
      <NavUtilityLinks />
    </div>
  </div>
</template>
