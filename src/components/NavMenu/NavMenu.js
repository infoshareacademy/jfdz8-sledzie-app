import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logoComics from './comics-logo.jpg';
import logoMovies from './movies-logo.jpeg';
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
        render: () => <div className='hidden-div'><div className="logo-container"><img className="logo" src={logoComics} alt=""/></div></div>,
        label: 'komiksy',
        href: '/comics',
        iconSrc : ''
      },
      {
        render: () => <div className='hidden-div'><div className="logo-container"><img className="logo" src={logoMovies} alt=""/></div></div>,
        label: 'filmy',
        href: '/movies',
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