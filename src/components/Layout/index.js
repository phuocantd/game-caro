import React from "react";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "antd/dist/antd.css";

import "./index.css";

const { Header, Content, Footer } = Layout;

function App({ children }) {
    const defaultSelectedKey = () => {
        const url = window.location.href.split('/')
        switch (url.pop()) {
            case '':
                return 1
            case 'login':
                return 2
            case 'register':
                return 3
            case 'game':
                return 4
            default:
                return 2
        }
    }
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

export default App;
