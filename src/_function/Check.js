import store from "../store";

const checkRow = (row, col) => {
  const { square } = store.getState();
  const size = 20;
  let block = 0;
  let count = 1;
  // kiểm tra phải
  let k = col + 1;
  if (
    k < size &&
    square[row][k].value !== null &&
    square[row][k].value !== square[row][col].value
  ) {
    block += 1;
  } else {
    while (k < size && square[row][k].value === square[row][col].value) {
      count += 1;
      k += 1;
      if (
        k < size &&
        square[row][k].value !== null &&
        square[row][k].value !== square[row][col].value
      ) {
        block += 1;
        break;
      }
    }
  }

  // kiểm tra trái
  k = col - 1;
  if (
    k >= 0 &&
    square[row][k].value !== null &&
    square[row][k].value !== square[row][col].value
  ) {
    block += 1;
  } else {
    while (k >= 0 && square[row][k].value === square[row][col].value) {
      count += 1;
      k -= 1;
      if (
        k >= 0 &&
        square[row][k].value !== null &&
        square[row][k].value !== square[row][col].value
      ) {
        block += 1;
        break;
      }
    }
  }
  if (block < 2 && count === 5) {
    return { player: square[row][col].value, type: 0 };
  }
  return null;
};

const checkCol = (row, col) => {
  const { square } = store.getState();
  const size = 20;
  let block = 0;
  let count = 1;

  // kiểm tra trên
  let k = row + 1;
  if (
    k < size &&
    square[k][col].value !== null &&
    square[k][col].value !== square[row][col].value
  ) {
    block += 1;
  } else {
    while (k < size && square[k][col].value === square[row][col].value) {
      count += 1;
      k += 1;
      if (
        k < size &&
        square[k][col].value !== null &&
        square[k][col].value !== square[row][col].value
      ) {
        block += 1;
        break;
      }
    }
  }

  // kiểm tra dưới
  k = row - 1;
  if (
    k >= 0 &&
    square[k][col].value !== null &&
    square[k][col].value !== square[row][col].value
  ) {
    block += 1;
  } else {
    while (k >= 0 && square[k][col].value === square[row][col].value) {
      count += 1;
      k -= 1;
      if (
        k >= 0 &&
        square[k][col].value !== null &&
        square[k][col].value !== square[row][col].value
      ) {
        block += 1;
        break;
      }
    }
  }
  if (block < 2 && count === 5) {
    return { player: square[row][col].value, type: 1 };
  }
  return null;
};

const checkSlash = (row, col) => {
  const { square } = store.getState();
  const size = 20;
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
  } else {
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
  } else {
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
  }
  if (block < 2 && count === 5) {
    return { player: square[row][col].value, type: 2 };
  }
  return null;
};

const checkBackSlash = (row, col) => {
  const { square } = store.getState();
  const size = 20;
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
  } else {
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
  } else {
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
  }
  if (block < 2 && count === 5) {
    return { player: square[row][col].value, type: 3 };
  }
  return null;
};

const checkWinner = (row, col) => {
  let isWin = checkRow(row, col);
  if (isWin !== null) {
    return isWin;
  }
  isWin = checkCol(row, col);
  if (isWin !== null) {
    return isWin;
  }
  isWin = checkSlash(row, col);
  if (isWin !== null) {
    return isWin;
  }
  isWin = checkBackSlash(row, col);
  if (isWin !== null) {
    return isWin;
  }
  return null;
};

export default checkWinner;
