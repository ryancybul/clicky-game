import React from "react";
import "../Styles/Header.css";

const Header = (props) => (
  <div className="headerWrapper">
    <ul>
      <li className="title">
        <a href="/clicky-game/">{props.title}</a>
      </li>

      <li id="item-1">{props.correctIncorrect}</li>

      <li id="item-2">Score: {props.score}</li>

      <li id="item-3">Top Score: {props.topScore}</li>
    </ul>
    <div className="titleWrapper">
      <h2>Try to click each character without clicky any single one twice</h2>
    </div>
  </div>
);

export default Header;
