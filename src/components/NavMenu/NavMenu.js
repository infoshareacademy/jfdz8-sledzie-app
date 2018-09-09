import React, {Component} from 'react';
import './NavMenu.css';

class NavMenu extends Component {

  render() {
    return (
      <fragment>
        <div className='nav'>
          <ul className='nav-bar'>
            <li className='nav-bar-item'>menu 1</li>
            <li className='nav-bar-item'>menu 2</li>
            <li className='nav-bar-item'>menu 3</li>
            <li className='nav-bar-item'>menu 4</li>
            <li className='nav-bar-item'>menu 5</li>
          </ul>
        </div>
      </fragment>
    );
  }
}

export default NavMenu;