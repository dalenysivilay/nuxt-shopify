<script setup lang="ts">
type Side = 'left' | 'right'

interface BaseSliderProps {
  isOpen: boolean
  side?: Side
  headerComponent?: any
  bodyComponent?: any
  footerComponent?: any
}

const props = withDefaults(defineProps<BaseSliderProps>(), {
  isOpen: false,
  side: 'left',
  headerComponent: null,
  bodyComponent: null,
  footerComponent: null,
})

const navigationStore = useNavigationStore()
const toggleSlider = () => navigationStore.toggleSlider()

const isOpen = computed(() => navigationStore.cartSliderOpen)

const slideDirection = computed(() => {
  return props.side === 'left' ? 'translate-x-0' : 'translate-x-full'
})
</script>

<template>
  <div
    class="
      fixed top-0 z-50 size-full bg-white shadow-lg transition-transform
    "
    :class="{
      'left-0': props.side === 'left',
      'right-0': props.side === 'right',
      [slideDirection]: !isOpen,
      '-translate-x-full': props.side === 'left' && isOpen,
      'translate-x-0': props.side === 'right' && isOpen,
    }"
  >
    <div class="flex h-full flex-col">
      <div class="border-b p-4">
        <button class="float-right" @click="toggleSlider">
          <Icon name="ic:round-close" class="size-6" />
        </button>
        <component :is="props.headerComponent" v-if="props.headerComponent" />
        <template v-else>
          <h2 class="text-lg font-semibold">
            Slider Header
          </h2>
        </template>
      </div>
      <div class="flex-1 overflow-y-auto p-4">
        <component :is="props.bodyComponent" v-if="props.bodyComponent" />
        <template v-else>
          <p>Slider Body Content</p>
        </template>
      </div>
      <div class="border-t p-4">
        <component :is="props.footerComponent" v-if="props.footerComponent" />
        <template v-else>
          <button class="w-full rounded bg-brandPrimary py-2 text-white">
            CTA Button
          </button>
        </template>
      </div>
    </div>
  </div>
</template>
