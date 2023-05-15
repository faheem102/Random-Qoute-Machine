import React from "react";
import { RandomQoutes } from "./Qoutes";
import { ColorPicker } from "./Qoutes";
export const MyComponent = function (props) {
  return (
    <div className="my-component" style={{ backgroundColor: ColorPicker() }}>
      <h1>"Hello World!"</h1>
      <p>"The Current Date is: {props.date}</p>
      <RandomQoutes />
    </div>
  );
};
