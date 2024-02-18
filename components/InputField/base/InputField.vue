<script setup lang="ts">
interface InputFieldProps {
  id: string
  type: string
  placeholder: string
  iconName?: string
  validationMessage?: ValidationMessage
  isDisabled: boolean
  modelValue: string
}

const props = defineProps<InputFieldProps>()

const emit = defineEmits(['update:modelValue', 'blur'])

const hasError = computed(() => props.validationMessage?.type === 'error')

const displayedIconName = computed(() => {
  return hasError.value ? 'ic:outline-error' : props.iconName || ''
})

function updateValue(event: Event) {
  const target = event.target as HTMLInputElement
  target && emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="mt-2 rounded-md shadow-sm" :class="{ relative: iconName }">
    <div v-if="iconName" class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <Icon :name="displayedIconName" class="size-5" :class="{ 'text-red-600': hasError, 'text-gray-400': !hasError }" />
    </div>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      class="
        block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset
        ring-gray-300

        placeholder:text-gray-400

        focus:outline-none focus:ring-2 focus:ring-brandPrimary
        focus:ring-offset-1

        sm:text-sm sm:leading-6
      "
      :class="[
        iconName ? 'pl-10' : 'pl-3',
        hasError ? 'ring-1 ring-red-600 focus:ring-red-600' : '',
      ]"
      @input="updateValue"
      @blur="emit('blur')"
    >
  </div>
</template>
