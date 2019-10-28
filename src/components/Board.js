/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { connect } from "react-redux";

import Cell from "./Cell";

function Board({ square }) {
  return (
    <table className="tbl-board">
      <tbody>
        <tr key={String(-1)}>
          {Array(21)
            .fill(null)
            .map((item, idx) => (
              <td className="tbl-cell" key={String(idx + 1)}>
                {idx > 0 ? String.fromCharCode(idx + 64) : ""}
              </td>
            ))}
        </tr>
        {square.map((item, index) => {
          return (
            <tr key={String(index)}>
              <td className="tbl-cell" key={String(-1)}>
                {index + 1}
              </td>
              {item.map((i, idx) => (
                <Cell
                  key={String(index * 20 + idx)}
                  row={index}
                  col={idx}
                />
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default connect(state => {
  return { square: state.square };
})(Board);
