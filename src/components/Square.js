import React from "react";

export default function Square(props) {
  const { onClick, value, isWin, curClick } = props;
  return (
    <button
      type="button"
      className={`square ${curClick ? "square-click" : ""} + ${
        isWin ? "square-win" : ""
      }`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
