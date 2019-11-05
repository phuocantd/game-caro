
const useReducer = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_USER_ID":
      return { ...state, userId: action.userId };
    case "CHANGE_USERNAME":
      return { ...state, username: action.username };
    case "CHANGE_PASSWORD":
      return { ...state, password: action.password };
    default:
      return state;
  }
};

export default useReducer;
