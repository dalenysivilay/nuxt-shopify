<script setup lang="ts">
defineProps({
  getInTouchTitle: String,
  navigationTitle: String,
  resourcesTitle: String,
})
</script>

<template>
  <div>
    <BaseFooter>
      <div
        class="
          grid grid-cols-1 gap-4

          md:grid-cols-3
        "
      >
        <FooterColumn :title="getInTouchTitle">
          <template #items>
            <!-- List items for the "Get in Touch" column -->
          </template>
        </FooterColumn>
        <FooterColumn :title="navigationTitle">
          <template #items>
            <!-- List items for the "Navigation" column -->
          </template>
        </FooterColumn>
        <FooterColumn :title="resourcesTitle">
          <template #items>
            <!-- List items for the "Resources" column -->
          </template>
        </FooterColumn>
      </div>
    </BaseFooter>
  </div>
</template>
