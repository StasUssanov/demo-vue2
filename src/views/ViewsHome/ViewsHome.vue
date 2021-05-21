<template>
  <VContainer class="views-home">
    <VRow>
      <VCol class="d-flex align-center">
        <VTextField
          class="me-5"
          v-model="newBoardName"
          placeholder="Добавить новую доску"
          dense
          outlined
          hide-details
        />
        <VBtn @click="addBoard" :disabled="newBoardName.length === 0">
          <VIcon class="me-2">mdi-plus</VIcon>
          <span>Добавить</span>
        </VBtn>
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="3" v-for="{id, name} in boards" :key="`unit-base-board-card-${id}`">
        <BaseBoardCard :id="id" :name="name"/>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import BaseBoardCard from '../../components/BaseBoardCard/BaseBoardCard.vue';

export default {
  name: 'ViewsHome',
  components: {
    BaseBoardCard,
  },
  data: () => ({
    newBoardName: '',
  }),
  computed: {
    ...mapState([
      'boards',
      'isLoading',
    ]),
  },
  methods: {
    ...mapActions([
      'createBoard',
      'readBoards',
    ]),
    addBoard() {
      this.createBoard({ name: this.newBoardName });
      this.newBoardName = '';
    },
  },
  created() {
    this.readBoards();
  },
};
</script>

<style lang="scss">
@import "./ViewsHome.scss";
</style>
