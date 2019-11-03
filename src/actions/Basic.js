function changeStatus(value) {
  return { type: "CHANGE_STATUS", value };
}

function changeXIsNext() {
  return { type: "CHANGE_X_IS_NEXT" };
}

function changeIsWinner(value) {
  return { type: "CHANGE_IS_WINNER", value };
}

function changePreRowDark(x, y) {
  return { type: "CHANGE_PRE_ROW_DARK", x, y };
}

function resetStatus() {
  return { type: "RESET_STATUS" };
}

function resetXIsNext() {
  return { type: "RESET_X_IS_NEXT" };
}

function resetIsWinner() {
  return { type: "RESET_IS_WINNER" };
}

function resetPreRowDark() {
  return { type: "RESET_PRE_ROW_DARK" };
}

module.exports = {
  changeStatus,
  changeXIsNext,
  changeIsWinner,
  changePreRowDark,
  resetStatus,
  resetXIsNext,
  resetIsWinner,
  resetPreRowDark
};
