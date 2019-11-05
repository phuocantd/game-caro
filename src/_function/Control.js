import {
  resetStatus,
  resetXIsNext,
  resetIsWinner,
  resetPreRowDark,
  changeStatus,
  changePreRowDark,
  changeXIsNext
} from "../actions/Basic";
import {
  resetSquare,
  changeSquareValue,
  changeSquareIsDark
} from "../actions/Square";
import { resetHistory, removeItem } from "../actions/History";

import store from "../store";

const { dispatch } = store;

const reset = () => {
  dispatch(resetStatus());
  dispatch(resetXIsNext());
  dispatch(resetIsWinner());
  dispatch(resetPreRowDark());
  dispatch(resetHistory());
  dispatch(resetSquare());
};

const undo = () => {
  const { history, isWinner } = store.getState();
  const len = history.length;
  if (len === 0 || isWinner) {
    return;
  }

  dispatch(changeXIsNext());
  dispatch(changeSquareValue(history[len - 1].x, history[len - 1].y, null));
  dispatch(changeSquareIsDark(history[len - 1].x, history[len - 1].y, false));
  if (len - 2 >= 0) {
    dispatch(changeSquareIsDark(history[len - 2].x, history[len - 2].y, true));
    dispatch(changePreRowDark(history[len - 2].x, history[len - 2].y));
    dispatch(
      changeStatus(
        `Next player: ${history[len - 2].player === "X" ? "You" : "Computer"}`
      )
    );
  } else {
    dispatch(changeStatus(`Next player: You`));
  }
  dispatch(removeItem(len - 1));
};

export { reset, undo };
