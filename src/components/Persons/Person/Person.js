import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from './Person.css'

class Person extends Component {

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Person.js] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Person.js] shouldComponentUpdate');
        return true;
    }

    // componentWillReceiveProps(props) {
    //     console.log('[Person.js] componentWillReceiveProps');
    //     console.log('[Person.js] won\'t get called as deprecated');
    //     console.log('[Person.js] use getSnapshotBeforeUpdate instead!');
    // }

    getSnapshotBeforeUpdate(nextProps, nextState) {
        console.log('[Person.js] getSnapshotBeforeUpdate');
        return {message: 'She always was'};
    }

    // componentWillUpdate(props) {
    //     console.log('[Person.js] componentWillUpdate');
    //     console.log('[Person.js] won\'t get called as deprecated');
    //     console.log('[Person.js] used to be called before componentDidUpdate!');
    // }

    componentDidUpdate(nextProps, nextState, snapshot) {
        console.log('[Person.js] componentDidUpdate', snapshot);
    }

    render(){
        console.log('[Person.js] rendering');

        return (
            <Aux>
                <p onClick={this.props.callback}>I am {this.props.name}, I am {this.props.age} years old!!!</p>
                <p>{this.props.children}</p>
                <input type='text' onChange={this.props.changeCallback} value={this.props.name}></input>
            </Aux>
        );
    }
}

export default withClass(Person, classes.Person);
