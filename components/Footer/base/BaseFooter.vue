<script setup lang="ts">
import { footerLinks } from '~/utils/constants'

const columns = computed(() => footerLinks)
</script>

<template>
  <footer class="w-full bg-black text-white">
    <div
      class="
        mx-auto flex max-w-7xl flex-row justify-between px-4 py-8

        md:px-6
      "
    >
      <FooterColumn v-for="column in columns" :key="column.title" :title="column.title" :links="column.items" />
    </div>
  </footer>
</template>
