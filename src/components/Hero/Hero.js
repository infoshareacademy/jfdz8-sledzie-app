import React, { Component } from 'react';

class Hero extends Component {

    state = {
      hero: []
    };

    componentDidMount () {
      fetch(`https://gateway.marvel.com:443/v1/public/characters/${this.props.id}?apikey=5b4ca4fb9704024334914e17aabbb5a3`)
        .then(response => response.json())
        .then(payload => this.setState({hero: payload.data.results}))
    };

  render() {
      return (

      <div>

      </div>

      )
  }


}

export default Hero