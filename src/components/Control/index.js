/* eslint-disable no-useless-return */
import React from "react";
import { connect } from "react-redux";

import Button from "../Button";
import "./index.css";
import List from "../List";
import { reset, undo } from "../../_function/Control";
import { computerClick, getXY } from "../../_function/Computer";

function Control() {
  const undoGame = () => {
    undo();
    setTimeout(() => {
      const point = getXY();
      computerClick(point.x, point.y);
    }, 1000);
  };
  return (
    <>
      <Button name="Reset" handleClick={reset} />
      <Button name="Undo" handleClick={undoGame} />
      <List mode={1} />
    </>
  );
}

export default connect(state => {
  return {
    history: state.history,
    isWinner: state.isWinner,
    xIsNext: state.xIsNext
  };
})(Control);
