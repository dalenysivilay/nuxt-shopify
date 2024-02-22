<script setup lang="ts">
type ButtonType = 'button' | 'submit' | 'reset'

interface TemplateButtonProps {
  buttonType?: ButtonType
  buttonLabel?: string
  iconName?: string
  isLoading?: boolean
  loadingMessage?: string
  fullWidth?: boolean
  onClick?: (event: MouseEvent | KeyboardEvent) => void
  route?: string
}

withDefaults(defineProps<TemplateButtonProps>(), {
  buttonType: 'button',
  buttonLabel: 'Click Here',
  isLoading: false,
  loadingMessage: 'Loading...',
  fullWidth: false,
})
</script>

<template>
  <BaseButton
    :button-label="buttonLabel"
    :button-type="buttonType"
    :icon-name="iconName"
    :is-loading="isLoading"
    :loading-message="loadingMessage"
    :full-width="fullWidth"
    :on-click="onClick"
    :route="route"
  >
    <template #buttonLoading>
      <ButtonLoading
        :loading-message="loadingMessage"
        :is-loading="isLoading"
      />
    </template>
    <template #buttonContent>
      <ButtonLabel
        :button-label="buttonLabel"
        :icon-name="iconName"
        :is-loading="isLoading"
      />
    </template>
  </BaseButton>
</template>
