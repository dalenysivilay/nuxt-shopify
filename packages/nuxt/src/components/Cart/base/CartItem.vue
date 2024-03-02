<script lang="ts">
</script>

<template>
  <div>
    <div class="flex flex-row items-center justify-between">
      <div class="flex flex-row text-sm">
        <img
          src=""
          alt=""
          width="100"
          height="100"
          class="mr-4 block h-auto w-20 self-start object-contain"
        >
        <div>
          <div class="text-base font-bold text-black">
            Title
          </div>
          <div class="text-sm font-normal text-black">
            Quantity: 2
          </div>
          <div class="text-sm font-normal text-black">
            $100.00
          </div>
        </div>
      </div>
      <button class="ml-4">
        <Icon
          name="ci:trash-full"
          size="1.5rem"
          @click="() => {}"
          @keyup.enter="() => {}"
        />
      </button>
    </div>
  </div>
</template>
