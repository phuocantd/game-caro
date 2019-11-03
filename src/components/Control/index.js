/* eslint-disable no-useless-return */
import React from "react";
import { connect } from "react-redux";

import Button from "../Button";
import "./index.css";
import List from "../List";
import { reset, undo } from "../../_function/Control";

function Control() {
  return (
    <>
      <Button name="Reset" handleClick={reset} />
      <Button name="Undo" handleClick={undo} />
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
