import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.callback}>I am {props.name}, I am {props.age} years old!!!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changeCallback} value={props.name}></input>
        </div>
    );
}

export default person;