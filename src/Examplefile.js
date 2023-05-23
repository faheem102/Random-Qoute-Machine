import React from "react";
import { RandomQoutes } from "./Qoutes";
import { ColorPicker } from "./Qoutes";
export const MyComponent = function (props) {
  return (
    <div style={{ backgroundColor: ColorPicker() }}>
      <div className="top">
        <h1 className="heading">Current Time</h1>
        <p>"The Current Date is: {props.date}</p>
      </div>
      <div className="bottom">
        <h1 className="heading">Favorite Qoute</h1>
        <RandomQoutes />
      </div>
    </div>
  );
};
