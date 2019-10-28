/* eslint-disable no-param-reassign */
const initSquare = new Array(20)
  .fill(null)
  .map(() =>
    new Array(20)
      .fill(null)
      .map(() => ({ value: null, isDark: false, isWin: false }))
  );

const squareReducer = (state = initSquare, action) => {
  switch (action.type) {
    case "RESET_SQUARE":
      return new Array(20)
        .fill(null)
        .map(() =>
          new Array(20)
            .fill(null)
            .map(() => ({ value: null, isDark: false, isWin: false }))
        );
    case "CHANGE_SQUARE_VALUE":
      state[action.row][action.col].value = action.value;
      return [...state];
    case "CHANGE_SQUARE_IS_DARK":
      state[action.row][action.col].isDark = action.value;
      return [...state];
    case "CHANGE_SQUARE_IS_WIN":
      state[action.row][action.col].isWin = action.value;
      return [...state];
    default:
      return state;
  }
};

export default squareReducer;
