import React from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import "antd/dist/antd.css";

import Board from "./Board";
import Control from "./Control-online";

const { Header, Footer, Sider, Content } = Layout;

function Chess({ status }) {

  return (
    <div>
      <Layout>
        <Header>
          <div className="status">{status}</div>
        </Header>
        <Layout>
          <Content className="light">
            <center>
              <Board />
            </center>
          </Content>
          <Sider width={400} className="light">
            <center>
              <Control />
            </center>
          </Sider>
        </Layout>
        <Footer>Coppyright by phuocantd</Footer>
      </Layout>
    </div>
  );
}

export default connect(state => {
  return { status: state.status };
})(Chess);
