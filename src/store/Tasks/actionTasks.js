import { db } from '../firebase';
import * as types from '../types';

const table = db.ref('tasks');

export default {
  /* ~~~ CREATE ~~~ */
  createTask({ commit }, { list, title }) {
    const id = table.push().key;
    const task = {
      id,
      list,
      title,
      completed: false,
    };
    table.child(id)
      .set(task)
      .then(() => commit(types.CREATE_TASK, { task }));
  },
  /* ~~~ READ ~~~ */
  readTasks({ commit }, { list }) {
    commit(types.FETCH_TASKS_REQUEST);
    table
      .orderByChild('list')
      .equalTo(list)
      .once('value')
      .then((snap) => {
        commit(types.FETCH_TASKS_SUCCESS, { tasks: snap.val() });
      })
      .catch((error) => {
        commit(types.FETCH_LISTS_FAILURE, { error });
      });
  },
  /* ~~~ UPDATE ~~~ */
  // updateTask({ commit }, payload) {
  // },
  /* ~~~ DELETE ~~~ */
  deleteTask({ commit }, { id }) {
    table
      .child(id)
      .remove()
      .then(() => {
        commit(types.DELETE_TASK, { id });
      });
  },
  /* ~~~ COMPLETED ~~~ */
  taskCompleted({ commit }, { task }) {
    table.child(task.id)
      .set({ ...task, completed: !task.completed })
      .then(() => commit(types.TASK_COMPLETED, { task }));
  },
};
