<script setup lang="ts">
interface ButtonLabelProps {
  buttonLabel: string
  iconName?: string
  isLoading: boolean
}

defineProps<ButtonLabelProps>()
</script>

<template>
  <div v-if="!isLoading">
    <div class="flex flex-row items-center">
      <Icon v-if="iconName" :name="iconName" class="size-4 text-white" />
      <p class="ml-2">
        {{ buttonLabel }}
      </p>
    </div>
  </div>
</template>
