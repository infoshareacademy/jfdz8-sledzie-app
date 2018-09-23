import React, { Component } from 'react'
import './Hero.css'
import styled from 'styled-components'
import { database } from '../../firebase';
import {Link} from "react-router-dom";

const Container = styled.div`
  width: 80%;
`
const DivOne = styled.div`
  width: 40%;
  height: 600px;
  float: left
`
const DivTwo = styled.div`
  height: 525px;

`
const Img = styled.img`
  width: 80%;
  height: auto;
  margin-left: 50px;
  margin-top: 50px;
`
const H1 = styled.h1`
  margin-left: -250px;
  margin-top: 65px;
`
const P = styled.p`
  margin-left: -250px;
  margin-top: 15px;
  font-size: 19px;
  font-family: Montserrat, sans-serif;
  text-align: justify
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
const Ul = styled.div`
  text-align: center;
  font-weight: bolder;
`
const Button = styled.button`
  text-transform: uppercase;
  color: black;
  font-size: 20px;
  font-weight: lighter;
  margin-left: 15px;
  background: white;
 
    &:focus {
     outline:0;
    }
  
    &:hover {
    font-weight: bolder
    }
`
const StyledLink2 = styled(Link) `
  text-decoration: none;
  color: black;
  font-size: 20px;
  padding: 15px;
  font-weight: bolder;
  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.5s;
  
    &:hover {
      color: #CC0000
    }  
`
class Hero extends Component {

  state = {
    hero: null,
    details: null
  }

  componentDidMount () {
    fetch(`https://gateway.marvel.com:443/v1/public/characters/${this.props.id}?apikey=5b4ca4fb9704024334914e17aabbb5a3`)
      .then(response => response.json())
      .then(payload => this.setState({hero: payload.data.results[0]}));

    this.getDescriptions();

  }

  getDescriptions = () => {
    database.ref(`/heroes/${this.props.id}`)
      .once('value')
      .then(snapshot => {
        this.setState({details: snapshot.val()});
      });
  }

  render() {
    const path = this.state.hero && `${this.state.hero.thumbnail.path}.${this.state.hero.thumbnail.extension}`
    const name = this.props.name
    return (
      <React.Fragment>
        <Link to="/heroes"><Button><span className="arrow left"/>Cofnij</Button></Link>
          <Ul>
            <StyledLink to="/heros/hero/deadpool">Deadpool</StyledLink>
            <StyledLink to="/heros/hero/ironman">Iron Man</StyledLink>
            <StyledLink to="/heros/hero/doctorstrange">Doctor Strange</StyledLink>
            <StyledLink to="/heros/hero/hulk">Hulk</StyledLink>
            <StyledLink to="/heros/hero/spiderman">Spider-Man</StyledLink>
            <StyledLink to="/heros/hero/thor">Thor</StyledLink>
            <StyledLink to="/heros/hero/thanos">Thanos</StyledLink>
            <StyledLink to="/heros/hero/captainamerica">Kapitan Ameryka</StyledLink>
            <StyledLink to="/heros/hero/blackwidow">Czarna Wdowa</StyledLink>
          </Ul>
        <Container>
          <DivOne>
            <Img className="hero-pic" src={path} alt="The hero"/>
          </DivOne>
          <DivTwo>
            <H1 className="hero-name">
              {name}
              <button className="fav-btn">
                  <StyledLink2 to="/movies" >Filmy</StyledLink2>
                  <StyledLink2 to="/comics" >Komiksy</StyledLink2>
                <i className="fab fa-gratipay" title="Dodaj do ulubionych"/>
              </button>
            </H1>
            <P className="hero-desc">{ (this.state.details && this.state.details.description) || 'Work in progess' }</P>
          </DivTwo>
        </Container>
        </React.Fragment>
    )
  }
}

export default Hero