function addItem(x, y, player) {
  return { type: "ADD_ITEM", x, y, player };
}

function resetHistory() {
  return { type: "RESET_HISTORY" };
}

function removeItem(index) {
  return { type: "REMOVE_ITEM", index };
}

module.exports = { addItem, resetHistory,removeItem };
