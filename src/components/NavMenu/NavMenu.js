import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import Characters from "../Characters/Characters";


class NavMenu extends Component {
  state = {
    show: false
  };

  render() {
    return (
      <Fragment>
        <div className='nav'>
          <ul className='nav-bar'>
            <li onMouseOver={() => this.setState({show: true})} onMouseLeave={() => this.setState({show: false})} className='nav-bar-item'><Link to='/heros'>SUPERBOHATEROWIE</Link></li>
            <li className='nav-bar-item'>menu 2</li>
            <li className='nav-bar-item'>menu 3</li>
            <li className='nav-bar-item'>menu 4</li>
            <li className='nav-bar-item'>menu 5</li>
          </ul>
        </div>
        <div hidden={!this.state.show}>
          <Characters/>
        </div>
      </Fragment>
    );
  }
}

export default NavMenu;