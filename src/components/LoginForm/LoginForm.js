import React, {Component, Fragment} from 'react';
import './LoginForm.css';
import logo from './logo.png';
import {Link} from 'react-router-dom'

class LoginForm extends Component {
  render() {
    return (
      <Fragment>
        <div className="login-form" onClick={event => event.stopPropagation()}>
          <div className="logo-form-container">
            <img className="login-form-logo" src={logo} alt=""/>
          </div>
          <Link to="/LogIn" onClick={this.props.closeBar} className="btn-form-sign-in">Zapisz się</Link>
          <Link to="/CreateAccount" onClick={this.props.closeBar} className="btn-form-create-account">Stwórz
            konto</Link>
        </div>
      </Fragment>
    );
  }
}

export default LoginForm;