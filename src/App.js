/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation
} from "react-router-dom";
import "antd/dist/antd.css";

import Layout from "./components/Layout";

import Game from "./pages/Game";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages";
import Error from "./pages/404";

import store from "./store";
import { getMeAPI } from "./_functionAPI";
import { changeUserName, changeUserId } from "./actions/User";
import { changeIsAuthenticate } from "./actions/Basic";

const { dispatch } = store;

function App() {
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    getMeAPI(token)
      .then(res => {
        const { _id, username } = res.data;
        dispatch(changeUserId(_id));
        dispatch(changeUserName(username));
        dispatch(changeIsAuthenticate(true));
      })
      .catch(() => {
        // dispatch(changeIsAuthenticate(false));
      });
  });
  return (
    <Router>
      <Layout>
        <Switch>
          <PrivateRoute exact path="/game-caro">
            <Home />
          </PrivateRoute>
          <PublicRoute exact path="/game-caro/login">
            <Login />
          </PublicRoute>
          <PublicRoute exact path="/game-caro/register">
            <Register />
          </PublicRoute>
          <PrivateRoute exact path="/game-caro/game">
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

function PublicRoute({ children, ...rest }) {
  const { isAuthenticate } = store.getState();
  const locations = useLocation();
  const { from } = locations.state || { from: { pathname: "/" } };
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !isAuthenticate ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: from.pathname,
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
