import React, {Component} from 'react';
import './CreateAccount.css';
import logo from './login-image.png';
import {auth} from '../../firebase';
import {withRouter, Link} from 'react-router-dom'

const initialState = {
  email: '',
  password: '',
  user: null
}

class CreateAccount extends Component {

  state = {...initialState};

  componentDidMount() {
    auth().onAuthStateChanged(
      user => this.setState({user})
    )
  }

  signOut() {
    auth().signOut()
      .then(() => this.setState({...initialState}))
      .catch(() => window.alert('Sign out failed!'));
  }

  handleSubmit = event => {
    event.preventDefault()
    auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.password
    ).catch(() => this.setState({alertOccured: true}));
  }


  render() {
    return (
      <div className="create-account-container">
        {this.state.alertOccured && <div className="punishment">
          <p className="punishment-message">Rejestracja nie powiodła się, wprowadź poprawne dane aby stworzyć konto w
            serwisie.</p>
          <p className="punishment-message">Za bycie zbyt ciekawskim dostajesz nagrodę!!!</p>
          <img src="http://49.media.tumblr.com/37d1f69d0253dafece9110afe8c9d1e2/tumblr_o5ca99VVCC1rey868o1_500.gif"
               className="punishment-logo" alt=""/>
          <button className="punishment-back-button" onClick={() => this.props.history.push('/')}>Powrót</button>
        </div>}
        <div className="create-account-container-form">
          {this.state.user ?
            <div>
              <p>Hello {this.state.user.email}</p>
              <button onClick={this.signOut}>Wyloguj się</button>
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
                <button className="sign-up-button">Zapisz się</button>
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