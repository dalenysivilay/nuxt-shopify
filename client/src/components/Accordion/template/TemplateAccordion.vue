<script setup lang="ts">
interface TemplateAccordionProps {
  label: string
  content: string
}

withDefaults(defineProps<TemplateAccordionProps>(), {
  label: 'Accordion Label',
  content: 'Accordion Content',
})
</script>

<template>
  <div>
    <BaseAccordion :label="label" :content="content" />
  </div>
</template>
