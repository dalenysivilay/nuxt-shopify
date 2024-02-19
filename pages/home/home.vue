<script setup lang="ts">
definePageMeta({
  path: '/',
})
</script>

<template>
  <div>
    <HomeBanner />
    <TextInputField type="text" />
    <EmailInputField type="email" />
    <PhoneInputField type="phone" />
    <TemplateButton />
    <Divider />
    <TemplateButton :is-loading="true" />
    <TemplateAccordion label="Hello World" content="Content goes here" />
    <SearchInputField />
  </div>
</template>
