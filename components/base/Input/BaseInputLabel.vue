<script setup lang="ts">
interface BaseInputLabelProps {
  label: string | undefined
  fieldId?: string
}

const props = defineProps<BaseInputLabelProps>()
const hasLabel = computed(() => !!props.label)
</script>

<template>
  <div v-if="hasLabel">
    <label :for="fieldId" class="block text-sm font-medium leading-6 text-gray-900">{{ label }}</label>
  </div>
</template>
