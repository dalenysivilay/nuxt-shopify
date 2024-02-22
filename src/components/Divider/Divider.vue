<template>
  <div class="relative">
    <div aria-hidden="true" class="absolute inset-0 flex items-center">
      <div class="w-full border-t border-gray-300" />
    </div>
    <div class="relative flex justify-center">
      <span class="bg-white px-2 text-sm text-gray-500">
        <slot />
      </span>
    </div>
  </div>
</template>
