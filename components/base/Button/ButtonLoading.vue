<script setup lang="ts">
interface ButtonLoadingProps {
  isLoading: boolean
  loadingMessage?: string
}

const props = defineProps<ButtonLoadingProps>()

const displayMessage = props.loadingMessage ?? 'Loading...'
</script>

<template>
  <div v-if="isLoading">
    <div class="inline-flex items-center">
      <span
        class="
          mr-2 inline-block size-5 animate-spin rounded-full border-4
          border-solid border-white border-r-transparent
        "
        role="status"
        aria-label="Loading"
      />
      <p>
        {{ displayMessage }}
      </p>
    </div>
  </div>
</template>
