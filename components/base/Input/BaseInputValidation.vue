<script setup lang="ts">
interface BaseInputValidationProps {
  validationMessage?: ValidationMessage
}

const props = defineProps<BaseInputValidationProps>()

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
