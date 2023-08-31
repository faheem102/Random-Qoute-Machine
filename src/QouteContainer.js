import React from "react";
import { ColorPicker } from "./Qoutes";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaTwitter } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";

export const QouteGenerator = function (props) {
  return (
    <div id="wrapper">
      <div className="qoute-box">
        <FaQuoteLeft />
        <p id="qoute">{props.qoute}</p>
        <p id="author">- {props.author}</p>
        <div id="buttons">
          <a class="link-button" href="twitter.com/intent/tweet">
            <FaTwitter />
          </a>
          <button id="new-qoute">New qoute</button>
        </div>
      </div>
    </div>
  );
};
