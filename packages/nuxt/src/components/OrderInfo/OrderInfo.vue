<script setup lang="ts">
interface OrderInfoCardProps {
  id?: string
}

interface OrderInfoCardFields {
  icon: string
  title: string
  description: string
}

interface OrderInfoCardsType {
  leftCard: OrderInfoCardFields
  centerCard: OrderInfoCardFields
  rightCard: OrderInfoCardFields
}

const props = defineProps<OrderInfoCardProps>()

const query = `*[_type == "orderInfoCards" && _id == "${props.id}"][0] {
  "leftCard": {
    "icon": leftCard.icon.asset->url,
    "title": leftCard.title,
    "description": leftCard.description,
  },
  "centerCard": {
    "icon": centerCard.icon.asset->url,
    "title": centerCard.title,
    "description": centerCard.description,
  },
  "rightCard": {
    "icon": rightCard.icon.asset->url,
    "title": rightCard.title,
    "description": rightCard.description,
  },
}`

const { data } = await useSanityQuery<OrderInfoCardsType>(query)

const leftCard = data?.value?.leftCard
const centerCard = data?.value?.centerCard
const rightCard = data?.value?.rightCard
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
          v-if="leftCard"
          :title="leftCard?.title"
          :description="leftCard?.description"
          :icon="leftCard?.icon"
        />
        <OrderInfoCard
          v-if="centerCard"
          :title="centerCard?.title"
          :description="centerCard?.description"
          :icon="centerCard?.icon"
        />
        <OrderInfoCard
          v-if="rightCard"
          :title="rightCard?.title"
          :description="rightCard?.description"
          :icon="rightCard?.icon"
        />
      </div>
    </div>
  </div>
</template>
