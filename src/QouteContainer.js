import React from "react";
import { ColorPicker } from "./Qoutes";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const QouteGenerator = function (props) {
  return (
    <div id="wrapper">
      <div className="qoute-box" style={{ backgroundColor: ColorPicker() }}>
        <p id="qoute">{props.qoute}</p>
        <p id="author">{props.author}</p>
      </div>
      <div id="buttons">
        <a href="twitter.com/intent/tweet">
          
        </a>
        <button id="new-qoute">New qoute</button>
      </div>
    </div>
  );
};
