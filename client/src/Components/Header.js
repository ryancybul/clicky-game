import React from "react";
import "../Styles/Header.css";

const Header = (props) => (
  <div className="headerWrapper">
    <div className="titleWrapper">
      <h1 href="/clicky-game/">{props.title}</h1>
      <div className="scoreBoard">
        <p id="item-2">Score: {props.score}</p>
        <p id="item-3">Top Score: {props.topScore}</p>
      </div>
    </div>
    <div className="instructionsWrapper">
      {/* <p id="item-1">{props.correctIncorrect}</p> */}
      <h2>{props.correctIncorrect}</h2>
    </div>
  </div>
);

export default Header;
