/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { connect } from "react-redux";
import "antd/dist/antd.css";

import "./index.css";
import { changeIsAuthenticate } from "../../actions/Basic";

const { Header, Content, Footer } = Layout;

function App({ dispatch, isAuthenticate, children }) {
  const defaultSelectedKey = () => {
    const url = window.location.href.split("/");
    switch (url.pop()) {
      case "":
        return 1;
      case "login":
        return 2;
      case "register":
        return 3;
      case "game":
        return 4;
      default:
        return 1;
    }
  };

  const signOut = () => {
    dispatch(changeIsAuthenticate(false));
    localStorage.removeItem("jwtToken");
  };

  return (
    <Router>
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[`${defaultSelectedKey()}`]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/register">Register</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/game">Game</Link>
            </Menu.Item>
            {isAuthenticate && (
              <span
                style={{ paddingLeft: 10 }}
                onClick={() => {
                  signOut();
                }}
              >
                Sign out
              </span>
            )}
          </Menu>
        </Header>
        <Content style={{ marginTop: 64 }} className="center">
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Copyright by{" "}
          <a href="https://www.facebook.com/phuocantd">phuocantd</a>
        </Footer>
      </Layout>
    </Router>
  );
}

export default connect(state => {
  return { isAuthenticate: state.isAuthenticate };
})(App);
