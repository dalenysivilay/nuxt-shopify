<script setup lang="ts">
</script>

<template>
  <div>
    <TemplateFooter
      get-in-touch-title="Get in Touch"
      navigation-title="Navigation"
      resources-title="Resources"
    >
      <template #getInTouchItems>
        <li>
          <a
            href="tel:5738558102" class="
              text-white

              hover:text-brandPrimary
            "
          >Phone: (573) 855-8012</a>
        </li>
        <li>
          <a
            href="mailto:colonialharvest@gmail.com" class="
              text-white

              hover:text-brandPrimary
            "
          >Email: colonialharvest@gmail.com</a>
        </li>
        <li>Address: 317 Arlington Ridge, Cary, NC 27513</li>
      </template>
      <template #navigationItems>
        <li>
          <NuxtLink
            to="/" class="
              text-white

              hover:text-brandPrimary
            "
          >
            Home
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/about" class="
              text-white

              hover:text-brandPrimary
            "
          >
            About
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/collections/turf-products" class="
              text-white

              hover:text-brandPrimary
            "
          >
            Turf Products
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/collections/ag-products" class="
              text-white

              hover:text-brandPrimary
            "
          >
            AG Products
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/guide" class="
              text-white

              hover:text-brandPrimary
            "
          >
            Quick Guide
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/contact" class="
              text-white

              hover:text-brandPrimary
            "
          >
            Contact
          </NuxtLink>
        </li>
      </template>
      <template #resourcesItems>
        <li>
          <NuxtLink
            to="/blog" class="
              text-white

              hover:text-brandPrimary
            "
          >
            Blog
          </NuxtLink>
        </li>
        <li>
          <a
            href="#" class="
              text-white

              hover:text-brandPrimary
            "
          >Customer Training</a>
        </li>
        <li>
          <a
            href="#" class="
              text-white

              hover:text-brandPrimary
            "
          >Team Members</a>
        </li>
        <li>
          <a
            href="#" class="
              text-white

              hover:text-brandPrimary
            "
          >Protea Website</a>
        </li>
      </template>
    </TemplateFooter>
  </div>
</template>
