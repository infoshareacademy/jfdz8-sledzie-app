import React, {Component} from 'react';
import './LoginBar.css';
import logo from './logo.png';
import LoginForm from '../LoginForm/LoginForm';
import {auth} from "../../firebase";
import {Link} from 'react-router-dom'

class LoginBar extends Component {

  state = {
    user: null,
    enabled: false
  }

  handleClick = (event) => {
    event.stopPropagation()
    this.setState({
      enabled: !this.state.enabled
    })
  }

  componentDidMount() {
    window.addEventListener('click', () => {
      this.setState({
        enabled: false
      })
    })
    auth().onAuthStateChanged(
      user => this.setState({user: user || null})
    )
  }

  render() {
    return (
      <React.Fragment>
        <div className="login-bar">
          {this.state.user === null ? <button className="btn-sign-in" onClick={this.handleClick}>Zapisz się</button> :
            <div>
              <p className="login-bar-user-name">Witaj {this.state.user.email}</p>
              <Link to="/LogIn" className="btn-sign-out">Wyloguj się</Link>
            </div>}
        </div>
        {this.state.enabled && <LoginForm closeBar={this.handleClick}/>}
        <div className="logo-bar-container">
          <a href="/">
            <img className="login-bar-logo" src={logo} alt=""/>
          </a>
        </div>
      </React.Fragment>
    )
  }
}

export default LoginBar;
