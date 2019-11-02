/* eslint-disable no-await-in-loop */
import React from "react";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import { List, message, Avatar, Button } from "antd";
import InfiniteScroll from "react-infinite-scroller";

import "./index.css";
import {
  changeStatus,
  changePreRowDark,
  changeXIsNext
} from "../../actions/Basic";
import { changeSquareValue, changeSquareIsDark } from "../../actions/Square";
import { removeItem } from "../../actions/History";

class InfiniteListExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      hasMore: true
    };
  }

  componentDidMount() {
    this.fetchData(res => {
      this.setState({
        data: res.results
      });
    });
  }

  fetchData = () => {};

  handleInfiniteOnLoad = () => {
    let { data } = this.state;
    this.setState({
      loading: true
    });
    if (data.length > 14) {
      message.warning("Infinite List loaded all");
      this.setState({
        hasMore: false,
        loading: false
      });
      return;
    }
    this.fetchData(res => {
      data = data.concat(res.results);
      this.setState({
        data,
        loading: false
      });
    });
  };

  undo = () => {
    const { history, dispatch, isWinner, xIsNext } = this.props;
    const len = history.length;
    if (len === 0 || isWinner) {
      return;
    }

    dispatch(changeXIsNext(!xIsNext));
    dispatch(changeSquareValue(history[len - 1].x, history[len - 1].y, null));
    dispatch(changeSquareIsDark(history[len - 1].x, history[len - 1].y, false));
    if (len - 2 >= 0) {
      dispatch(
        changeSquareIsDark(history[len - 2].x, history[len - 2].y, true)
      );
      dispatch(changePreRowDark(history[len - 2].x, history[len - 2].y));
      dispatch(changeStatus(`Next player: ${history[len - 2].player}`));
    } else {
      dispatch(changeStatus(`Next player: X`));
    }
    dispatch(removeItem(len - 1));
  };

  setCurrent = async idx => {
    const { history, isWinner } = this.props;
    const len = history.length;
    if (len === 0 || isWinner) {
      return;
    }
    for (let i = idx + 1; i < len; i += 1) {
      await this.undo();
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
          loadMore={this.handleInfiniteOnLoad}
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
