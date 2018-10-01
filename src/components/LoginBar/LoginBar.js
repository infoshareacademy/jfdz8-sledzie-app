import React, {Component} from 'react';
import './LoginBar.css';
import logo from './logo.png';
import LoginForm from '../LoginForm/LoginForm';

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
  }

  render() {
    return (
      <React.Fragment>
        <div className="login-bar">
          {this.state.user === null ? <button className="btn-sign-in" onClick={this.handleClick}>Zapisz się</button> : null }
        </div>
        {this.state.enabled && <LoginForm closeBar={this.handleClick}/>}
        <div className="logo-bar-container">
          <a href="#start">
            <img className="login-bar-logo" src={logo} alt=""/>
          </a>
        </div>
      </React.Fragment>
    )
  }
}

export default LoginBar;
