<script setup lang="ts">
interface GlobalAccordionProps {
  label: string
  content: string
}

withDefaults(defineProps<GlobalAccordionProps>(), {
  label: 'Accordion Label',
  content: 'Accordion Content',
})
</script>

<template>
  <div>
    <BaseAccordion :label="label" :content="content" />
  </div>
</template>
