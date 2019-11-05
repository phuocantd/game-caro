/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import "antd/dist/antd.css";

import Layout from "./components/Layout";

import Game from "./pages/Game";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages";
import Error from "./pages/404";

import store from "./store";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <PrivateRoute exact path="/game">
            <Game />
          </PrivateRoute>
          <Route component={Error} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

function PrivateRoute({ children, ...rest }) {
  const { isAuthenticate } = store.getState();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticate ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
