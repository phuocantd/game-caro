/* eslint-disable no-await-in-loop */
import React from "react";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import { List, Avatar, Button } from "antd";
import InfiniteScroll from "react-infinite-scroller";

import "./index.css";
import { undo } from "../../_function/Control";

class InfiniteListExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      hasMore: true
    };
  }

  setCurrent = async idx => {
    const { history, isWinner } = this.props;
    const len = history.length;
    if (len === 0 || isWinner) {
      return;
    }
    for (let i = idx + 1; i < len; i += 1) {
      await undo();
    }
  };

  render() {
    const { history, mode } = this.props;
    const { loading, hasMore } = this.state;
    return (
      <div className="demo-infinite-container">
        <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          hasMore={!loading && hasMore}
          useWindow={false}
        >
          <List
            dataSource={history}
            renderItem={(item, idx) => (
              <List.Item key={item.x * 20 + item.y}>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={
                    <div>
                      {mode === 1 && item.player === "O" ? "Player: you" : ""}
                      {mode === 1 && item.player === "X"
                        ? "Player: computer"
                        : ""}
                    </div>
                  }
                  description={`Vị trí (${item.x + 1}, ${String.fromCharCode(
                    item.y + 65
                  )})`}
                />
                <div>
                  <Button type="primary" onClick={() => this.setCurrent(idx)}>
                    jump at
                  </Button>
                </div>
              </List.Item>
            )}
          />
        </InfiniteScroll>
      </div>
    );
  }
}

export default connect(state => {
  return {
    history: state.history,
    isWinner: state.isWinner,
    xIsNext: state.xIsNext
  };
})(InfiniteListExample);
