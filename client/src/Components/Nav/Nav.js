import React from "react";
import "./Nav.css";

const Nav = props => (
    <nav>
        <ul>
            <li className="title">
                <a href="/clicky-game/">{props.title}</a>
            </li>

            <li id="cor-inc">{props.corrrectIncorrect}</li>

            <li id="">Score: {props.score}</li>
            
            <li id="">Top Score: {props.topScore}</li>
        </ul>
    </nav>
);

export default Nav;