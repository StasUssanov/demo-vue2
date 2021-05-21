import Vue from 'vue';
import * as types from '../types';

export default {
  [types.FETCH_TASKS_REQUEST](state) {
    state.isLoading = true;
    state.error = null;
  },
  [types.FETCH_TASKS_SUCCESS](state, { tasks }) {
    state.isLoading = false;
    state.error = null;
    state.tasks = { ...tasks };
  },
  [types.FETCH_TASKS_FAILURE](state, { error }) {
    state.isLoading = false;
    state.error = error;
  },
  [types.CREATE_TASK](state, { task }) {
    Vue.set(state.tasks, task.id, task);
  },
  [types.DELETE_TASK](state, { id }) {
    state.tasks = Object
      .values(state.tasks)
      .filter((task) => task.id !== id);
  },
  [types.TASK_COMPLETED](state, { task }) {
    // eslint-disable-next-line no-param-reassign
    task.completed = !task.completed;
  },
};
