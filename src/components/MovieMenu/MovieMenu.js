import React, { Component, Fragment } from 'react'
import background from '../Characters/images/bg4.png'
import './MovieMenu.css'
import styled from 'styled-components'
import {Link} from "react-router-dom";

import antmanCover from './images/ant_man.jpeg'
import avengersCover from './images/avengers.jpeg'
import avengers2Cover from './images/avengers_2.jpeg'
import capitanCover from './images/capitan_america.jpeg'
import capitan2Cover from './images/capitan_america_2.jpeg'
import guardiansCover from './images/guardians_of_the_galaxy.jpeg'
import hulkCover from './images/hulk.jpeg'
import ironmanCover from './images/iron_man.jpeg'
import ironman2Cover from './images/iron_man_2.jpeg'
import ironman3Cover from './images/iron_man_3.jpeg'
import thorCover from './images/thor.jpeg'
import thor2Cover from './images/thor_2.jpeg'

const Header = styled.header`
  height: 250px;
  width: 100%;
  overflow: hidden;
  position:relative;

`
const Img = styled.img`
  object-fit: contain;
  position: absolute;
  width: 100%;
  transition: all 1s ease-in-out;
    
    &:hover {
    transform: scale(1.1);
    opacity: 0.7 
  }
`
const H1 = styled.h1`
  position: relative;
  top: 40%;
  text-align: center;
  color: #F8F8FF;
  font-weight: bolder;
  font-size: 50px;
`
const Div = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-left: 10px
     
  @media (min-width: 992px) {
    align-items:center;
    flex-wrap: nowrap;
    margin-top: 20px;
    margin-bottom: 20px
   }
`
const CoverImg = styled.img`
    height: auto; 
    width: auto; 
    max-width: 500px; 
    max-height: 500px;
    margin-bottom: 20px

  @media (min-width: 992px) {
    width: 95%;
    height: auto;
    max-width: 100%; 
    max-height: 100%;
  }
`
const Button = styled.button`
  text-transform: uppercase;
  color: black;
  font-size: 15px;
  font-weight: lighter;
  margin-left: 15px;
  margin-top: 20px;
  background: white;
 
    &:focus {
     outline:0;
    }
  
    &:hover {
    font-weight: bolder
    }
`


class MovieMenu extends Component {

    covers = {
        antman: antmanCover,
        avengers: avengersCover,
        avengers2: avengers2Cover,
        capitan: capitanCover,
        capitan2: capitan2Cover,
        guardians: guardiansCover,
        hulk: hulkCover,
        ironman: ironmanCover,
        ironman2: ironman2Cover,
        ironman3: ironman3Cover,
        thor: thorCover,
        thor2: thor2Cover
    }

    render() {
        return(
            <Fragment>
                <Header>
                    <Img src={background} alt=""/>
                    <H1>Filmy</H1>
                </Header>
                <Link to="/"><Button><span className="arrow left"/>Powrót</Button></Link>
                <Div>
                    <Link to="/movie/101"><CoverImg src={this.covers.ironman}
                                                   alt="Iron Man"
                                                   onMouseOver=""
                                                   onMouseOut=""/>
                    </Link>
                    <Link to="/movie/102"><CoverImg src={this.covers.hulk}
                                                   alt="Incredible Hulk"
                                                   onMouseOver=""
                                                   onMouseOut=""/>
                    </Link>
                    <Link to="/movie/103"><CoverImg src={this.covers.ironman2}
                                                   alt="Iron Man 2"
                                                   onMouseOver=""
                                                   onMouseOut=""/>
                    </Link>
                    <Link to="/movie/104"><CoverImg src={this.covers.thor}
                                                   alt="Thor"
                                                   onMouseOver=""
                                                   onMouseOut=""/>
                    </Link>
                    <Link to="/movie/105"><CoverImg src={this.covers.capitan}
                                                   alt="Capitan America: The First Avenger"
                                                   onMouseOver=""
                                                   onMouseOut=""/>
                    </Link>
                    <Link to="/movie/106"><CoverImg src={this.covers.avengers}
                                                   alt="Avengers"
                                                   onMouseOver=""
                                                   onMouseOut=""/>
                    </Link>
                    <Link to="/movie/107"><CoverImg src={this.covers.ironman3}
                                                   alt="Iron Man 3"
                                                   onMouseOver=""
                                                   onMouseOut=""/>
                    </Link>
                    <Link to="/movie/108"><CoverImg src={this.covers.thor2}
                                                   alt="Thor: The Dark World"
                                                   onMouseOver=""
                                                   onMouseOut=""/>
                    </Link>
                    <Link to="/movie/109"><CoverImg src={this.covers.capitan2}
                                                   alt="Capitan America: The Winter Soldier"
                                                   onMouseOver=""
                                                   onMouseOut=""/>
                    </Link>
                    <Link to="/movie/110"><CoverImg src={this.covers.guardians}
                                                   alt="Guardians of the Galaxy"
                                                   onMouseOver=""
                                                   onMouseOut=""/>
                    </Link>
                    <Link to="/movie/111"><CoverImg src={this.covers.avengers2}
                                                   alt="Avengers: Age of Ultron"
                                                   onMouseOver=""
                                                   onMouseOut=""/>
                    </Link>
                    <Link to="/movie/112"><CoverImg src={this.covers.antman}
                                                   alt="Ant-Man"
                                                   onMouseOver=""
                                                   onMouseOut=""/>
                    </Link>
                </Div>
            </Fragment>
        )
    }
}

export default MovieMenu