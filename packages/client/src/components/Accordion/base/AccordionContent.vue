<script setup lang="ts">
interface AccordionContentProps {
  content: string
  isAccordionOpen: boolean
}

defineProps<AccordionContentProps>()
</script>

<template>
  <div
    :class="{ hidden: !isAccordionOpen }"
    class="
      px-4 pb-2 pt-4 text-base font-normal text-brandTextDark transition-all
      duration-300 ease-in-out
    "
  >
    {{ content }}
  </div>
</template>
