/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/react-in-jsx-scope */
import React from "react";

import Cell from "./Cell";

export default function Board({ size, square, handleClick }) {
  return (
    <table className="tbl-board">
      <tbody>
        <tr key={String(-1)}>
          {Array(size + 1)
            .fill(null)
            .map((item, idx) => (
              <Cell
                key={String(idx + 1)}
                value={idx > 0 ? String.fromCharCode(idx + 64) : ""}
                handleClick={() => {}}
              />
            ))}
        </tr>
        {square.map((item, index) => {
          return (
            <tr key={String(index)}>
              <Cell key={-1} value={index + 1} handleClick={() => {}} />
              {item.map((i, idx) => (
                <Cell
                  row={index}
                  col={idx}
                  value={square[index][idx].value}
                  handleClick={handleClick}
                  key={String(index * size + idx)}
                  curClick={square[index][idx].isDark}
                  isWin={square[index][idx].isWin}
                />
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
