/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

export default function Cell({
  row,
  col,
  handleClick,
  value,
  curClick,
  isWin
}) {
  const clickSquare = () => {
    handleClick(row, col);
  };

  return (
    <td
      onClick={clickSquare}
      className={`tbl-cell ${curClick ? "square-click" : ""} ${
        isWin ? "square-win" : ""
      }`}
    >
      {value}
    </td>
  );
}
