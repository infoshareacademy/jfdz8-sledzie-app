import React, { Component } from 'react';
import './LoginForm.css';
import logo from './logo.png';

class LoginForm extends Component {
  render() {
    return (
      <div className="login-form" onClick={event => event.stopPropagation()}>
        <div className="logo-form-container">
          <img className="login-form-logo" src={logo} alt=""/>
        </div>
        <button className="btn-form-sign-in">Zapisz się</button>
        <button className="btn-form-create-account">Stwórz konto</button>
      </div>
    );
  }
}

export default LoginForm;