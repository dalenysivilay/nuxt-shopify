<script setup lang="ts">
interface InputValidationProps {
  validationMessage?: ValidationMessage
}

const props = defineProps<InputValidationProps>()

const displayedMessage = computed(() => props.validationMessage?.message || '')
</script>

<template>
  <div v-if="displayedMessage" class="mt-2">
    <p
      :class="{
        'text-sm text-red-600': validationMessage?.type === 'error',
        'text-sm text-green-600': validationMessage?.type === 'success',
      }"
    >
      {{ displayedMessage }}
    </p>
  </div>
</template>
