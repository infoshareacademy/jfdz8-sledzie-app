import React, { Component } from 'react';

class Characters extends Component {

  state = {
    characters: []
  };


  componentDidMount () {
    fetch("https://gateway.marvel.com:443/v1/public/characters?apikey=5b4ca4fb9704024334914e17aabbb5a3")
      .then(response => response.json())
      .then(payload => this.setState({characters: payload.data.results}))
  };

  render() {
    return (
<div>
  <h1>Characters List</h1>
  <ul>
    {this.state.characters.map(character => (
      <li key={character.id}>{character.name}</li>
    ))}
  </ul>
</div>


    )
  }
}

export default Characters