import React, { Component, Fragment } from 'react'
import background from './avengers.jpg'
import styled from 'styled-components'
import {Link} from "react-router-dom";

import antmanCover from './images/antman.jpg'
import avengersCover from './images/avengers2012.jpg'
import avengers2Cover from './images/ultron.jpg'
import capitanCover from './images/Captain_America_The_First_Avenger_poster.jpg'
import capitan2Cover from './images/captain_winter.jpg'
import guardiansCover from './images/guardians1.jpg'
import hulkCover from './images/incrediblehulk.jpg'
import ironmanCover from './images/ironman.jpg'
import ironman2Cover from './images/ironman2.jpg'
import ironman3Cover from './images/ironman3.jpg'
import thorCover from './images/thor.jpeg'
import thor2Cover from './images/thor_dark.jpg'
import spiderman from './images/spiderman.jpg'
import guardians2 from './images/guardians2.jpg'
import deadpool1 from './images/deadpool1.jpg'
import deadpool2 from './images/deadpool2.jpg'
import civilwar from './images/civilwar.jpeg'
import infinitywar from './images/infinitywar.jpg'
import ragnarok from './images/ragnarok.jpg'
import strange from './images/strange.jpg'

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
  justify-content: center;
  margin: 60px 40px 30px 40px;
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
    height: 500px;
    padding: 10px;
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
    guardians2: guardians2,
    deadpool1: deadpool1,
    deadpool2: deadpool2,
    civilwar: civilwar,
    infinitywar: infinitywar,
    ragnarok: ragnarok,
    strange: strange
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
          <Link to="/movie/114">
            <Poster src={this.posters.guardians2}
                    alt="Guardians of the Galaxy vol. 2"
            />
          </Link>
          <Link to="/movie/115">
            <Poster src={this.posters.deadpool1}
                    alt="Deadpool vol. 1"
            />
          </Link>
          <Link to="/movie/116">
            <Poster src={this.posters.deadpool2}
                    alt="Deadpool vol. 2"
            />
          </Link>
          <Link to="/movie/117">
            <Poster src={this.posters.civilwar}
                    alt="Deadpool vol. 2"
            />
          </Link>
          <Link to="/movie/118">
            <Poster src={this.posters.infinitywar}
                    alt="Avengers: Infinity War"
            />
          </Link>
          <Link to="/movie/119">
            <Poster src={this.posters.ragnarok}
                    alt="Thor: Ragnarok"
            />
          </Link>
          <Link to="/movie/120">
            <Poster src={this.posters.strange}
                    alt="Doctor Strange"
            />
          </Link>
        </Div>
      </Fragment>
    )
  }
}

export default MoviesMenu