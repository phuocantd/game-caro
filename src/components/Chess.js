/* eslint-disable react/jsx-no-bind */
import React from "react";
import { Layout } from "antd";
import "antd/dist/antd.css";

import Board from "./Board";
import Control from "./Control-online";

const { Header, Footer, Sider, Content } = Layout;

export default class Chess extends React.Component {
  constructor(props) {
    super(props);
    const { size } = this.props;
    this.state = {
      square: new Array(size)
        .fill(null)
        .map(() =>
          new Array(size)
            .fill(null)
            .map(() => ({ value: null, isDark: false, isWin: false }))
        ),
      xIsNext: true,
      status: "Next player: X",
      isWinner: false,
      preRowDark: { x: 0, y: 0 },
      historys: []
    };
  }

  checkRow(row, col) {
    const { size } = this.props;
    const { square } = this.state;
    let block = 0;
    let count = 1;

    // kiểm tra phải
    let k = col + 1;
    while (k < size && square[row][k].value === square[row][col].value) {
      count += 1;
      if (
        square[row][k].value !== null &&
        square[row][k].value !== square[row][col].value
      ) {
        block += 1;
        break;
      }
      k += 1;
    }

    // kiểm tra trái
    k = col - 1;
    while (k >= 0 && square[row][k].value === square[row][col].value) {
      count += 1;

      if (
        square[row][k].value !== null &&
        square[row][k].value !== square[row][col].value
      ) {
        block += 1;
        break;
      }
      k -= 1;
    }
    if (block < 2 && count === 5) {
      return { player: square[row][col].value, type: 0 };
    }
    return null;
  }

  checkCol(row, col) {
    const { size } = this.props;
    const { square } = this.state;
    let block = 0;
    let count = 1;

    // kiểm tra trên
    let k = row + 1;

    while (k < size && square[k][col].value === square[row][col].value) {
      count += 1;
      if (
        k + 1 < size &&
        square[k][col].value !== null &&
        square[k][col].value !== square[row][col].value
      ) {
        block += 1;
        break;
      }
      k += 1;
    }

    // kiểm tra dưới
    k = row - 1;
    while (k >= 0 && square[k][col].value === square[row][col].value) {
      count += 1;
      if (
        k >= 1 &&
        square[k][col].value !== null &&
        square[k][col].value !== square[row][col].value
      ) {
        block += 1;
        break;
      }
      k -= 1;
    }
    if (block < 2 && count === 5) {
      return { player: square[row][col].value, type: 1 };
    }
    return null;
  }

  checkSlash(row, col) {
    const { size } = this.props;
    const { square } = this.state;
    let block = 0;
    let count = 1;
    let r = row - 1;
    let c = col + 1;
    if (
      r >= 0 &&
      c < size &&
      square[r][c].value !== null &&
      square[r][c].value !== square[row][col].value
    ) {
      block += 1;
    }
    while (
      r >= 0 &&
      c < size &&
      square[r][c].value === square[row][col].value
    ) {
      count += 1;
      r -= 1;
      c += 1;
      if (
        r >= 0 &&
        c < size &&
        square[r][c].value !== null &&
        square[r][c].value !== square[row][col].value
      ) {
        block += 1;
        break;
      }
    }
    r = row + 1;
    c = col - 1;
    if (
      r < size &&
      c >= 0 &&
      square[r][c].value !== null &&
      square[r][c].value !== square[row][col].value
    ) {
      block += 1;
    }
    while (
      r < size &&
      c >= 0 &&
      square[r][c].value === square[row][col].value
    ) {
      count += 1;
      r += 1;
      c -= 1;
      if (
        r < size &&
        c >= 0 &&
        square[r][c].value !== square[row][col].value &&
        square[r][c].value !== null
      ) {
        block += 1;
        break;
      }
    }
    if (block < 2 && count === 5) {
      return { player: square[row][col].value, type: 2 };
    }
    return null;
  }

  checkBackSlash(row, col) {
    const { size } = this.props;
    const { square } = this.state;
    let block = 0;
    let count = 1;
    let r = row - 1;
    let c = col - 1;
    if (
      r >= 0 &&
      c >= 0 &&
      square[r][c].value !== null &&
      square[r][c].value !== square[row][col].value
    ) {
      block += 1;
    }
    while (r >= 0 && c >= 0 && square[r][c].value === square[row][col].value) {
      count += 1;
      r -= 1;
      c -= 1;
      if (
        r >= 0 &&
        c >= 0 &&
        square[r][c].value !== null &&
        square[r][c].value !== square[row][col].value
      ) {
        block += 1;
        break;
      }
    }
    r = row + 1;
    c = col + 1;
    if (
      r < size &&
      c < size &&
      square[r][c].value !== null &&
      square[r][c].value !== square[row][col].value
    ) {
      block += 1;
    }
    while (
      r < size &&
      c < size &&
      square[r][c].value === square[row][col].value
    ) {
      count += 1;
      r += 1;
      c += 1;
      if (
        r < size &&
        c < size &&
        square[r][c].value !== null &&
        square[r][c].value !== square[row][col].value
      ) {
        block += 1;
        break;
      }
    }
    if (block < 2 && count === 5) {
      return { player: square[row][col].value, type: 3 };
    }
    return null;
  }

