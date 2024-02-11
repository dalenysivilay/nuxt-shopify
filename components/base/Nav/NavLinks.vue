<script setup lang="ts">
const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Blog', path: '/blog' },
  { label: 'Shop', path: '/shop' },
]
</script>

<template>
  <div class="flex items-center justify-between space-x-4">
    <div class="flex space-x-3">
      <NuxtLink
        v-for="link in navLinks"
        :key="link.label"
        :to="link.path"
        class="
          text-base font-medium text-black

          hover:text-brandPrimary hover:underline
        "
      >
        {{ link.label }}
      </NuxtLink>
    </div>
    <div class="flex space-x-3">
      <NuxtLink to="/account">
        <Icon
          name="ic:round-account-circle" class="
            size-5 text-black

            hover:text-brandPrimary
          "
        />
      </NuxtLink>
      <NuxtLink to="/cart">
        <Icon
          name="ic:outline-shopping-cart" class="
            size-5 text-black

            hover:text-brandPrimary
          "
        />
      </NuxtLink>
    </div>
  </div>
</template>
