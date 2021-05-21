import Vue from 'vue';
import * as types from '../types';

export default {
  [types.FETCH_BOARDS_REQUEST](state) {
    state.isLoading = true;
    state.error = null;
  },
  [types.FETCH_BOARDS_SUCCESS](state, { boards }) {
    state.isLoading = false;
    state.error = null;
    state.boards = { ...boards };
  },
  [types.FETCH_BOARDS_FAILURE](state, { error }) {
    state.isLoading = false;
    state.error = error;
  },
  [types.CREATE_BOARD](state, { board }) {
    Vue.set(state.boards, board.id, board);
  },
};
