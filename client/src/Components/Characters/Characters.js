import React from 'react';
import "./Characters.css";

const Characters = props => {
    <div classname="charCßard" value={props.id} 
    // onClick={() => handleClick(props.id)}
    >
        <div className="img-container">
            <img alt={props.name} src={props.image}/>
        </div>
    </div>
}

export default Characters;