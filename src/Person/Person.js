import React from 'react';
// import './Person.css'

const person = (props) => {

    return (
        <StyledDiv>
            <p onClick={props.callback}>I am {props.name}, I am {props.age} years old!!!</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changeCallback} value={props.name}></input>
        </StyledDiv>
    );
}

export default person;
