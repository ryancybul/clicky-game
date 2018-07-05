import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav>
        <ul>
            <li className="title">
                <a href="/clicky-game/">{props.title}</a>
            </li>

            <li id="item-1">{props.correctIncorrect}</li>

            <li id="item-2">Score: {props.score}</li>
            
            <li id="item-3">Top Score: {props.topScore}</li>
        </ul>
    </nav>
);

export default Nav;