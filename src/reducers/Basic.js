const statusReducer = (state = "Next player: X", action) => {
  switch (action.type) {
    case "CHANGE_STATUS":
      return action.value;
    case "RESET_STATUS":
      return "Next player: X";
    default:
      return state;
  }
};

const xIsNextReducer = (state = true, action) => {
  switch (action.type) {
    case "CHANGE_X_IS_NEXT":
      return action.value;
    case "RESET_X_IS_NEXT":
      return true;
    default:
      return state;
  }
};

const isWinnerReducer = (state = false, action) => {
  switch (action.type) {
    case "CHANGE_IS_WINNER":
      return action.value;
    case "RESET_IS_WINNER":
      return false;
    default:
      return state;
  }
};

const preRowDarkReducer = (state = { x: 0, y: 0 }, action) => {
  switch (action.type) {
    case "CHANGE_PRE_ROW_DARK":
      return { x: action.x, y: action.y };
    case "RESET_PRE_ROW_DARK":
      return { x: 0, y: 0 };
    default:
      return state;
  }
};

module.exports = {
  status: statusReducer,
  xIsNext: xIsNextReducer,
  isWinner: isWinnerReducer,
  preRowDark: preRowDarkReducer
};
