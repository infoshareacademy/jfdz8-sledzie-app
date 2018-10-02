import React, { Component, Fragment } from 'react'
import './Hero.css'
import styled from 'styled-components'
import { database } from '../../firebase';
import {Link} from "react-router-dom";

const Container = styled.div`
  width: 90%;
`
const ImgDiv = styled.div`
  width: 40%;
  height: 600px;
  float: left
`
const TextDiv = styled.div`
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
const HeroBar = styled(Link)`
  text-decoration: none;
  display: inline;
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
  font-size: 15px;
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
const FeatureBar = styled(Link) `
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

const FeaturesDiv = styled.div`
  display: flex;
  justify-content: flex-end
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
      <Fragment>
        <Link to="/heroes"><Button><span className="arrow left"/>Cofnij</Button></Link>
          <Ul>
            <HeroBar to="/hero/1009268">Deadpool</HeroBar>
            <HeroBar to="/hero/1009368">Iron Man</HeroBar>
            <HeroBar to="/hero/1009282">Doctor Strange</HeroBar>
            <HeroBar to="/hero/1009351">Hulk</HeroBar>
            <HeroBar to="/hero/1009610">Spider-Man</HeroBar>
            <HeroBar to="/hero/1009664">Thor</HeroBar>
            <HeroBar to="/hero/1009652">Thanos</HeroBar>
            <HeroBar to="/hero/1009220">Kapitan Ameryka</HeroBar>
            <HeroBar to="/hero/1009189">Czarna Wdowa</HeroBar>
          </Ul>
        <Container>
          <ImgDiv>
            <Img className="hero-pic" src={path} alt="The hero"/>
          </ImgDiv>
          <TextDiv>
              <H1 className="hero-name">{name}</H1>
              <FeaturesDiv>
                <FeatureBar to={`/hero/movies/${this.props.id}`} >Filmy</FeatureBar>
                <FeatureBar to={`/hero/comics/${this.props.id}`}>Komiksy</FeatureBar>
                <button className="fav-btn">
                  <i className="fab fa-gratipay" title="Dodaj do ulubionych"/>
                </button>
              </FeaturesDiv>
            <P className="hero-desc">{ (this.state.details && this.state.details.description) || 'Work in progress' }</P>
          </TextDiv>
        </Container>
      </Fragment>
    )
  }
}

export default Hero