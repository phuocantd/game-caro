import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Chess from "./components/Chess";
import "./App.css";
import reducers from "./reducers";

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <Chess size={20} />
    </Provider>
  );
}

export default App;
