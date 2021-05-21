<template>
  <fragment>
    <VCardText class="base-task-list">
      <BaseTask
        class="base-task-list__item"
        v-for="(task) in tasks"
        :key="`unit-base-task-list-${task.id}`"
        :label="task.title"
        :completed="task.completed"
        @click="handleChangeTask(task)"
        @delete="handleDeleteTask(task.id)"
      />
    </VCardText>
    <VCardActions>
      <VTextField
        v-model="newTaskName"
        placeholder="Добавить новую задачу"
        dense
        outlined
        hide-details
        append-icon="mdi-plus"
        @click:append="addTask"
      />
    </VCardActions>
  </fragment>
</template>

<script>
import { mapActions } from 'vuex';
import BaseTask from '../BaseTask/BaseTask.vue';

export default {
  name: 'BaseTaskList',
  components: { BaseTask },
  props: {
    id: String,
    tasks: Array,
  },
  data: () => ({
    newTaskName: '',
  }),
  methods: {
    ...mapActions([
      'createTask',
      'taskCompleted',
      'deleteTask',
    ]),
    addTask() {
      if (this.newTaskName.length > 0) {
        this.createTask({ list: this.id, title: this.newTaskName });
        this.newTaskName = '';
      }
    },
    handleChangeTask(task) {
      this.taskCompleted({ task });
    },
    handleDeleteTask(id) {
      this.deleteTask({ id });
    },
  },
};
</script>

<style lang="scss">
@import "BaseTaskList";
</style>
