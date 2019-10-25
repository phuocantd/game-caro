import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Board from "./components/Board";
import "./App.css";
import reducers from "./reducers";

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <Board size={20} />
    </Provider>
  );
}

export default App;
