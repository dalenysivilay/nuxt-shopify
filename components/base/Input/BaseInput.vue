<script setup lang="ts">
interface InputFieldProps {
  label?: string
  type: string
  id?: string
  modelValue: string
  placeholder?: string
  iconName?: string
  validationMessage?: ValidationMessage
  isDisabled?: boolean
}

withDefaults(defineProps<InputFieldProps>(), {
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
    <InputLabel :label="label" />
    <InputField
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
    <InputValidation :validation-message="validationMessage" />
  </div>
</template>
