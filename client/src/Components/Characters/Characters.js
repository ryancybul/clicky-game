import React from 'react';
import "./Characters.css";

const Characters = props => (
    <div className="charCard" 
    value={props.id}
    onClick={() => props.handleClick(props.id)}
    >
        <div className="img-container">
            <img src={props.image}/>
        </div>
    </div>
)

export default Characters;