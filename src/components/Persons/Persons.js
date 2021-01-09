import React, {Component} from 'react';
import Person from './Person/Person'

class Persons extends Component {

    render() {
        console.log('[Persons.js] render');

        return this.props.persons.map(
            (person, index) => {
                return <Person
                    callback={() => this.props.clicked(index)}
                    changeCallback={(event) => this.props.changed(event, person.id)}
                    key={person.id}
                    name={person.name}
                    age={person.age}/>
            }
        );
    }
}

export default Persons;
