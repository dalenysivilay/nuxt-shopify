<script setup lang="ts">
import EmailInputField from '../EmailInputField.vue'
import PhoneInputField from '../PhoneInputField.vue'
import TextInputField from '../TextInputField.vue'

type InputType = 'text' | 'email' | 'phone'

interface TemplateInputFieldProps {
  type: InputType
}

const props = defineProps<TemplateInputFieldProps>()

const inputComponent = computed(() => {
  switch (props.type) {
    case 'text':
      return TextInputField
    case 'email':
      return EmailInputField
    case 'phone':
      return PhoneInputField
    default:
      return console.error('Invalid input type or not implemented yet.')
  }
})
</script>

<template>
  <div>
    <component :is="inputComponent" />
  </div>
</template>
