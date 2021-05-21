import { db } from '../firebase';
import * as types from '../types';

const table = db.ref('boards');

export default {
  /* ~~~ CREATE ~~~ */
  createBoard({ commit }, { name }) {
    const id = table.push().key;
    const board = { id, name };
    table.child(id)
      .set(board)
      .then(() => commit(types.CREATE_BOARD, { board }));
  },
  /* ~~~ READ ~~~ */
  readBoards({ commit }) {
    commit(types.FETCH_BOARDS_REQUEST);
    table
      .once('value')
      .then((snap) => {
        commit(types.FETCH_BOARDS_SUCCESS, { boards: snap.val() });
      })
      .catch((error) => {
        commit(types.FETCH_BOARDS_FAILURE, { error });
      });
  },
  /* ~~~ UPDATE ~~~ */
  // updateBoard({ commit }, payload) {
  // },
  /* ~~~ DELETE ~~~ */
  // deleteBoard({ commit }, { id }) {
  // },
};
