import { combineReducers } from "redux";

import square from "./Square";
import { status, xIsNext, isWinner, preRowDark, isAuthenticate } from "./Basic";
import history from './History';
import user from './User'
import profile from './Profile'
import dataQuery from './dataQuery'

const reducers = combineReducers({
  square,
  status,
  xIsNext,
  isWinner,
  preRowDark,
  history,
  user,
  profile,
  dataQuery,
  isAuthenticate
});

export default reducers;
