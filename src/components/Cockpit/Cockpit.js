import React from 'react'

import classes from './Cockpit.css'

const Cockpit = (props) => {
    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red;
    }

    const assignedClasses = [];

    if(props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if(props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>Does this work???</p>
            <button className={btnClass} onClick={props.clicked}>Switch Visibility</button>
        </div>
    );
};

export default Cockpit;
