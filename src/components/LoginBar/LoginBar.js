import React, {Component} from 'react';
import './LoginBar.css';
import logo from './logo.png';
import LoginForm from '../LoginForm/LoginForm';

class LoginBar extends Component {

  state = {
    enabled: false
  }

  handleClick = (event) => {
    event.stopPropagation();
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
  }

  render() {
    return (
      <fragment>
        <div className="login-bar">
          <button className="btn-sign-in" onClick={this.handleClick}>Zapisz się</button>
        </div>
        {this.state.enabled && <LoginForm />}
        <div className="logo-bar-container">
          <a href="#start">
            <img className="login-bar-logo" src={logo} alt=""/>
          </a>
        </div>
      </fragment>
    );
  }
}

export default LoginBar;
