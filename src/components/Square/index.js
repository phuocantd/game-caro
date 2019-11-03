/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import { connect } from "react-redux";

import "./index.css";

import { clickSquare } from "../../_function/Square";

function Cell({ row, col, square }) {
  return (
    <td
      onClick={() => clickSquare(row, col)}
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
