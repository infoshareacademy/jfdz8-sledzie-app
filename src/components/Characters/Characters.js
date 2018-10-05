import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'
import background from './images/bg4.png'
import './Characters.css'
import deadpool from './images/Deadpool.png'
import deadpoolHover from './images/DeadpoolHover.png'
import ironman from './images/Ironman.png'
import ironmanHover from './images/IronmanHover.png'
import spiderman from './images/Spiderman.png'
import spidermanHover from './images/SpidermanHover.png'
import blackwidow from './images/BlackWidow.png'
import blackwidowHover from './images/BlackWidowHover.png'
import hulk from './images/Hulk.png'
import hulkHover from './images/HulkHover.png'
import captainamerica from './images/CaptainAmerica.png'
import captainamericaHover from './images/CaptainAmericaHover.png'
import thanos from './images/Thanos.png'
import thanosHover from './images/ThanosHover.png'
import thor from './images/Thor.png'
import thorHover from './images/ThorHover.png'
import drstrange from './images/DrStrange.png'
import drstrangeHover from './images/DrStrangeHover.png'
import styled from 'styled-components'

const Header = styled.header`
  height: 250px;
  width: 100%;
  overflow: hidden;
  position:relative

`
const Img = styled.img`
  object-fit: contain;
  position: absolute;
  width: 100%;
  transition: all 1s ease-in-out;
    
  @media (min-width: 992px)  {
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
  font-size: 50px
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
const HeroImg = styled.img`
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


// const Button = styled.button`
//   text-transform: uppercase;
//   color: black;
//   font-size: 15px;
//   font-weight: lighter;
//   margin-left: 15px;
//   margin-top: 20px;
//   background: white;
//
//
//     &:focus {
//      outline:0;
//     }
//
//     &:hover {
//     font-weight: bolder
//     }
// `
class Characters extends Component {

  state = {
    imgDeadpool: deadpool,
    imgIronMan: ironman,
    imgDrStrange: drstrange,
    imgHulk: hulk,
    imgSpiderman: spiderman,
    imgThor: thor,
    imgThanos: thanos,
    imgCaptainAmerica: captainamerica,
    imgBlackWidow: blackwidow
  }

  render() {
    return (
      <Fragment>
        <Header>
          <Img src={background} alt=""/>
          <H1>Superbohaterowie</H1>
        </Header>
        {/*<Link to="/"><Button><span className="arrow left"/>Do głównej</Button></Link>*/}
        <Div>
          <Link to="/hero/1009268"><HeroImg src={this.state.imgDeadpool}
                                        alt=""
                                        onMouseOver={() => this.setState({imgDeadpool: deadpoolHover})}
                                        onMouseOut={() => this.setState({imgDeadpool: deadpool})}/>
          </Link>
          <Link to="/hero/1009368"><HeroImg src={this.state.imgIronMan}
                                        alt=""
                                        onMouseOver={() => this.setState({imgIronMan: ironmanHover})}
                                        onMouseOut={() => this.setState({imgIronMan: ironman})}/>
          </Link>
          <Link to="/hero/1009282"><HeroImg src={this.state.imgDrStrange}
                                        alt=""
                                        onMouseOver={() => this.setState({imgDrStrange: drstrangeHover})}
                                        onMouseOut={() => this.setState({imgDrStrange: drstrange})}/>
          </Link>
          <Link to="/hero/1009351"><HeroImg src={this.state.imgHulk}
                                        alt=""
                                        onMouseOver={() => this.setState({imgHulk: hulkHover})}
                                        onMouseOut={() => this.setState({imgHulk: hulk})}/>
          </Link>
          <Link to="/hero/1009610"><HeroImg src={this.state.imgSpiderman}
                                        alt=""
                                        onMouseOver={() => this.setState({imgSpiderman: spidermanHover})}
                                        onMouseOut={() => this.setState({imgSpiderman: spiderman})}/>
          </Link>
          <Link to="/hero/1009664"><HeroImg src={this.state.imgThor}
                                        alt=""
                                        onMouseOver={() => this.setState({imgThor: thorHover})}
                                        onMouseOut={() => this.setState({imgThor: thor})}/>
          </Link>
          <Link to="/hero/1009652"><HeroImg src={this.state.imgThanos}
                                        alt=""
                                        onMouseOver={() => this.setState({imgThanos: thanosHover})}
                                        onMouseOut={() => this.setState({imgThanos: thanos})}/>
          </Link>
          <Link to="/hero/1009220"><HeroImg src={this.state.imgCaptainAmerica}
                                        alt=""
                                        onMouseOver={() => this.setState({imgCaptainAmerica: captainamericaHover})}
                                        onMouseOut={() => this.setState({imgCaptainAmerica: captainamerica})}/>
          </Link>
          <Link to="/hero/1009189"><HeroImg src={this.state.imgBlackWidow}
                                        alt=""
                                        onMouseOver={() => this.setState({imgBlackWidow: blackwidowHover})}
                                        onMouseOut={() => this.setState({imgBlackWidow: blackwidow})}/>
          </Link>
        </Div>
     </Fragment>
    )
  }
}

export default Characters