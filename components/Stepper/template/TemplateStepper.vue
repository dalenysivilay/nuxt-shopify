<script setup lang="ts">
interface TemplateStepperProps {
  modelValue: number
  min: number
}

withDefaults(defineProps<TemplateStepperProps>(), {
  modelValue: 0,
  min: 1,
})
</script>

<template>
  <div>
    <BaseStepper :model-value="modelValue" :min="min" />
  </div>
</template>
