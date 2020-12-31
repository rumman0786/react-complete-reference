import React from 'react';
import Radium from 'radium'

import './Person.css'

const person = (props) => {
    const jsxStyle = {
        '@media(min-width: 500px)' : {
            width: '450px'
        }
    }
    return (
        <div className='Person' style={jsxStyle}>
            <p onClick={props.callback}>I am {props.name}, I am {props.age} years old!!!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changeCallback} value={props.name}></input>
        </div>
    );
}

export default Radium(person);
