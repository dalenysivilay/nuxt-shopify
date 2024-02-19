<template>
  <div class="col-span-1">
    <h2 class="mb-2 mt-4 font-sans text-lg font-bold">
      <slot name="title" />
    </h2>
    <ul class="list-inside list-none">
      <slot name="items" />
    </ul>
  </div>
</template>
