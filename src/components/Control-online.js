/* eslint-disable no-useless-return */
import React from "react";
import { connect } from "react-redux";

import Button from "./Button";
import {
  resetStatus,
  resetXIsNext,
  resetIsWinner,
  resetPreRowDark,
  changeStatus,
  changePreRowDark
} from "../actions/Basic";
import {
  resetSquare,
  changeSquareValue,
  changeSquareIsDark
} from "../actions/Square";
import { resetHistory, removeItem } from "../actions/History";

function Control({ dispatch, history, isWinner }) {
  const reset = () => {
    dispatch(resetStatus());
    dispatch(resetXIsNext());
    dispatch(resetIsWinner());
    dispatch(resetPreRowDark());
    dispatch(resetHistory());
    dispatch(resetSquare());
  };

  const undo = () => {
    const len = history.length;
    if (len === 0 || isWinner) {
      return;
    }

    dispatch(changeSquareValue(history[len - 1].x, history[len - 1].y, null));
    dispatch(changeSquareIsDark(history[len - 1].x, history[len - 1].y, false));
    if (len - 2 >= 0) {
      dispatch(
        changeSquareIsDark(history[len - 2].x, history[len - 2].y, true)
      );
      dispatch(changePreRowDark(history[len - 2].x, history[len - 2].y));
    }
    dispatch(changeStatus(`Next player: ${history[len - 2].player}`));
    dispatch(removeItem(len - 1));
  };

  return (
    <>
      <Button name="Reset" handleClick={reset} />
      <Button name="Undo" handleClick={undo} />
    </>
  );
}

export default connect(state => {
  return {
    history: state.history,
    isWinner: state.isWinner
  };
})(Control);
