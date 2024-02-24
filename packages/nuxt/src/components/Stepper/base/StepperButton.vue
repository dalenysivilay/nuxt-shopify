<script setup lang="ts">
defineProps({
  isDisabled: Boolean,
  onClick: Function as PropType<(event: MouseEvent | KeyboardEvent) => void>,
})
</script>

<template>
  <button
    class="
      rounded border border-solid border-gray-300 px-4 py-2 font-serif font-bold
      text-brandTextDark

      focus:outline-none
    "
    :class="{ 'cursor-not-allowed bg-gray-100': isDisabled }"
    :disabled="isDisabled"
    @click="onClick"
  >
    <slot />
  </button>
</template>
