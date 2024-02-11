<script setup lang="ts">
</script>

<template>
  <div>
    <h1>Home</h1>
    <GlobalInputField type="text" />
    <GlobalInputField type="email" />
    <GlobalInputField type="phone" />
    <GlobalButton />
    <GlobalButton :is-loading="true" />
    <GlobalAccordion label="Hello World" content="Content goes here" />
  </div>
</template>
