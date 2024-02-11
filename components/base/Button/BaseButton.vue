<script setup lang="ts">
type ButtonType = 'button' | 'submit' | 'reset'

interface BaseButtonProps {
  buttonType: ButtonType
  isLoading: boolean
  loadingMessage?: string
  fullWidth?: boolean
  onClick?: (event: MouseEvent | KeyboardEvent) => void
  route?: string
}

const props = defineProps<BaseButtonProps>()

const router = useRouter()

function handleClick(event: MouseEvent | KeyboardEvent) {
  if (props.isLoading)
    return

  if (props.route)
    router.push(props.route)

  props.onClick?.(event)
}
</script>

<template>
  <button
    class="
      relative rounded bg-brandPrimary px-4 py-2 font-bold text-white transition
      duration-200 ease-in-out
    " :class="[
      fullWidth ? 'w-full' : '',
      isLoading ? 'cursor-not-allowed bg-gray-300 text-white' : 'cursor-pointer hover:bg-brandPrimaryDark hover:text-slate-100 hover:shadow-md',
    ]"
    :disabled="isLoading"
    :type="buttonType"
    v-bind="$attrs"
    @click="handleClick"
    @keyup.enter="handleClick"
  >
    <slot name="buttonLoading" />
    <slot name="buttonContent" />
  </button>
</template>
