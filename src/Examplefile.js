import React from "react";
export const MyComponent = function (props) {
  return (
    <div className="my-component">
      <h1>"Hello World!"</h1>
      <p>"The Current Date is: {props.date}</p>
    </div>
  );
};
