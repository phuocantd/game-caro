function resetSquare() {
  return { type: "RESET_SQUARE" };
}

function changeSquareValue(row, col, value) {
  return { type: "CHANGE_SQUARE_VALUE", row, col, value };
}

function changeSquareIsDark(row, col, value) {
  return { type: "CHANGE_SQUARE_IS_DARK", row, col, value };
}

function changeSquareIsWin(row, col, value) {
  return { type: "CHANGE_SQUARE_IS_WIN", row, col, value };
}

module.exports = {
  resetSquare,
  changeSquareValue,
  changeSquareIsDark,
  changeSquareIsWin
};
