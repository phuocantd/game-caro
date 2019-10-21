import React from 'react';
import Square from './Square';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    const { size } = this.props;
    this.state = {
      square: Array(size)
        .fill(null)
        .map(() => Array(size).fill(null)),
      classNames: new Array(size)
        .fill(null)
        .map(() =>
          new Array(size)
            .fill(null)
            .map(() => ({ isDark: false, isWin: false, isList: false }))
        ),
      xIsNext: true,
      status: 'Next player: X',
      isWinner: false,
      preRowDark: { x: 0, y: 0 },
      historys: [],
      isForward: true,
      stepCurrent: 0
    };
    this.checkRow = this.checkRow.bind(this);
    this.checkCol = this.checkCol.bind(this);
    this.checkSlash = this.checkSlash.bind(this);
    this.checkBackSlash = this.checkBackSlash.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.reverseArray = this.reverseArray.bind(this);
    this.renderSquare = this.renderSquare.bind(this);
    this.getArray = this.getArray.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.clickList = this.clickList.bind(this);
  }

  getArray(number) {
    let count = 0;
    const arr = [];
    let arrTmp = [];

    arrTmp.push(
      <button type='button' className='square' key={0}>
        {}
      </button>
    );
    for (let i = 0; i < number; i += 1) {
      arrTmp.push(
        <button type='button' className='square' key={i + 1}>
          {String.fromCharCode(i + 65)}
        </button>
      );
    }
    arr.push(arrTmp);

    for (let i = 0; i < number; i += 1) {
      arrTmp = [];
      arrTmp.push(
        <button type='button' className='square' key={-1}>
          {i + 1}
        </button>
      );
      for (let j = 0; j < number; j += 1) {
        arrTmp.push(this.renderSquare(count));
        count += 1;
      }
      arr.push(
        <div className="board-row" key={i}>
          {arrTmp}
        </div>
      );
    }

    return arr;
  }

  reverseArray = () => {
    const { historys, isForward } = this.state;
    const history = historys.slice();
    historys.reverse();
    this.setState({
      historys: [...history],
      isForward: !isForward
    });
    if (isForward) {
      this.clickList(0);
    } else {
      this.clickList(history.length - 1);
    }
  };

  checkRow(i) {
    const { size } = this.props;
    const { square } = this.state;
    let block = 0;
    let count = 1;
    const row = Math.floor(i / size);
    const col = i % size;
    const squares = square.slice();
    let k = col + 1;

    if (squares[row][k] !== squares[row][col] && squares[row][k] !== null) {
      block += 1;
    }
    while (squares[row][k] === squares[row][col] && k < size) {
      count += 1;
      k += 1;
      if (squares[row][k] !== squares[row][col] && squares[row][k] !== null) {
        block += 1;
        break;
      }
    }
    k = col - 1;
    if (squares[row][k] !== squares[row][col] && squares[row][k] !== null) {
      block += 1;
    }
    while (squares[row][k] === squares[row][col] && k >= 0) {
      count += 1;
      k -= 1;
      if (squares[row][k] !== squares[row][col] && squares[row][k] !== null) {
        block += 1;
        break;
      }
    }
    if (block < 2 && count === 5) {
      return { player: squares[row][col], type: 0 };
    }
    return null;
  }

  checkCol(i) {
    const { size } = this.props;
    const { square } = this.state;
    let block = 0;
    let count = 1;
    const row = Math.floor(i / size);
    const col = i % size;
    const squares = square.slice();
    let k = row + 1;
    if (
      k < size &&
      squares[k][col] !== squares[row][col] &&
      squares[k][col] !== null
    ) {
      block += 1;
    }
    while (k < size && squares[k][col] === squares[row][col]) {
      count += 1;
      k += 1;
      if (
        k < size &&
        squares[k][col] !== squares[row][col] &&
        squares[k][col] !== null
      ) {
        block += 1;
        break;
      }
    }
    k = row - 1;
    if (
      k >= 0 &&
      squares[k][col] !== squares[row][col] &&
      squares[k][col] !== null
    ) {
      block += 1;
    }
    while (k >= 0 && squares[k][col] === squares[row][col]) {
      count += 1;
      k -= 1;
      if (
        k >= 0 &&
        squares[k][col] !== squares[row][col] &&
        squares[k][col] !== null
      ) {
        block += 1;
        break;
      }
    }
    if (block < 2 && count === 5) {
      return { player: squares[row][col], type: 1 };
    }
    return null;
  }

  checkSlash(i) {
    const { size } = this.props;
    const { square } = this.state;
    let block = 0;
    let count = 1;
    const row = Math.floor(i / size);
    const col = i % size;
    const squares = square.slice();
    let r = row - 1;
    let c = col + 1;
    if (
      r >= 0 &&
      c < size &&
      squares[r][c] !== squares[row][col] &&
      squares[r][c] !== null
    ) {
      block += 1;
    }
    while (r >= 0 && c < size && squares[r][c] === squares[row][col]) {
      count += 1;
      r -= 1;
      c += 1;
      if (
        r >= 0 &&
        c < size &&
        squares[r][c] !== squares[row][col] &&
        squares[r][c] !== null
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
      squares[r][c] !== squares[row][col] &&
      squares[r][c] !== null
    ) {
      block += 1;
    }
    while (r < size && c >= 0 && squares[r][c] === squares[row][col]) {
      count += 1;
      r += 1;
      c -= 1;
      if (
        r < size &&
        c >= 0 &&
        squares[r][c] !== squares[row][col] &&
        squares[r][c] !== null
      ) {
        block += 1;
        break;
      }
    }
    if (block < 2 && count === 5) {
      return { player: squares[row][col], type: 2 };
    }
    return null;
  }

  checkBackSlash(i) {
    const { size } = this.props;
    const { square } = this.state;
    let block = 0;
    let count = 1;
    const row = Math.floor(i / size);
    const col = i % size;
    const squares = square.slice();
    let r = row - 1;
    let c = col - 1;
    if (
      r >= 0 &&
      c >= 0 &&
      squares[r][c] !== squares[row][col] &&
      squares[r][c] !== null
    ) {
      block += 1;
    }
    while (r >= 0 && c >= 0 && squares[r][c] === squares[row][col]) {
      count += 1;
      r -= 1;
      c -= 1;
      if (
        r >= 0 &&
        c >= 0 &&
        squares[r][c] !== squares[row][col] &&
        squares[r][c] !== null
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
      squares[r][c] !== squares[row][col] &&
      squares[r][c] !== null
    ) {
      block += 1;
    }
    while (r < size && c < size && squares[r][c] === squares[row][col]) {
      count += 1;
      r += 1;
      c += 1;
      if (
        r < size &&
        c < size &&
        squares[r][c] !== squares[row][col] &&
        squares[r][c] !== null
      ) {
        block += 1;
        break;
      }
    }
    if (block < 2 && count === 5) {
      return { player: squares[row][col], type: 3 };
    }
    return null;
  }

  checkWinner(i) {
    let isWin = this.checkRow(i);
    if (isWin !== null) {
      return isWin;
    }
    isWin = this.checkCol(i);
    if (isWin !== null) {
      return isWin;
    }
    isWin = this.checkSlash(i);
    if (isWin !== null) {
      return isWin;
    }
    isWin = this.checkBackSlash(i);
    if (isWin !== null) {
      return isWin;
    }
    return null;
  }

  handleClick(i) {
    const { size } = this.props;
    const {
      square,
      classNames,
      historys,
      isWinner,
      isForward,
      xIsNext,
      stepCurrent,
      preRowDark
    } = this.state;
    const row = Math.floor(i / size);
    const col = i % size;
    let k = 0;
    let r = 0;
    let c = 0;
    const squares = square.slice();
    const className = classNames.slice();
    const history = historys.slice();
    let item = null;

    if (squares[row][col] || isWinner) {
      return;
    }

    if (isForward) {
      while (stepCurrent + 1 < history.length) {
        item = history.pop();
        squares[item.x][item.y] = false;
      }
    } else {
      for (let t = 0; t < stepCurrent; t += 1) {
        item = history.shift();
        squares[item.x][item.y] = false;
      }
    }

    if (isForward) {
      history.push({ x: row, y: col, player: xIsNext ? 'X' : 'O' });
      this.clickList(stepCurrent + 1);
    } else {
      history.unshift({
        x: row,
        y: col,
        player: xIsNext ? 'X' : 'O'
      });
      this.clickList(0);
    }
    this.setState({
      historys: [...history]
    });

    className[preRowDark.x][preRowDark.y].isDark = false;
    className[row][col].isDark = true;

    squares[row][col] = xIsNext ? 'X' : 'O';
    this.setState({
      square: [...squares],
      xIsNext: !xIsNext
    });
    const winner = this.checkWinner(i);
    if (winner) {
      className[row][col].isDark = false;
      this.setState({
        status: `Winner: ${winner.player}`,
        isWinner: true
      });
      className[row][col].isWin = true;
      switch (winner.type) {
        case 0:
          k = col - 1;
          while (squares[row][k] === squares[row][col] && k < size) {
            className[row][k].isWin = true;
            k += 1;
          }
          k = col - 1;
          while (squares[row][k] === squares[row][col] && k >= 0) {
            className[row][k].isWin = true;
            k -= 1;
          }
          break;
        case 1:
          k = row + 1;
          while (k < size && squares[k][col] === squares[row][col]) {
            className[k][col].isWin = true;
            k += 1;
          }
          k = row - 1;
          while (k >= 0 && squares[k][col] === squares[row][col]) {
            className[k][col].isWin = true;
            k -= 1;
          }
          break;
        case 2:
          r = row - 1;
          c = col + 1;
          while (r >= 0 && c < size && squares[r][c] === squares[row][col]) {
            className[r][c].isWin = true;
            r -= 1;
            c += 1;
          }
          r = row + 1;
          c = col - 1;
          while (r < size && c >= 0 && squares[r][c] === squares[row][col]) {
            className[r][c].isWin = true;
            r += 1;
            c -= 1;
          }
          break;
        case 3:
          r = row - 1;
          c = col - 1;
          while (r >= 0 && c >= 0 && squares[r][c] === squares[row][col]) {
            className[r][c].isWin = true;
            r -= 1;
            c -= 1;
          }
          r = row + 1;
          c = col + 1;
          while (r < size && c < size && squares[r][c] === squares[row][col]) {
            className[r][c].isWin = true;
            r += 1;
            c += 1;
          }
          break;
        default:
          break;
      }
    } else {
      this.setState({
        status: `Next player: ${xIsNext ? 'O' : 'X'}`,
        classNames: [...className],
        preRowDark: { x: row, y: col }
      });
    }
  }

  clickList(idx) {
    const { stepCurrent, historys, classNames } = this.state;
    const { size } = this.props;
    const className = classNames.slice();
    if (historys.length === 0) {
      return;
    }
    let row = Math.floor(stepCurrent / size);
    let col = stepCurrent % size;
    if (stepCurrent >= 0) {
      className[row][col].isList = false;
    }
    row = Math.floor(idx / size);
    col = idx % size;
    className[row][col].isList = true;
    this.setState({
      stepCurrent: idx,
      classNames: [...className]
    });
  }

  resetGame() {
    const { size } = this.props;
    this.setState({
      square: Array(size)
        .fill(null)
        .map(() => Array(size).fill(null)),
      classNames: new Array(size)
        .fill(null)
        .map(() =>
          new Array(size)
            .fill(null)
            .map(() => ({ isDark: false, isWin: false, isList: false }))
        ),
      xIsNext: true,
      status: 'Next player: X',
      isWinner: false,
      preRowDark: { x: 0, y: 0 },
      historys: [],
      stepCurrent: 0
    });
  }

  renderSquare(i) {
    const { square, classNames } = this.state;
    const { size } = this.props;

    const row = Math.floor(i / size);
    const col = i % size;
    return (
      <Square
        value={square[row][col]}
        onClick={() => this.handleClick(i)}
        key={i}
        curClick={classNames[row][col].isDark}
        isWin={classNames[row][col].isWin}
      />
    );
  }

  render() {
    const { size } = this.props;
    const { status, historys, classNames } = this.state;
    // console.log(historys)
    return (
      <div className="game">
        <div className="game-board">
          <button
            className="btn-reset"
            type="button"
            onClick={() => this.resetGame()}
          >
            Reset
          </button>
          <div className="status">{status}</div>
          {this.getArray(size)}
        </div>
        <div className="game-info">
          <button
            type="button"
            className="btn-history"
            onClick={this.reverseArray}
          >
            History
          </button>
          {historys.map((item, idx) => {
            return (
              <ol key={item.x * size + item.y}>
                <button
                  type="button"
                  className={`btn-list ${
                    classNames[Math.floor(idx / size)][idx % size].isList
                      ? 'btn-list-clicked'
                      : ''
                  }`}
                  onClick={() => this.clickList(idx)}
                >
                  <span>
                    {`Player ${item.player}: [${item.x +
                      1}, ${String.fromCharCode(item.y + 65)}]`}
                  </span>
                </button>
              </ol>
            );
          })}
        </div>
      </div>
    );
  }
}
