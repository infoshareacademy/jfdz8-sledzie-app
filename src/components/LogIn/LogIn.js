import React, {Component} from 'react';
import './LogIn.css';
import logo from './login-image.png';
import {auth} from '../../firebase';
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
    ).catch(() => this.setState({alertOccured: true}));
  }

  render() {
    return (
      <div className="log-in-container">
        {this.state.alertOccured && <div className="punishment">
          <p className="punishment-message">Logowanie nie powiodło się, wprowadź poprawne dane lub stwórz konto w
            serwisie.</p>
          <p className="punishment-message">Za bycie zbyt ciekawskim dostajesz nagrodę!!!</p>
          <img src="http://49.media.tumblr.com/37d1f69d0253dafece9110afe8c9d1e2/tumblr_o5ca99VVCC1rey868o1_500.gif"
               className="punishment-logo" alt=""/>
          <button className="punishment-back-button" onClick={() => this.props.history.push('/')}>Powrót</button>
        </div>}
        <div className="log-in-container-form">
          {this.state.user ?
            <div>
              <p>Hello {this.state.user.email}</p>
              <button onClick={this.signOut}>Wyloguj się</button>
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
                <button className="log-in-button">Zaloguj się</button>
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