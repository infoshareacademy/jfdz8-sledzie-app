import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';


class NavMenu extends Component {
  state = {
    show: 0,
  };


  render() {
    const options = [
      null,
      {
        render: () => <p>Hello</p>,
        label: 'Hello',
        href: '/foo'
      },
      {
        render: () => <p>Blah</p>,
        label: 'Blah',
        href: '/bizz'
      }
    ]
    return (
      <div onMouseLeave={() => this.setState({show: 0})}>
        <div className='nav'>
          <ul className='nav-bar'>
            <li onMouseOver={() => this.setState({show: 1})} className='nav-bar-item'><Link to='/heroes'>SUPERBOHATEROWIE</Link></li>
            {
              options.map(
                (option, index) => option && (
                  <li onMouseOver={() => this.setState({show: index})} className='nav-bar-item'><Link to={option.href}>{option.label}</Link></li>
                )
              )
            }
          </ul>
        </div>
        <div>
          <div>
            {options[this.state.show] && options[this.state.show].render()}
          </div>
        </div>
      </div>
    );
  }
}

export default NavMenu;