/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";

import './index.css'

export default function Cell({ name, handleClick }) {
  const clickButton = () => {
    handleClick();
  };

  return (
    <button type="button" className="btn-click" onClick={clickButton}>
      {name}
    </button>
  );
}
