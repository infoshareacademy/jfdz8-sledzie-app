import React, { Component, Fragment } from 'react'
import background from './avengers.jpg'
import styled from 'styled-components'
import {Link} from "react-router-dom";

import antmanCover from './images/ant_man.jpeg'
import avengersCover from './images/avengers.jpeg'
import avengers2Cover from './images/avengers_2.jpeg'
import capitanCover from './images/capitan_america.jpeg'
import capitan2Cover from './images/capitan_america_2.jpeg'
import guardiansCover from './images/guardians_of_the_galaxy.jpeg'
import hulkCover from './images/incrediblehulk.jpg'
import ironmanCover from './images/ironman.jpg'
import ironman2Cover from './images/ironman2.jpg'
import ironman3Cover from './images/iron_man_3.jpeg'
import thorCover from './images/thor.jpeg'
import thor2Cover from './images/thor_2.jpeg'
import spiderman from './images/spiderman.jpg'

const Header = styled.header`
  height: 250px;
  width: 100%;
  overflow: hidden;
  position:relative;

`
const Img = styled.img`
  object-fit: contain;
 transform: scale(1);
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
  justify-content: center;
  margin: 60px 30px 30px 30px;
  flex-wrap: wrap;
  

  @media (min-width: 992px) {
    justify-content: space-between;
   
   }
`
const Poster = styled.img`
    width: 400px; 
    height: auto; 
    margin-bottom: 20px

  @media (min-width: 992px) {
    width: 350px;
    height: auto;
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


class MoviesMenu extends Component {

  posters = {
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
    thor2: thor2Cover,
    spiderman: spiderman,
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
          <Link to="/movie/101">
            <Poster src={this.posters.ironman}
                    alt="Iron Man"
            />
          </Link>
          <Link to="/movie/102">
            <Poster src={this.posters.hulk}
                    alt="Incredible Hulk"

            />
          </Link>
          <Link to="/movie/103">
            <Poster src={this.posters.ironman2}
                    alt="Iron Man 2"
            />
          </Link>
          <Link to="/movie/104">
            <Poster src={this.posters.thor}
                    alt="Thor"
            />
          </Link>
          <Link to="/movie/105">
            <Poster src={this.posters.capitan}
                    alt="Capitan America: The First Avenger"
            />
          </Link>
          <Link to="/movie/106">
            <Poster src={this.posters.avengers}
                    alt="Avengers"
            />
          </Link>
          <Link to="/movie/107">
            <Poster src={this.posters.ironman3}
                    alt="Iron Man 3"
            />
          </Link>
          <Link to="/movie/108">
            <Poster src={this.posters.thor2}
                    alt="Thor: The Dark World"
            />
          </Link>
          <Link to="/movie/109">
            <Poster src={this.posters.capitan2}
                    alt="Capitan America: The Winter Soldier"
            />
          </Link>
          <Link to="/movie/110">
            <Poster src={this.posters.guardians}
                    alt="Guardians of the Galaxy"
            />
          </Link>
          <Link to="/movie/111">
            <Poster src={this.posters.avengers2}
                    alt="Avengers: Age of Ultron"
            />
          </Link>
          <Link to="/movie/112">
            <Poster src={this.posters.antman}
                    alt="Ant-Man"
            />
          </Link>
          <Link to="/movie/113">
            <Poster src={this.posters.spiderman}
                    alt="Spider-Man: Homecoming"
            />
          </Link>
        </Div>
      </Fragment>
    )
  }
}

export default MoviesMenu