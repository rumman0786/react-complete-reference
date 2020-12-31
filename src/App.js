import React, { Component } from 'react';
import './App.css';
import CharComponent from './CharComponent/CharComponent';
import Validation from './Validation/Validation';

class App extends Component {

  state = {
    inputText: '',
    inputLength: 0
  }

  inputChangeHandler = (event) => {
    const updated = {
      inputText: event.target.value,
      inputLength: event.target.value.length
    }

    this.setState(updated);
  }

  removeHandler = (index) => {
    const copyInputText = this.state.inputText.split('');
    copyInputText.splice(index, 1);
    const updatedText = copyInputText.join('');
    this.setState({
      inputText: updatedText,
      inputLength: updatedText.length
    });
  }

  render() {
    const charComponents = (   
    <div>
      {
        this.state.inputText.split('').map( 
          (c, index) => {
            return <CharComponent 
                      char={c}
                      clickCallBack={() => this.removeHandler(index)}
                      key={index}/>
          }
        )
      }
    </div>
  )
    return (
      <div className="App">
        <h1>This is a React App</h1>
        <div>
          <input type='text'
            onChange={(event) => this.inputChangeHandler(event)}
            value={this.state.inputText}/>
          <p>Input Length: {this.state.inputLength}</p>
          <Validation length={this.state.inputLength}/>
          {charComponents}
        </div>
        
      </div>
    );
  }
}

export default App;
