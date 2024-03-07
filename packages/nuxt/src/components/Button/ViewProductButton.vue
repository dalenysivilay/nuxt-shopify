<script setup lang="ts">
interface ViewProductButonProps {
  route: string
}

defineProps<ViewProductButonProps>()
</script>

<template>
  <div>
    <TemplateButton
      button-label="View Product"
      :full-width="true"
      :route="`/products/${route}`"
    />
  </div>
</template>
