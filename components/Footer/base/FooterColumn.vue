<script setup lang="ts">
interface FooterColumnProps {
  title: string
  links: { text: string, href: string | undefined }[]
}

defineProps<FooterColumnProps>()
</script>

<template>
  <div class="col-span-1">
    <h2 class="mb-2 mt-4 font-sans text-lg font-bold">
      {{ title }}
    </h2>
    <ul class="list-inside list-none">
      <FooterLink v-for="link in links" :key="link.text" :text="link.text" :href="link.href" />
    </ul>
  </div>
</template>
