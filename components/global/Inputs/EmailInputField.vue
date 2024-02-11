<script setup lang="ts">
const email = ref<string>('')
const emailValidationMessage = ref<ValidationMessage | undefined>()

function handleBlur() {
  emailValidationMessage.value = generateInputValidationMessage({
    value: email.value,
    validate: validateEmail,
    errorMessage: 'Please enter a valid email.',
  })
}
</script>

<template>
  <div>
    <BaseInput
      id="email"
      v-model="email"
      label="Email"
      type="email"
      icon-name="ic:outline-mail"
      placeholder="you@email.com"
      :validation-message="emailValidationMessage"
      @blur="handleBlur"
    />
  </div>
</template>