  checkWinner(row, col) {
    let isWin = this.checkRow(row, col);
    if (isWin !== null) {
      return isWin;
    }
    isWin = this.checkCol(row, col);
    if (isWin !== null) {
      return isWin;
    }
    isWin = this.checkSlash(row, col);
    if (isWin !== null) {
      return isWin;
    }
    isWin = this.checkBackSlash(row, col);
    if (isWin !== null) {
      return isWin;
    }
    return null;
  }

  handleClick(row, col) {
    const { size } = this.props;
    const { square, xIsNext, isWinner, preRowDark, historys } = this.state;

    let k = 0;
    let r = 0;
    let c = 0;
    const newSquare = square.slice();
    const newHistorys = historys.slice();

    if (newSquare[row][col].value || isWinner) {
      return;
    }

    // thêm lịch sử bước đi
    newHistorys.push({ x: row, y: col, player: xIsNext ? "X" : "O" });

    // thay đổi vị trí đánh hiện tại
    newSquare[preRowDark.x][preRowDark.y].isDark = false;
    newSquare[row][col].isDark = true;

    newSquare[row][col].value = xIsNext ? "X" : "O";

    const winner = this.checkWinner(row, col);
    if (winner) {
      newSquare[row][col].isDark = false;
      newSquare[row][col].isWin = true;
      switch (winner.type) {
        case 0:
          k = col + 1;
          while (
            k < size &&
            newSquare[row][k].value === newSquare[row][col].value
          ) {
            newSquare[row][k].isWin = true;
            k += 1;
          }
          k = col - 1;
          while (
            k >= 0 &&
            newSquare[row][k].value === newSquare[row][col].value
          ) {
            newSquare[row][k].isWin = true;
            k -= 1;
          }
          break;
        case 1:
          k = row + 1;
          while (
            k < size &&
            newSquare[k][col].value === newSquare[row][col].value
          ) {
            newSquare[k][col].isWin = true;
            k += 1;
          }
          k = row - 1;
          while (
            k >= 0 &&
            newSquare[k][col].value === newSquare[row][col].value
          ) {
            newSquare[k][col].isWin = true;
            k -= 1;
          }
          break;
        case 2:
          r = row - 1;
          c = col + 1;
          while (
            r >= 0 &&
            c < size &&
            newSquare[r][c].value === newSquare[row][col].value
          ) {
            newSquare[r][c].isWin = true;
            r -= 1;
            c += 1;
          }
          r = row + 1;
          c = col - 1;
          while (
            r < size &&
            c >= 0 &&
            newSquare[r][c].value === newSquare[row][col].value
          ) {
            newSquare[r][c].isWin = true;
            r += 1;
            c -= 1;
          }
          break;
        case 3:
          r = row - 1;
          c = col - 1;
          while (
            r >= 0 &&
            c >= 0 &&
            newSquare[r][c].value === newSquare[row][col].value
          ) {
            newSquare[r][c].isWin = true;
            r -= 1;
            c -= 1;
          }
          r = row + 1;
          c = col + 1;
          while (
            r < size &&
            c < size &&
            newSquare[r][c].value === newSquare[row][col].value
          ) {
            newSquare[r][c].isWin = true;
            r += 1;
            c += 1;
          }
          break;
        default:
          break;
      }
      this.setState({
        status: `Winner: ${winner.player}`,
        isWinner: true
      });
    } else {
      this.setState({
        status: `Next player: ${xIsNext ? "O" : "X"}`,
        preRowDark: { x: row, y: col }
      });
    }
    this.setState({
      square: [...newSquare],
      xIsNext: !xIsNext,
      historys: [...newHistorys]
    });
  }

  undoGame() {
    const { historys, square, xIsNext } = this.state;
    const newHistorys = historys.slice();
    const newSquare = square.slice();
    if (historys.length === 0) {
      return;
    }
    const current = newHistorys.pop();
    const last =
      newHistorys.length === 0
        ? { x: 0, y: 0 }
        : {
            x: newHistorys[newHistorys.length - 1].x,
            y: newHistorys[newHistorys.length - 1].y
          };
    newSquare[current.x][current.y].value = null;
    newSquare[current.x][current.y].isDark = false;
    if (newHistorys.length > 0) {
      newSquare[last.x][last.y].isDark = true;
    }

    this.setState({
      historys: [...newHistorys],
      square: [...newSquare],
      status: `Next player: ${xIsNext ? "O" : "X"}`,
      preRowDark: last,
      xIsNext: !xIsNext
    });
  }

  resetGame() {
    const { size } = this.props;
    this.setState({
      square: new Array(size)
        .fill(null)
        .map(() =>
          new Array(size)
            .fill(null)
            .map(() => ({ value: null, isDark: false, isWin: false }))
        ),
      xIsNext: true,
      status: "Next player: X",
      isWinner: false,
      preRowDark: { x: 0, y: 0 },
      historys: []
    });
  }

  render() {
    const { size } = this.props;
    const { status, square } = this.state;
    return (
      <div>
        <Layout>
          <Header style={{ background: "red" }}>
            <div className="status">{status}</div>
          </Header>
          <Layout>
            <Content>
              <Board
                size={size}
                square={square}
                handleClick={this.handleClick.bind(this)}
              />
            </Content>
            <Sider width={400}>
              <center>
                <Control
                  resetGame={this.resetGame.bind(this)}
                  undoGame={this.undoGame.bind(this)}
                />
              </center>
            </Sider>
          </Layout>
          <Footer>Coppyright by phuocantd</Footer>
        </Layout>
      </div>
    );
  }
}
