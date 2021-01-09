import React from 'react';
import Person from './Person/Person'

const Persons = (props) => {
    console.log('[Persons.js] render');

    return props.persons.map(
        (person, index) => {
            return <Person
                callback={() => props.clicked(index)}
                changeCallback={(event) => props.changed(event, person.id)}
                key={person.id}
                name={person.name}
                age={person.age}/>
        }
    )
};

export default Persons;
