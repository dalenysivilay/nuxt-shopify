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
  </div>
</template>
