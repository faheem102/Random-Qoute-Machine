import React from "react";
import { ColorPicker } from "./Qoutes";
export const QouteGenerator = function (props) {
  return (
    <div>
      <div
        className="qoute-container"
        style={{ backgroundColor: ColorPicker() }}
      >
        <h1 className="heading">Favorite Qoute</h1>
        <p>{props.qoute}</p>
        <p>{props.author}</p>
      </div>
    </div>
  );
};
