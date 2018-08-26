import React, { Component } from 'react';
import './App.css';
import LoginBar from '../LoginBar/LoginBar';
import Characters from '../Characters/Characters'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginBar />
        < Characters />
      </div>
    );
  }
}

export default App;
