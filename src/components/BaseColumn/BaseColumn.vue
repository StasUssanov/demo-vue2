<template>
  <VCard>
    <VCardTitle>{{ name }}</VCardTitle>
    <BaseTaskList :id="id" :tasks="tasksList"/>
  </VCard>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import BaseTaskList from '../BaseTaskList/BaseTaskList.vue';

export default {
  name: 'BaseColumn',
  components: {
    BaseTaskList,
  },
  props: {
    id: String,
    name: String,
  },
  computed: {
    ...mapGetters([
      'getTasksFromList',
    ]),
    tasksList() {
      return this.getTasksFromList(this.id);
    },
  },
  methods: {
    ...mapActions([
      'readTasks',
    ]),
  },
  created() {
    this.readTasks({ list: this.id });
  },
};
</script>

<style lang="scss">

</style>
