import React from 'react';
import './Title.css';

const Title = props => (
    <div className='titleWrapper'>
        <h2 className="title">{props.children}</h2>
    </div>
); 


export default Title;