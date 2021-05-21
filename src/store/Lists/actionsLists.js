import { db } from '../firebase';
import * as types from '../types';

const table = db.ref('lists');

export default {
  /* ~~~ CREATE ~~~ */
  createList({ commit }, { board, name }) {
    const id = table.push().key;
    const list = { id, name, board };
    table.child(id)
      .set(list)
      .then(() => commit(types.CREATE_LIST, { list }));
  },
  /* ~~~ READ ~~~ */
  readLists({ commit }, { boardId }) {
    commit(types.FETCH_LISTS_REQUEST);
    table.orderByChild('board')
      .equalTo(boardId)
      .once('value')
      .then((snap) => {
        commit(types.FETCH_LISTS_SUCCESS, { lists: snap.val() });
      })
      .catch((error) => {
        commit(types.FETCH_LISTS_FAILURE, { error });
      });
  },
  /* ~~~ UPDATE ~~~ */
  // updateList({ commit }, payload) {
  // },
  /* ~~~ DELETE ~~~ */
  // deleteList({ commit }, { id }) {
  // },
};
