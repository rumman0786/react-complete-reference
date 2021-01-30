import React, {Component} from 'react';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types'
import classes from './Person.css'
import AuthContext from '../../../context/auth-context'

class Person extends Component {

    // constructor(props) {
    //     super(props);
    //     this.inputElementRef = React.createRef();
    // }

    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Person.js] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Person.js] shouldComponentUpdate');
        return true;
    }

    componentDidMount() {
        this.inputElement.focus();
        // this.inputElementRef.current.focus();
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
                <AuthContext>
                    {(context) => context.authenticated ? <p>Authenticated User!</p> : <p>Please Login</p>}
                </AuthContext>
                <p onClick={this.props.callback}>
                    I am {this.props.name}, I am {this.props.age} years old!!!
                </p>
                <p key='i2'>{this.props.children}</p>
                    <input key='i3' 
                            type='text' 
                            ref={(inputEl) => {this.inputElement = inputEl}}
                            // ref={this.inputElementRef}
                            onChange={this.props.changeCallback} 
                            value={this.props.name}>
                </input>
            </Aux>
        );
    }
}

Person.propTypes = {
    callback: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changeCallback: PropTypes.func
}

export default withClass(Person, classes.Person);
