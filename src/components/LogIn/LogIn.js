import React, {Component} from 'react';
import './LogIn.css';
import logo from './login-image.png';
import {auth} from '../../firebase'
import {withRouter, Link} from 'react-router-dom'

const initialState = {
  email: '',
  password: '',
  user: null
}

class LogIn extends Component {

  state = {...initialState};

  componentDidMount() {
    auth().onAuthStateChanged(
      user => this.setState({user: user || null})
    )
  }

  signOut() {
    auth().signOut()
      .then(() => this.setState({...initialState}))
      .catch(() => window.alert('Sign out failed!'));
  }

  logIn = event => {
    event.preventDefault()
    auth().signInWithEmailAndPassword(
      this.state.email,
      this.state.password
    ).catch(() => window.alert('Logowanie nie powiodło się, wprowadź poprawne dane lub stwórz konto w serwisie.'));
  }

  render() {
    return (
      <div className="log-in-container">
        <div className="log-in-container-form">
          {this.state.user ?
            <div>
              <p>Hello {this.state.user.email}</p>
              <button onClick={this.signOut}>Sign out</button>
            </div>
            :
            <div className="log-in-container-input-box">
              <form onSubmit={this.logIn}>
                <h1 className="log-in-header">Logowanie</h1>
                <input className="log-in-container-input"
                       type="text"
                       placeholder="email"
                       value={this.state.email}
                       onChange={event => this.setState({
                         email: event.target.value
                       })}
                />
                <input className="log-in-container-input"
                       type="password"
                       placeholder="password"
                       value={this.state.password}
                       onChange={event => this.setState({
                         password: event.target.value
                       })}
                />
                <button className="log-in-button">Log in</button>
              </form>
            </div>
          }
          <div className="logo-log-in-container">
            <img className="logo-log-in" src={logo} alt=""/>
          </div>
          <button className="back-button" onClick={() => this.props.history.push('/')}>Powrót</button>
        </div>
      </div>

    );
  }
}

export default withRouter(LogIn);