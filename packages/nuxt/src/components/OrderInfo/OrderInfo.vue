<script setup lang="ts">

</script>

<template>
  <div>
    <div
      class="
        bg-brandPrimary py-4

        md:rounded
      "
    >
      <div
        class="
          grid grid-cols-1 justify-center gap-4 space-y-4 p-4

          md:grid-cols-3 md:space-y-0 md:p-8
        "
      >
        <OrderInfoCard
          title="Online Ordering"
          description="Agronomy Assistance is just a few clicks away. Use our simple checkout system for all your needs."
          icon="ic:outline-shopping-cart"
        />
        <OrderInfoCard
          title="Order Status"
          description="When you order our products you'll be notified of your shipment status via email."
          icon="ic:outline-mail"
        />
        <OrderInfoCard
          title="Reliable Delivery"
          description="Your orders are made and shipped with care. Each order generally arrives between 7 to 10 business days. If you would like to organize you own shipping simply contact our office and we will get it done your way."
          icon="ic:outline-local-shipping"
        />
      </div>
    </div>
  </div>
</template>
