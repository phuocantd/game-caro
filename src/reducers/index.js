import { combineReducers } from "redux";

import square from "./Square";
import { status, xIsNext, isWinner, preRowDark } from "./Basic";
import history from './History'

const reducers = combineReducers({
  square,
  status,
  xIsNext,
  isWinner,
  preRowDark,
  history
});

export default reducers;
