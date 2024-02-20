<script setup lang="ts">
interface InputLabelProps {
  label: string | undefined
  fieldId?: string
}

const props = defineProps<InputLabelProps>()
const hasLabel = computed(() => !!props.label)
</script>

<template>
  <div v-if="hasLabel">
    <label :for="fieldId" class="mb-2 block text-sm font-medium leading-6 text-gray-900">{{ label }}</label>
  </div>
</template>
