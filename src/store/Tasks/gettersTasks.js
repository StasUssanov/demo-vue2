export default {
  getTasksFromList: (state) => (listId) => Object
    .values(state.tasks)
    .filter((task) => task.list === listId),
  // .shift(),
};
