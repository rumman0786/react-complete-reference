import React from 'react';
import classes from './Person.css'

const person = (props) => {

    const randVal = Math.random();
    if(randVal > 0.7) {
        throw new Error('Something went wrong');
    }

    return (
        <div className={classes.Person}>
            <p onClick={props.callback}>I am {props.name}, I am {props.age} years old!!!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changeCallback} value={props.name}></input>
        </div>
    );
}

export default person;
