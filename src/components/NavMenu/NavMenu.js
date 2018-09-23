import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';


class NavMenu extends Component {
  state = {
    show: 0,
  };


  render() {
    const options = {
      1: () => <p>Hello</p>,
      2: () => <p>Blah</p>,
      3: () => <p>Zp</p>,
      4: () => <p>aaaaa</p>,
      5: () => <p>fooo</p>
    }
    return (
      <div onMouseLeave={() => this.setState({show: 0})}>
        <div className='nav'>
          <ul className='nav-bar'>
            <li onMouseOver={() => this.setState({show: 1})} className='nav-bar-item'><Link to='/heroes'>SUPERBOHATEROWIE</Link></li>
            <li onMouseOver={() => this.setState({show: 2})} className='nav-bar-item'>menu 2</li>
            <li onMouseOver={() => this.setState({show: 3})} className='nav-bar-item'>menu 3</li>
            <li onMouseOver={() => this.setState({show: 4})} className='nav-bar-item'>menu 4</li>
            <li onMouseOver={() => this.setState({show: 5})} className='nav-bar-item'>menu 5</li>
          </ul>
        </div>
        <div>
          <div>
            {options[this.state.show] && options[this.state.show]()}
          </div>
        </div>
      </div>
    );
  }
}

export default NavMenu;