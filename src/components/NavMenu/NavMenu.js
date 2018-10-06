import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import Characters from "../Characters/Characters";


class NavMenu extends Component {
  state = {
    show: 0,
  };


  render() {
    const options = [
      null,
      {
        render: () => <div className='hidden-div'><div className="hidden-div-small"><Characters hideHeader smallHeroes /></div></div>,
        label: 'superbohaterowie',
        href: '/heroes',
        iconSrc : ''
      },
      {
        render: () => <div className='hidden-div'>Komiksy czytamy</div>,
        label: 'komiksy',
        href: '/komiksy',
        iconSrc : ''
      },
      {
        render: () => <div className='hidden-div'>Filmy oglądamy</div>,
        label: 'filmy',
        href: '/filmy',
        iconSrc : ''
      }
    ]
    return (
      <div onMouseLeave={() => this.setState({show: 0})}>
        <div className='nav'>
          <ul className='nav-bar'>
            {
              options.map(
                (option, index) => option && (
                  <li key={index} onMouseOver={() => this.setState({show: index})} className='nav-bar-item'><Link className="nav-bar-link" to={option.href}><img src={option.iconSrc}/>{option.label}</Link></li>
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