const historyReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, { x: action.x, y: action.y, player: action.player }];
    case "RESET_HISTORY":
      return [];
    case "REMOVE_ITEM":
      return state.filter((e, i) => i !== action.index);
    default:
      return state;
  }
};

export default historyReducer;
