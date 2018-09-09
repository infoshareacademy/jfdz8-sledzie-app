import React, { Component } from 'react'
import styled from 'styled-components'
import { database } from '../../firebase';

const Img = styled.img`
  width: 30%;
  height: auto;
  margin-left: 50px;
  padding-top: 40px;
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
        debugger;
        this.setState({details: snapshot.val()});
      });
  }

  render() {
    const path = this.state.hero && `${this.state.hero.thumbnail.path}.${this.state.hero.thumbnail.extension}`
    const name = this.props.name
    return (
      <React.Fragment>
        <div>
          <h1>{name}</h1>
          <p>{ (this.state.details && this.state.details.description) || 'Work in progess' }</p>
        </div>
        <div>
          <Img src={path} alt="The hero"/>
        </div>
        </React.Fragment>
    )
  }
}

export default Hero