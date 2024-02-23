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
    <div class="flex flex-row items-center justify-center">
      <div v-if="iconName">
        <Icon v-if="iconName" :name="iconName" class="size-4 text-white" />
        <p class="ml-2">
          {{ buttonLabel }}
        </p>
      </div>
      <div v-else>
        <p>
          {{ buttonLabel }}
        </p>
      </div>
    </div>
  </div>
</template>
