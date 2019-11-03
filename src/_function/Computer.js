/* eslint-disable import/no-cycle */
import { addItem } from "../actions/History";
import { changeSquareIsDark, changeSquareValue } from "../actions/Square";
import {
  changePreRowDark,
  changeXIsNext,
  changeStatus,
  changeIsWinner
} from "../actions/Basic";
import checkWinner from "./Check";
import { setBackgroundwin } from "./Square";
import store from "../store";

const { dispatch } = store;

const getXY = () => {
  const x = Math.floor(Math.random() * 20);
  const y = Math.floor(Math.random() * 20);
  const { square } = store.getState();
  if (square[x][y].value) {
    return getXY();
  }
  return { x, y };
};

const computerClick = (row, col) => {
  // const size = 20;
  const { square, isWinner, xIsNext, preRowDark } = store.getState();

  if (square[row][col].value || isWinner) {
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
  dispatch(changeStatus(`Next player: ${xIsNext ? "O" : "X"}`));

  const winner = checkWinner(row, col);
  if (winner) {
    dispatch(changeIsWinner(true));
    dispatch(changeStatus(`Winner: ${xIsNext ? "X" : "O"}`));
    setBackgroundwin(winner, row, col);
  }
};

export { computerClick, getXY };
