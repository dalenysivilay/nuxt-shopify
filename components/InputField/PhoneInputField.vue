<script setup lang="ts">
const phone = ref<string>('')
const phoneValidationMessage = ref<ValidationMessage | undefined>()

function handleBlur() {
  phoneValidationMessage.value = generateInputValidationMessage({
    value: phone.value,
    validate: validatePhoneNumber,
    errorMessage: 'Please enter a valid phone number.',
  })
}
</script>

<template>
  <div>
    <TemplateInputField
      id="phone-number"
      v-model="phone"
      label="Phone Number"
      type="tel"
      icon-name="ic:outline-phone"
      placeholder="123-456-7890"
      :validation-message="phoneValidationMessage"
      @blur="handleBlur"
    />
  </div>
</template>
