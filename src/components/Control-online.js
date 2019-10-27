import React from "react";

import Button from "./Button";

export default function Control({ resetGame, undoGame }) {
  const reset = () => {
    resetGame();
  };

  const undo = () => {
    undoGame();
  };

  return (
    <>
      <Button name="Reset" handleClick={reset} />
      <Button name="Undo" handleClick={undo} />
    </>
  );
}
