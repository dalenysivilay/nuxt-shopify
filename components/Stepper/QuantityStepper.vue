<script setup lang="ts">
const min = 1
const modelValue = ref(0)
</script>

<template>
  <div>
    <TemplateStepper :model-value="modelValue" :min="min" />
  </div>
</template>
