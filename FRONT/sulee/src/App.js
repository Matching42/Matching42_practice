import React, { Component } from 'react';
import './App.css';

class Button extends Component {
  render() { 
    return(
      <div>
        <button onClick={() => alert('Hello, Cadet !')}>Matching 42</button>
      </div >
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button></Button>
      </div>
    );
  }
}

export default App;