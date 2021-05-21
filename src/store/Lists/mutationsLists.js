import Vue from 'vue';
import * as types from '../types';

export default {
  [types.FETCH_LISTS_REQUEST](state) {
    state.isLoading = true;
    state.error = null;
  },
  [types.FETCH_LISTS_SUCCESS](state, { lists }) {
    state.isLoading = false;
    state.error = null;
    state.lists = { ...lists };
  },
  [types.FETCH_LISTS_FAILURE](state, { error }) {
    state.isLoading = false;
    state.error = error;
  },
  [types.CREATE_LIST](state, { list }) {
    Vue.set(state.lists, list.id, list);
  },
};
