import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';


class NavMenu extends Component {

  render() {
    return (
      <Fragment>
        <div className='nav'>
          <ul className='nav-bar'>
            <li className='nav-bar-item'><Link to='/heroes'>SUPERBOHATEROWIE</Link></li>
            <li className='nav-bar-item'>menu 2</li>
            <li className='nav-bar-item'>menu 3</li>
            <li className='nav-bar-item'>menu 4</li>
            <li className='nav-bar-item'>menu 5</li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default NavMenu;