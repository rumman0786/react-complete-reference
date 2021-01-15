import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

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
    showCockpit: true
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

    this.setState({persons: copyPersons});
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

  render() {
    console.log('[App.js] render');

    let persons = null;
    
    if(this.state.showPersons) {
      persons = <Persons 
                  persons={this.state.persons}
                  clicked={this.deletePersonsHandler}
                  changed={this.nameChangedHandler}
                />
    }

     return (
      <WithClass classes={classes.App}>
        <button 
          onClick={() => this.setState({showCockpit: false})}
        >Remove Cockpit</button>

        {this.state.showCockpit 
        ? <Cockpit 
        title={this.props.title}
        showPersons={this.state.showPersons} 
        personsLength={this.state.persons.length}
        clicked={this.togglePersonsHandler} />
        
        : null}
        {persons}
      </WithClass>
    );
    // return React.createElement('div', {className: 'App'},
    //                                 React.createElement('h1', null, 'Hellow World!!!'));
  }
}

export default App;
