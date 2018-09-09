import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import background from './bg4.png'

import styled from 'styled-components'

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
  margin-top: 40px;
`
const Ul = styled.div`
  text-align: center;
  margin-top: 20px;
  font-weight: bolder;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding-right: 15px;  
  padding-top: 15px;
  font-size: 25px
  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.5s;
  
    &:hover {
    color: red;
    }
`
const Button = styled.button`

  text-transform: uppercase;
  font-size: 15px;
  color: red;
  font-size: 25px;
  font-weight: bolder;
  margin-left: 15px;
  background: white;
`
class Characters extends Component {

  render() {
    return (
      <React.Fragment>
        <Header>
          <Img src={background} alt=""/>
          <H1>Superbohaterowie</H1>
        </Header>
        <Div>
          <Ul>
            <StyledLink to="/heros/hero/deadpool">Deadpool</StyledLink>
            <StyledLink to="/heros/hero/ironman">Iron Man</StyledLink>
            <StyledLink to="/heros/hero/doctorstrange">Doctor Strange</StyledLink>
            <StyledLink to="/heros/hero/blackpanther">Black Panther</StyledLink>
            <StyledLink to="/heros/hero/hulk">Hulk</StyledLink>
            <StyledLink to="/heros/hero/spiderman">Spider-Man</StyledLink>
            <StyledLink to="/heros/hero/thor">Thor</StyledLink>
            <StyledLink to="/heros/hero/thanos">Thanos</StyledLink>
            <StyledLink to="/heros/hero/captainamerica">Captain America</StyledLink>
            <StyledLink to="/heros/hero/blackwidow">Black Widow</StyledLink>
            <StyledLink to="/heros/hero/loki">Loki</StyledLink>
            <StyledLink to="/"><Button>Powrót</Button></StyledLink> <br/>
          </Ul>
        </Div>
     </React.Fragment>

    )
  }
}

export default Characters