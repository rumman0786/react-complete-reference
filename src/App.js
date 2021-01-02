import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {id: 1, name: 'Rumman', age:30},
      {id: 2, name: 'Sabrina', age:25},
      {id: 3, name: 'Max', age:27},
    ],
    otherstate: "This is another prop",
    showPersons: false,
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
    const jsxButtonstyle = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor:'lighgreen',
        color:'black'
      }
    };

    let persons = null;

    const classes = [];

    if(this.state.persons.length <= 2) {
      classes.push('red');
    }

    if(this.state.persons.length <= 1) {
      classes.push('bold');
    }

    if(this.state.showPersons) {
      persons = (
            <div>
              {
                this.state.persons.map((person, index) =>
                  <Person
                    callback={() => this.deletePersonsHandler(index)}
                    changeCallback={(event) => this.nameChangedHandler(event, person.id)}
                    key={person.id}
                    name={person.name}
                    age={person.age}/>
                )
              }
            </div>
      );

      jsxButtonstyle.backgroundColor = 'red';
      jsxButtonstyle[':hover'] = {
        backgroundColor: 'salmon',
        color:'black'
      };
    }

    return (
      <div className="App">
        <h1>This is a React App</h1>
        <p className={classes.join(' ')}>Does this work???</p>
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
