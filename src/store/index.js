import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import actionsBoards from './Boards/actionsBoards';
import gettersBoards from './Boards/gettersBoards';
import mutationsBoards from './Boards/mutationsBoards';
import actionsLists from './Lists/actionsLists';
import gettersLists from './Lists/gettersLists';
import mutationsLists from './Lists/mutationsLists';
import actionsTasks from './Tasks/actionTasks';
import gettersTasks from './Tasks/gettersTasks';
import mutationsTasks from './Tasks/mutationsTasks';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  actions: {
    ...actionsBoards,
    ...actionsLists,
    ...actionsTasks,
  },
  mutations: {
    ...mutationsBoards,
    ...mutationsLists,
    ...mutationsTasks,
  },
  getters: {
    ...gettersBoards,
    ...gettersLists,
    ...gettersTasks,
  },
  modules: {},
});
