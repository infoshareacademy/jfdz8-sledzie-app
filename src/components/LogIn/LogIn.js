import React, {Component} from 'react';
import './LogIn.css';
import { auth } from '../../firebase'
import { withRouter, Link } from 'react-router-dom'

class LogIn extends Component {

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

  logIn = event => {
    event.preventDefault()
    auth().signInWithEmailAndPassword(
      this.state.email,
      this.state.password
    )
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
          <div>
              <form onSubmit={this.logIn}>
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
                <button>Log in</button>
              </form>
            </div>
        }
          <button onClick={() => this.props.history.push('/')}>Powrót</button>
        </div>
      </div>

    );
  }
}

export default withRouter(LogIn);