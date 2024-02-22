<script setup lang="ts">
interface ShopCollectionButonProps {
  route: string
  collectionName: string
  isLoading: boolean
}

withDefaults(defineProps<ShopCollectionButonProps>(), {
  isLoading: false,
  collectionName: 'Collection',
})
</script>

<template>
  <div>
    <TemplateButton
      :button-label="`Shop ${collectionName}`"
      :is-loading="isLoading"
      :route="`/collections/${route}`"
    />
  </div>
</template>
