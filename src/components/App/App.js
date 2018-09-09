import React, { Component } from 'react';
import './App.css';
import LoginBar from '../LoginBar/LoginBar';
import Characters from '../Characters/Characters';
import NavMenu from '../NavMenu/NavMenu';

class App extends Component {
  render() {

    return (
      <div className="App">
        <LoginBar />
        <NavMenu />
        <Characters />
      </div>
    );
  }
}

export default App;
