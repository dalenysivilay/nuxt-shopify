<script setup lang="ts">
interface FooterLinkProps {
  text: string
  href: string | undefined
}

defineProps<FooterLinkProps>()
</script>

<template>
  <li>
    <a
      :href="href"
      class="
        text-white

        hover:text-brandPrimary
      "
    >
      {{ text }}
    </a>
  </li>
</template>
