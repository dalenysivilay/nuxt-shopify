<script setup lang="ts">
import type { CarouselItem } from '~/types/components/CarosuelItem.types'

interface CarouselItemsProps {
  carouselItems: CarouselItem[]
  showNumberOfItems?: number
}

defineProps<CarouselItemsProps>()
</script>

<template>
  <div>
    <div class="mx-auto">
      <div
        class="
          grid grid-cols-1 gap-4

          sm:grid-cols-2

          md:grid-cols-2

          lg:grid-cols-3

          xl:grid-cols-4
        "
      >
        <div
          v-for="(item, index) in carouselItems"
          :key="index"
          class="flex justify-center align-middle"
        >
          <component :is="item.component" v-bind="item.props" />
        </div>
      </div>
    </div>
  </div>
</template>
~~/types/components/CarosuelItem.types
