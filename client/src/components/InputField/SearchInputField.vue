<script setup lang="ts">
const searchQuery = ref('')
</script>

<template>
  <div>
    <TemplateInputField
      id="search"
      :model-value="searchQuery"
      type="text"
      placeholder="Search for products"
      icon-name="ic:outline-search"
    />
  </div>
</template>
