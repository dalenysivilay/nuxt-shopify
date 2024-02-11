<script setup lang="ts">
interface BaseAccordionProps {
  label: string
  content: string
}

defineProps<BaseAccordionProps>()

const isAccordionOpen = ref<boolean>(false)

function handleToggle(newValue: boolean) {
  isAccordionOpen.value = newValue
}
</script>

<template>
  <div class="border-b border-gray-300 pb-4 pt-6">
    <AccordionToggle
      :label="label"
      :model-value="isAccordionOpen"
      @update:model-value="handleToggle"
    />
    <AccordionContent
      :content="content"
      :is-accordion-open="isAccordionOpen"
    />
  </div>
</template>
