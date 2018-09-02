import React, { Component } from 'react';

class Hero extends Component {

  state = {
    hero: null
  };

  componentDidMount () {
    fetch(`https://gateway.marvel.com:443/v1/public/characters/${this.props.id}?apikey=5b4ca4fb9704024334914e17aabbb5a3`)
      .then(response => response.json())
      .then(payload => this.setState({hero: payload.data.results[0]}))
  };

  render() {
    const path = this.state.hero && `${this.state.hero.thumbnail.path}.${this.state.hero.thumbnail.extension}`
    return (
      <div>
        <img src={path} alt=""/>

      </div>
    )
  }
}

export default Hero