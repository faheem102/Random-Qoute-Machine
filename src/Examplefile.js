import React from "react";
// import { RandomQoutes } from "./Qoutes";
// import { ColorPicker } from "./Qoutes";
export const QouteGenerator = function (props) {
  return (
    <div>
      {/* // <div style={{ backgroundColor: ColorPicker() }}> */}

      <div className="bottom">
        <h1 className="heading">Favorite Qoute</h1>
        <p>{props.qoute}</p>
        <p>{props.author}</p>
      </div>
    </div>
  );
};
