<script setup lang="ts">
interface HeroBannerContainer {
  backgroundImage?: string
}

defineProps<HeroBannerContainer>()
</script>

<template>
  <div v-if="backgroundImage">
    <div
      class="
        bg-cover bg-center

        md:rounded-md
      "
      :style="{ backgroundImage: `url(${backgroundImage}` }"
    >
      <div
        class="
          grid items-center justify-items-center gap-4 px-24 py-12

          md:grid-cols-2
        "
      >
        <slot name="heroBannerContent" />
      </div>
    </div>
  </div>
</template>
