<script setup lang="ts">
interface BaseInputProps {
  label?: string
  type: string
  id?: string
  modelValue: string
  placeholder?: string
  iconName?: string
  validationMessage?: ValidationMessage
  isDisabled?: boolean
}

withDefaults(defineProps<BaseInputProps>(), {
  type: 'text',
  id: 'text',
  placeholder: 'Type something...',
  isDisabled: false,
})

const emit = defineEmits(['update:modelValue', 'blur'])

function updateModelValue(value: string) {
  emit('update:modelValue', value)
}
</script>

<template>
  <div>
    <BaseInputLabel :label="label" />
    <BaseInputField
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :icon-name="iconName"
      :model-value="modelValue"
      :validation-message="validationMessage"
      :is-disabled="isDisabled"
      @update:model-value="updateModelValue"
      @blur="$emit('blur')"
    />
    <BaseInputValidation :validation-message="validationMessage" />
  </div>
</template>
