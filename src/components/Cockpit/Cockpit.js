import React, { useEffect } from 'react'

import classes from './Cockpit.css'

const Cockpit = (props) => {

    /*
    * useEffect with no second param will act like componentDidMount + componentDidUpdate
    * useEffect with `[]` as second param will act like componentDidMount
    * useEffect with `[a,b,c]` as second param will trigger on mount + state changes of a, b, c.
    */ 
    useEffect(() =>  {
      console.log('[Cockpit.js] useEffect');
      // HTTP request can be made...

      setTimeout(() => {
         alert("Triggered useEffect");
      }, 1000);

      return () => {
        console.log('[Cockpit.js] useEffect cleanup');
      }
    }, []);

    // useEffect can be defined multiple times.
    useEffect(() =>  {
      console.log('[Cockpit.js] useEffect 2');
      return () => {
        console.log('[Cockpit.js] useEffect 2 cleanup');
      }
    });

    let btnClass = '';
    if(props.showPersons) {
        btnClass = classes.Red;
    }

    const assignedClasses = [];

    if(props.personsLength <= 2) {
      assignedClasses.push(classes.red);
    }

    if(props.personsLength <= 1) {
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

export default React.memo(Cockpit);
