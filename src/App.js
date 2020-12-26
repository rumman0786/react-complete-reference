import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {

  const [personState, setPersonState] = useState({
    persons: [
      {name: 'Rumman', age:30},
      {name: 'Sabrina', age:25},
      {name: 'Max', age:27},
    ]
  });

  const [otherstate, setOtherstate] = useState({
    otherstate: "This is another prop"
  })

  const switchNameHandler = () => {
    // console.log('Clicked switch button');
    setPersonState({
      persons: [
        {name: 'Rumman Bin Ashraf', age:30},
        {name: 'Sabrina', age:25},
        {name: 'Max', age:35},
      ]
    });
  }

  return (
    <div className="App">
      <h1>This is a React App</h1>
      <p>Does this work???</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.persons[0].name} age={personState.persons[0].age}/>
      <Person name={personState.persons[1].name} age={personState.persons[1].age}>My Hobbies: Browsing Netflix, Learning Coding</Person>
      <Person name={personState.persons[2].name} age={personState.persons[2].age}/>
    </div>
  );
  // return React.createElement('div', {className: 'App'},
  //                                 React.createElement('h1', null, 'Hellow World!!!'));

}

export default App;
