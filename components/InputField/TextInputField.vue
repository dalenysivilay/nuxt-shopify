<script setup lang="ts">
const modelValue = ref<string>('')
</script>

<template>
  <div>
    <TemplateInputField
      id="text"
      label="Text"
      type="text"
      :model-value="modelValue"
      placeholder="Enter text..."
    />
  </div>
</template>
