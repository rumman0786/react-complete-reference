import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is a React App</h1>
        <p>Does this work???</p>
        <Person name="Rumman" age="30"/>
        <Person name="Sabrina" age="25">My Hobbies: Browsing Netflix, Learning Coding</Person>
        <Person name="Max" age="27"/>
      </div>
    );
    // return React.createElement('div', {className: 'App'},
    //                                 React.createElement('h1', null, 'Hellow World!!!'));
  }
}

export default App;
