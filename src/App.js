import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Rumman', age:30},
      {name: 'Sabrina', age:25},
      {name: 'Max', age:27},
    ],
    otherstate: "This is another prop",
    showPersons: false,
  }

  switchNameHandler = (newName) => {
    // console.log('Clicked switch button');
    this.setState({
      persons: [
        {name: newName, age:30},
        {name: 'Sabrina', age:25},
        {name: 'Max', age:35},
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Rumman', age:30},
        {name: event.target.value, age:25},
        {name: 'Max', age:35},
      ]
    });
  }

  togglePersonsHandler = () => {
    const currentVisibility = this.state.showPersons;
    this.setState({showPersons: !currentVisibility});
  }

  deletePersonsHandler = (personIndex) => {
    const modifiablePersons = this.state.persons;
    modifiablePersons.splice(personIndex, 1);
    this.setState({persons: modifiablePersons});
  }

  render() {
    const jsxButtonstyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
            <div>
              {
                this.state.persons.map((person, index) =>
                  <Person
                    callback={() => this.deletePersonsHandler(index)}
                    name={person.name}
                    age={person.age}/>
                )
              }
            </div>
      );
    }

    return (
      <div className="App">
        <h1>This is a React App</h1>
        <p>Does this work???</p>
        <button style={jsxButtonstyle}
                onClick={this.togglePersonsHandler}>Switch Visibility</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'},
    //                                 React.createElement('h1', null, 'Hellow World!!!'));
  }
}

export default App;
