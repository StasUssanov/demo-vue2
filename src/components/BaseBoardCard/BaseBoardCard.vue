<template>
  <RouterLink class="base-board-card" :to="{ name: 'Board', params: { id } }">
    <VCard>
      <VCardTitle>
        {{ name }}
      </VCardTitle>
    </VCard>
  </RouterLink>
</template>

<script>
export default {
  name: 'BaseBoardCard',
  props: {
    id: String,
    name: String,
  },
};
</script>
