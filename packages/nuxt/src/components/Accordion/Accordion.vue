<script setup lang="ts">
import type { AccordionContent, AccordionProps } from '~/types/components/components.types'

const props = defineProps<AccordionProps>()

const content = ref<AccordionContent>()
const query = `*[_type == "accordion" && _id == "${props.id}"][0]`

const data = useSanityContent({ id: props.id, query, defaultContent: props.content })

onMounted(() => {
  content.value = data.value
})
</script>

<template>
  <div v-if="content">
    <BaseAccordion :label="content.label" :content="content.content" />
  </div>
</template>
