import React, { Component } from 'react'
import './Comics.css'
import styled from 'styled-components'
import {Link} from "react-router-dom";


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

const Button = styled.button`
  text-transform: uppercase;
  color: black;
  font-size: 15px;
  font-weight: lighter;
  margin-left: 15px;
  margin-bottom: 25px;
  background: white;
 
    &:focus {
     outline:0;
    }
  
    &:hover {
    font-weight: bolder
    }
`

class Comics extends Component {

  state = {
    comic: null
  }

  componentDidMount () {
    fetch(`https://gateway.marvel.com:443/v1/public/characters/1009268/comics?apikey=5b4ca4fb9704024334914e17aabbb5a3`)
      .then(response => response.json())
      .then(payload => this.setState({comic: payload.data.results[7]}))
  }

  render() {
    // const title = this.state.comic && `${this.state.comic.title}`
    // const description = this.state.comic && `${this.state.comic.description}`

    const cover = this.state.comic && `${this.state.comic.thumbnail.path}.${this.state.comic.thumbnail.extension}`

    return (
      <React.Fragment>
        <div>
          <Link to="/heros/hero/deadpool"><Button><span className="arrow left"/>Cofnij</Button></Link>
        </div>
        <Div>
          <div><Img src={cover} alt=""/></div>
          <div><Img src={cover} alt=""/></div>
          <div><Img src={cover} alt=""/></div>
          <div><Img src={cover} alt=""/></div>
          <div><Img src={cover} alt=""/></div>
          <div><Img src={cover} alt=""/></div>
          <div><Img src={cover} alt=""/></div>
          <div><Img src={cover} alt=""/></div>
          <div><Img src={cover} alt=""/></div>
          <div><Img src={cover} alt=""/></div>
          <div><Img src={cover} alt=""/></div>
          <div><Img src={cover} alt=""/></div>
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

      </React.Fragment>
    )
  }
}

export default Comics