<script setup lang="ts">
interface TemplateInputFieldProps {
  label?: string
  type: string
  id?: string
  modelValue: string
  placeholder?: string
  iconName?: string
  validationMessage?: ValidationMessage
  isDisabled?: boolean
}

withDefaults(defineProps<TemplateInputFieldProps>(), {
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
    <BaseInputField
      :id="id"
      :label="label"
      :type="type"
      :placeholder="placeholder"
      :icon-name="iconName"
      :model-value="modelValue"
      :validation-message="validationMessage"
      :is-disabled="isDisabled"
      @update:model-value="updateModelValue"
      @blur="$emit('blur')"
    />
  </div>
</template>
