/* eslint-disable import/no-cycle */
import { addItem } from "../actions/History";
import {
  changeSquareIsDark,
  changeSquareValue,
  changeSquareIsWin
} from "../actions/Square";
import {
  changePreRowDark,
  changeXIsNext,
  changeStatus,
  changeIsWinner
} from "../actions/Basic";
import checkWinner from "./Check";
import { computerClick, getXY } from "./Computer";

import store from "../store";

const { dispatch } = store;

const setBackgroundwin = (winner, row, col) => {
  const { square } = store.getState();
  const size = 20;
  let k = 0;
  let r = 0;
  let c = 0;

  dispatch(changeSquareIsDark(row, col, false));
  dispatch(changeSquareIsWin(row, col, true));
  switch (winner.type) {
    case 0:
      k = col + 1;
      while (k < size && square[row][k].value === square[row][col].value) {
        dispatch(changeSquareIsWin(row, k, true));
        k += 1;
      }
      k = col - 1;
      while (k >= 0 && square[row][k].value === square[row][col].value) {
        dispatch(changeSquareIsWin(row, k, true));
        k -= 1;
      }
      break;
    case 1:
      k = row + 1;
      while (k < size && square[k][col].value === square[row][col].value) {
        dispatch(changeSquareIsWin(k, col, true));
        k += 1;
      }
      k = row - 1;
      while (k >= 0 && square[k][col].value === square[row][col].value) {
        dispatch(changeSquareIsWin(k, col, true));
        k -= 1;
      }
      break;
    case 2:
      r = row - 1;
      c = col + 1;
      while (
        r >= 0 &&
        c < size &&
        square[r][c].value === square[row][col].value
      ) {
        dispatch(changeSquareIsWin(r, c, true));
        r -= 1;
        c += 1;
      }
      r = row + 1;
      c = col - 1;
      while (
        r < size &&
        c >= 0 &&
        square[r][c].value === square[row][col].value
      ) {
        dispatch(changeSquareIsWin(r, c, true));
        r += 1;
        c -= 1;
      }
      break;
    case 3:
      r = row - 1;
      c = col - 1;
      while (
        r >= 0 &&
        c >= 0 &&
        square[r][c].value === square[row][col].value
      ) {
        dispatch(changeSquareIsWin(r, c, true));
        r -= 1;
        c -= 1;
      }
      r = row + 1;
      c = col + 1;
      while (
        r < size &&
        c < size &&
        square[r][c].value === square[row][col].value
      ) {
        dispatch(changeSquareIsWin(r, c, true));
        r += 1;
        c += 1;
      }
      break;
    default:
      break;
  }
};

const clickSquare = (row, col) => {
  // const size = 20;
  const { square, isWinner, xIsNext, preRowDark } = store.getState();

  if (square[row][col].value || isWinner || !xIsNext) {
    return;
  }
  // them lich su buoc di
  dispatch(addItem(row, col, !xIsNext ? "X" : "O"));
  // thay doi mau vi tri hien tai
  dispatch(changeSquareIsDark(preRowDark.x, preRowDark.y, false));
  dispatch(changeSquareIsDark(row, col, true));
  // thay doi vi tri danh
  dispatch(changePreRowDark(row, col));
  // thay doi gia tri ban co
  dispatch(changeSquareValue(row, col, xIsNext ? "X" : "O"));
  // thay doi vi tri danh tiep va status
  dispatch(changeXIsNext());
  dispatch(changeStatus(`Next player: ${xIsNext ? "Computer" : "You"}`));

  const winner = checkWinner(row, col);
  if (winner) {
    dispatch(changeIsWinner(true));
    dispatch(changeStatus(`Winner: ${xIsNext ? "You" : "Computer"}`));
    setBackgroundwin(winner, row, col);
  }
  setTimeout(() => {
    const point = getXY();
    computerClick(point.x, point.y);
  }, 1000);
};

export { setBackgroundwin, clickSquare };
