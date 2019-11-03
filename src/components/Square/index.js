/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { connect } from "react-redux";

import "./index.css";
import { addItem } from "../../actions/History";
import {
  changeSquareIsDark,
  changeSquareValue,
  changeSquareIsWin
} from "../../actions/Square";
import {
  changePreRowDark,
  changeXIsNext,
  changeStatus,
  changeIsWinner
} from "../../actions/Basic";

function Cell({ row, col, square, xIsNext, isWinner, preRowDark, dispatch }) {
  const checkRow = () => {
    const size = 20;
    let block = 0;
    let count = 1;

    // kiểm tra phải
    let k = col + 1;
    while (k < size && square[row][k].value === square[row][col].value) {
      count += 1;
      if (
        square[row][k].value !== null &&
        square[row][k].value !== square[row][col].value
      ) {
        block += 1;
        break;
      }
      k += 1;
    }

    // kiểm tra trái
    k = col - 1;
    while (k >= 0 && square[row][k].value === square[row][col].value) {
      count += 1;

      if (
        square[row][k].value !== null &&
        square[row][k].value !== square[row][col].value
      ) {
        block += 1;
        break;
      }
      k -= 1;
    }
    if (block < 2 && count === 5) {
      return { player: square[row][col].value, type: 0 };
    }
    return null;
  };

  const checkCol = () => {
    const size = 20;
    let block = 0;
    let count = 1;

    // kiểm tra trên
    let k = row + 1;

    while (k < size && square[k][col].value === square[row][col].value) {
      count += 1;
      if (
        k + 1 < size &&
        square[k][col].value !== null &&
        square[k][col].value !== square[row][col].value
      ) {
        block += 1;
        break;
      }
      k += 1;
    }

    // kiểm tra dưới
    k = row - 1;
    while (k >= 0 && square[k][col].value === square[row][col].value) {
      count += 1;
      if (
        k >= 1 &&
        square[k][col].value !== null &&
        square[k][col].value !== square[row][col].value
      ) {
        block += 1;
        break;
      }
      k -= 1;
    }
    if (block < 2 && count === 5) {
      return { player: square[row][col].value, type: 1 };
    }
    return null;
  };

  const checkSlash = () => {
    const size = 20;
    let block = 0;
    let count = 1;
    let r = row - 1;
    let c = col + 1;
    if (
      r >= 0 &&
      c < size &&
      square[r][c].value !== null &&
      square[r][c].value !== square[row][col].value
    ) {
      block += 1;
    }
    while (
      r >= 0 &&
      c < size &&
      square[r][c].value === square[row][col].value
    ) {
      count += 1;
      r -= 1;
      c += 1;
      if (
        r >= 0 &&
        c < size &&
        square[r][c].value !== null &&
        square[r][c].value !== square[row][col].value
      ) {
        block += 1;
        break;
      }
    }
    r = row + 1;
    c = col - 1;
    if (
      r < size &&
      c >= 0 &&
      square[r][c].value !== null &&
      square[r][c].value !== square[row][col].value
    ) {
      block += 1;
    }
    while (
      r < size &&
      c >= 0 &&
      square[r][c].value === square[row][col].value
    ) {
      count += 1;
      r += 1;
      c -= 1;
      if (
        r < size &&
        c >= 0 &&
        square[r][c].value !== square[row][col].value &&
        square[r][c].value !== null
      ) {
        block += 1;
        break;
      }
    }
    if (block < 2 && count === 5) {
      return { player: square[row][col].value, type: 2 };
    }
    return null;
  };

  const checkBackSlash = () => {
    const size = 20;
    let block = 0;
    let count = 1;
    let r = row - 1;
    let c = col - 1;
    if (
      r >= 0 &&
      c >= 0 &&
      square[r][c].value !== null &&
      square[r][c].value !== square[row][col].value
    ) {
      block += 1;
    }
    while (r >= 0 && c >= 0 && square[r][c].value === square[row][col].value) {
      count += 1;
      r -= 1;
      c -= 1;
      if (
        r >= 0 &&
        c >= 0 &&
        square[r][c].value !== null &&
        square[r][c].value !== square[row][col].value
      ) {
        block += 1;
        break;
      }
    }
    r = row + 1;
    c = col + 1;
    if (
      r < size &&
      c < size &&
      square[r][c].value !== null &&
      square[r][c].value !== square[row][col].value
    ) {
      block += 1;
    }
    while (
      r < size &&
      c < size &&
      square[r][c].value === square[row][col].value
    ) {
      count += 1;
      r += 1;
      c += 1;
      if (
        r < size &&
        c < size &&
        square[r][c].value !== null &&
        square[r][c].value !== square[row][col].value
      ) {
        block += 1;
        break;
      }
    }
    if (block < 2 && count === 5) {
      return { player: square[row][col].value, type: 3 };
    }
    return null;
  };

  const checkWinner = () => {
    let isWin = checkRow(row, col);
    if (isWin !== null) {
      return isWin;
    }
    isWin = checkCol(row, col);
    if (isWin !== null) {
      return isWin;
    }
    isWin = checkSlash(row, col);
    if (isWin !== null) {
      return isWin;
    }
    isWin = checkBackSlash(row, col);
    if (isWin !== null) {
      return isWin;
    }
    return null;
  };

  const setBackgroundwin = winner => {
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

  const clickSquare = () => {
    // const size = 20;

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
    dispatch(changeXIsNext(!xIsNext));
    dispatch(changeStatus(`Next player: ${xIsNext ? "O" : "X"}`));

    const winner = checkWinner();
    if (winner) {
      dispatch(changeIsWinner(true));
      dispatch(changeStatus(`Winner: ${xIsNext ? "X" : "O"}`));
      setBackgroundwin(winner);
    }
  };

  return (
    <td
      onClick={clickSquare}
      className={`tbl-cell ${square[row][col].isDark ? "square-click" : ""} ${
        square[row][col].isWin ? "square-win" : ""
      }`}
    >
      {square[row][col].value}
    </td>
  );
}

export default connect(state => {
  return {
    square: state.square,
    xIsNext: state.xIsNext,
    isWinner: state.isWinner,
    preRowDark: state.preRowDark
  };
})(Cell);
