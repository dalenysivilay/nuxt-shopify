<script setup lang="ts">
interface ViewProductButonProps {
  route: string
  isLoading: boolean
}

withDefaults(defineProps<ViewProductButonProps>(), {
  isLoading: false,
})
</script>

<template>
  <div>
    <TemplateButton
      button-label="View Product"
      :full-width="true"
      :is-loading="isLoading"
      :route="`/products/${route}`"
    />
  </div>
</template>
