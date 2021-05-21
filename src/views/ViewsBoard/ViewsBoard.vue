<template>
  <VContainer class="views-home">
    <VBreadcrumbs :items="getCrumbs"/>
    <VRow>
      <VCol class="d-flex align-center">
        <VTextField
          class="me-5"
          v-model="newListName"
          placeholder="Добавить новый список"
          dense
          outlined
          hide-details
        />
        <VBtn @click="addList" :disabled="newListName.length === 0">
          <VIcon class="me-2">mdi-plus</VIcon>
          <span>Добавить</span>
        </VBtn>
      </VCol>
    </VRow>
    <VRow>
      <VCol cols="3" v-for="{id, name} in boardLists" :key="`unit-base-column-${id}`">
        <BaseColumn :id="id" :name="name"/>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import BaseColumn from '../../components/BaseColumn/BaseColumn.vue';

export default {
  name: 'ViewsBoard',
  components: {
    BaseColumn,
  },
  props: {
    id: String,
  },
  data: () => ({
    nameBoard: '',
    newListName: '',
  }),
  computed: {
    ...mapGetters([
      'getBoardById',
      'getListsByBoard',
    ]),
    boardLists() {
      return this.getListsByBoard(this.id);
    },
    getCrumbs() {
      return [
        {
          text: 'Доски',
          disabled: false,
          href: '/',
        },
        {
          text: this.nameBoard || 'null',
          disabled: true,
        },
      ];
    },
  },
  methods: {
    ...mapActions([
      'createList',
      'readLists',
    ]),
    addList() {
      this.createList({ board: this.id, name: this.newListName });
      this.newListName = '';
    },
  },
  created() {
    this.readLists({ boardId: this.$props.id });
    const result = this.getBoardById(this.$props.id);
    /* TODO: Добавить загрузку данных при обновлении страницы.
     * Упрощение логики, если нет данных кидает на Home.
     */
    if (result) {
      this.nameBoard = result.name;
    } else {
      this.$router.push({ path: '/' });
    }
  },
};
</script>

<style lang="scss">
@import "ViewsBoard";
</style>
