import React, {Component} from 'react';
import './CreateAccount.css';
import logo from './login-image.png';
import {auth} from '../../firebase';
import {withRouter, Link} from 'react-router-dom'

class CreateAccount extends Component {

  state = {
    email: '',
    password: '',
    user: null
  }

  componentDidMount() {
    auth().onAuthStateChanged(
      user => this.setState({user})
    )
  }

  signOut() {
    auth().signOut();
  }

  handleSubmit = event => {
    event.preventDefault()
    auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.password
    )
  }


  render() {
    return (
      <div className="create-account-container">
        <div className="create-account-container-form">
          {this.state.user ?
            <div>
              <p>Hello {this.state.user.email}</p>
              <button onClick={this.signOut}>Sign ou</button>
            </div>
            :
            <div className="create-account-container-input-box">
              <form onSubmit={this.handleSubmit}>
                <h1 className="create-account-header">Rejestracja</h1>
                <input className="create-account-container-input"
                       type="text"
                       placeholder="email"
                       value={this.state.email}
                       onChange={event => this.setState({
                         email: event.target.value
                       })}
                />
                <input className="create-account-container-input"
                       type="password"
                       placeholder="password"
                       value={this.state.password}
                       onChange={event => this.setState({
                         password: event.target.value
                       })}
                />
                <button className="sign-up-button">Sign up</button>
              </form>
            </div>
          }
          <div className="logo-create-account-container">
            <img className="logo-create-account" src={logo} alt=""/>
          </div>
          <button className="back-button" onClick={() => this.props.history.push('/')}>Powrót</button>
        </div>
      </div>

    );
  }
}

export default withRouter(CreateAccount);