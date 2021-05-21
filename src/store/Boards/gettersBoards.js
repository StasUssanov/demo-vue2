export default {
  getBoardById: (state) => (boardId) => Object
    .values(state.boards)
    .filter((board) => board.id === boardId)
    .shift(),
};
