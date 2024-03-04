<script setup lang="ts">
interface OrderInfoCardProps {
  title: string
  description: string
  icon: string
}

defineProps<OrderInfoCardProps>()
</script>

<template>
  <div
    class="
      mx-auto w-full space-y-2

      md:space-y-4
    "
  >
    <div class="flex items-center">
      <img
        :src="icon"
        class="mr-2 size-6 text-white"
      >
      <h2 class="text-xl font-bold text-white">
        {{ title }}
      </h2>
    </div>
    <p class="text-base text-white">
      {{ description }}
    </p>
  </div>
</template>
