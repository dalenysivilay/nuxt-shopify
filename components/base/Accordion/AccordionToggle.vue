<script setup lang="ts">
interface AccordionToggleProps {
  label: string
  modelValue: boolean
}

const props = defineProps<AccordionToggleProps>()
const emit = defineEmits(['update:modelValue'])

function toggleAccordion() {
  emit('update:modelValue', !props.modelValue)
}
</script>

<template>
  <button
    :aria-expanded="modelValue ? 'true' : 'false'"
    class="
      flex w-full items-center justify-start px-4 py-2 text-left text-base
      font-medium text-gray-900

      focus:outline-none
    "
    @click="toggleAccordion"
  >
    <Icon
      :class="{ 'rotate-90': modelValue }"
      class="text-gray-900 transition-transform duration-200 ease-in-out"
      name="ic:outline-keyboard-arrow-right"
      size="2rem"
    />
    <span
      class="
        ml-4 font-semibold text-gray-900

        md:text-base
      "
    >
      {{ label }}
    </span>
  </button>
</template>
