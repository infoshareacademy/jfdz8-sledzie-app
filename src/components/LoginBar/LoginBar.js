import React, {Component} from 'react';
import './LoginBar.css';
import logo from './logo.png';
import LoginForm from '../LoginForm/LoginForm';
import Characters from '../Characters/Characters';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import styled from 'styled-components'

const SubmenuBar = styled.nav`
   background: #3b3b3b;
   border-top: 1px solid #626262;
   height: 25px;
   display: flex;
   align-items: center;
`

const StyledLink = styled(Link)`
  margin-left: 310px
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 13px; 
  font-weight: bolder;  
`

class LoginBar extends Component {

  state = {
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
          <button className="btn-sign-in" onClick={this.handleClick}>Zapisz się</button>
          <SubmenuBar className="submenu-bar">
            <Router>
              <div>
                <StyledLink to="/explore">Poznaj Universum</StyledLink>
                <Route path="/explore" render={() => <Characters />}/>
              </div>
            </Router>

            {/*<Characters />*/}
          </SubmenuBar>
        </div>
        {this.state.enabled && <LoginForm />}
        <div className="logo-bar-container">
          <img className="login-bar-logo" src={logo} alt=""/>
        </div>
      </React.Fragment>
    )
  }
}

export default LoginBar;
