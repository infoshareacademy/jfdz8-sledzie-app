import React, {Component} from 'react';
import './CreateAccount.css';
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
            <div>
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  placeholder="email"
                  value={this.state.email}
                  onChange={event => this.setState({
                    email: event.target.value
                  })}
                />
                <input
                  type="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={event => this.setState({
                    password: event.target.value
                  })}
                />
                <button>Sign up</button>
              </form>
            </div>
          }


          <button onClick={() => this.props.history.push('/')}>Powrót</button>
        </div>
      </div>

    );
  }
}

export default withRouter(CreateAccount);