import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context'

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      {id: 1, name: 'Rumman', age:30},
      {id: 2, name: 'Sabrina', age:25},
      {id: 3, name: 'Max', age:27},
    ],
    otherstate: "This is another prop",
    showPersons: false,
    showCockpit: true,
    nameChangeCounter: 0,
    isAuthenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js]componentDidUpdate');
  }

  switchNameHandler = (newName) => {
    // console.log('Clicked switch button');
    this.setState({
      persons: [
        {id: 1, name: newName, age:30},
        {id: 2, name: 'Sabrina', age:25},
        {id: 3, name: 'Max', age:35},
      ]
    });
  }

  nameChangedHandler = (event, personId) => {
    const personIndex = this.state.persons.findIndex(p => p.id === personId);
    const copySelectedPerson = {
      ...this.state.persons[personIndex]
    };

    copySelectedPerson.name = event.target.value;
    // older syntax
    // cons copySelectedPerson = Object.assign({}, this.state.persons[personIndex]);

    const copyPersons = [...this.state.persons];
    copyPersons[personIndex] = copySelectedPerson;

    this.setState((prevState, props) => {
      return {
        persons: copyPersons,
        nameChangeCounter: prevState.nameChangeCounter+1
      }
    });
  }

  togglePersonsHandler = () => {
    const currentVisibility = this.state.showPersons;
    this.setState({showPersons: !currentVisibility});
  }

  deletePersonsHandler = (personIndex) => {
    // make copy of array instead of referece
    // old way to copy array
    // const modifiablePersons = this.state.persons.splice();
    const modifiablePersons = [...this.state.persons];
    modifiablePersons.splice(personIndex, 1);
    this.setState({persons: modifiablePersons});
  }

  loginHandler = () => {
    this.setState({isAuthenticated: true});
  }

  render() {
    console.log('[App.js] render');

    let persons = null;
    
    if(this.state.showPersons) {
      persons = <Persons 
                  persons={this.state.persons}
                  clicked={this.deletePersonsHandler}
                  changed={this.nameChangedHandler}
                  isAuth={this.state.isAuthenticated}
                />
    }

     return (
      <Aux classes={classes.App}>
        <button 
          onClick={() => this.setState({showCockpit: false})}
        >Remove Cockpit</button>

        <AuthContext.Provider value={{
          authenticated: this.state.isAuthenticated, 
          login: this.loginHandler
          }}>
          {this.state.showCockpit 
          ? <Cockpit 
          title={this.props.title}
          showPersons={this.state.showPersons} 
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}
          loginHandler={this.loginHandler} />
          
          : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', {className: 'App'},
    //                                 React.createElement('h1', null, 'Hellow World!!!'));
  }
}

export default withClass(App, classes.App);
