<script setup lang="ts">
import EmailInputField from './Inputs/EmailInputField.vue'
import PhoneInputField from './Inputs/PhoneInputField.vue'
import TextInputField from './Inputs/TextInputField.vue'

type InputType = 'text' | 'email' | 'phone'

const props = defineProps<{
  type: InputType
}>()

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
