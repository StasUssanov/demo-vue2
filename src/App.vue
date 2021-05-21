<template>
  <VApp>
    <VAppBar app>
      <VContainer>
        <RouterLink class="me-8" :to="{name: 'Home'}">Home</RouterLink>
        <RouterLink :to="{name: 'About'}">О проекте</RouterLink>
      </VContainer>
      <VProgressLinear
        :active="isLoading"
        indeterminate
        absolute
        bottom
      />
    </VAppBar>
    <VMain class="main flex-grow-1">
      <RouterView/>
    </VMain>
  </VApp>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'App',
  computed: {
    ...mapState([
      'isLoading',
    ]),
  },
};
</script>

<style lang="scss">
@import "styles/main";
</style>
