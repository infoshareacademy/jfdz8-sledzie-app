import React, { Component, Fragment } from 'react'
import './Comics.css'
import styled from 'styled-components'


const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap
`


const Img = styled.img`
  margin: 15px;
  box-shadow: 10px 10px 5px #D3D3D3;
  
    &:hover {
      margin-top: -2px;
      opacity: 0.8
    }
`

class Comics extends Component {

  state = {
    comics: null
  }

  componentDidMount () {
    fetch(`https://gateway.marvel.com:443/v1/public/characters/${this.props.id}/comics?apikey=5b4ca4fb9704024334914e17aabbb5a3`)
      .then(response => response.json())
      .then(payload => this.setState({comics: payload.data.results[2]}))
  }

  render() {
    // const title = this.state.comics && `${this.state.comics.title}`
    // const description = this.state.comics && `${this.state.comics.description}`

    const cover = this.state.comics && `${this.state.comics.thumbnail.path}.${this.state.comics.thumbnail.extension}`

    return (
      <Fragment>
        <Div>
          <div><Img src={cover} alt=""/></div>
          <div><Img src={cover} alt=""/></div>
          <div><Img src={cover} alt=""/></div>
          <div><Img src={cover} alt=""/></div>
        </Div>


        {/*<div>*/}
          {/*<div>*/}
            {/*<h1>{title}</h1>*/}
          {/*<div>*/}
            {/*<p>{description}</p>*/}
          {/*</div>*/}
        {/*</div>*/}

      </Fragment>
    )
  }
}

export default Comics