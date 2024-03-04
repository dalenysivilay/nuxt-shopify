<script setup lang="ts">
interface ShopCollectionButonProps {
  collectionName: string
  collectionHandle: string
}

withDefaults(defineProps<ShopCollectionButonProps>(), {
  collectionName: 'Collection',
})
</script>

<template>
  <div>
    <TemplateButton
      :button-label="`Shop ${collectionName}`"
      :route="`/collections/${collectionHandle}`"
    />
  </div>
</template>
