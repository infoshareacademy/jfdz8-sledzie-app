import React, { Component } from 'react'
import './App.css'
import LoginBar from '../LoginBar/LoginBar'
import background from './background.jpg'
import styled from 'styled-components'


const Img = styled.img`
  width: 100%
`

class App extends Component {
  render() {

    return (
      <div className="App">
        <LoginBar />
        <Img src={background}/>
      </div>
    );
  }
}

export default App;
