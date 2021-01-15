import React, {Component} from 'react';
import Person from './Person/Person'

class Persons extends Component {


    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        if(nextProps.persons !== this.props.persons) {
            return true;
        }

        return false;
    }

    getSnapshotBeforeUpdate(nextProps, nextState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'She always was'};
    }

    // componentWillUpdate(props) {
    // }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }
    
    componentDidUpdate(nextProps, nextState, snapshot) {
        console.log('[Persons.js] componentDidUpdate', snapshot);
    }

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
