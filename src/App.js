import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users : [
      {username: 'Rumman'},
      {username: 'Ashraf'},
      {username: 'Subrata'}
    ]
  }

  usernameHandler = (event) => {
    this.setState({users : [
      {username: 'Rumman'},
      {username: 'Anika'},
      {username: event.target.value}
    ]});
  }

  render() {

    return (
      <div className="App">
        <ol>
          <li>Create Two new Components. UserInput and UserOutput</li>
          <li>User Input should hold input element.UserOutput two paragraphs</li>
          <li>Output multiple UserOutput Components in the App Component. 
            Any paragraphs text of your choice</li>
          <li>Pass a username of your choice to UserOutput via props and display it here</li>
          <li>Add state management to App Component and pass the username to UserOutput Component</li>
          <li>Add a method to manipulate the state => event handler method</li>
          <li>Pass the event handler to UserInput Component and bind it to input-change event</li>
          <li>Ensure that new input entered by user overwrite the old username in UserOutput Component</li>
          <li>Add two way binding to your input(In UserInput) and also display starting username</li>
          <li>Add styling of your choice to your Components/Elements in the Components both with inline styles and css</li>
        </ol>
        <UserInput changed={this.usernameHandler} currentName={this.state.users[2].username}/>
        <UserOutput username={this.state.users[0].username}/>
        <UserOutput username={this.state.users[1].username}/>
        <UserOutput username={this.state.users[2].username}/>
      </div>
    );
  }
}

export default App;
