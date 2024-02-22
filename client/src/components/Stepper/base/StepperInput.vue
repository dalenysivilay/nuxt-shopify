<script setup lang="ts">
const props = defineProps({
  modelValue: Number,
  min: Number,
})

const emit = defineEmits(['update:modelValue'])

const innerValue = ref(props.modelValue ?? 0)

watch(() => props.modelValue, (newValue) => {
  if (newValue !== undefined)
    innerValue.value = newValue
})

function emitUpdate() {
  emit('update:modelValue', innerValue.value)
}
</script>

<template>
  <input
    v-model.number="innerValue"
    class="
      w-auto justify-center rounded border border-solid border-gray-300 p-2
      text-center text-base font-medium text-brandTextDark

      focus:outline-none
    "
    type="number" :min="min" @input="emitUpdate"
  >
</template>
