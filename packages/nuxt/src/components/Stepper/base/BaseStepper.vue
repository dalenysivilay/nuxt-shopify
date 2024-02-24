<script setup lang="ts">
interface BaseStepperProps {
  modelValue: number
  min: number
}

const props = withDefaults(defineProps<BaseStepperProps>(), {
  modelValue: 0,
  min: 1,
})

const emit = defineEmits(['update:modelValue'])
const innerValue = ref(props.modelValue)

watch(() => props.modelValue, (newValue) => {
  innerValue.value = newValue
})

function updateValue(newValue: number) {
  innerValue.value = newValue
  emit('update:modelValue', innerValue.value)
}

const increment = () => updateValue(innerValue.value + 1)
function decrement() {
  if (innerValue.value > props.min)
    updateValue(innerValue.value - 1)
}
</script>

<template>
  <div class="flex flex-row items-center space-x-4">
    <StepperButton :is-disabled="innerValue <= props.min" @click="decrement">
      -
    </StepperButton>
    <StepperInput v-model.number="innerValue" :min="props.min" />
    <StepperButton @click="increment">
      +
    </StepperButton>
  </div>
</template>
