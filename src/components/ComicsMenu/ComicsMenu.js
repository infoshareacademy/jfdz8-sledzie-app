import React, { Component, Fragment } from 'react'
import background from '../Characters/images/bg4.png'
import './ComicsMenu.css'
import styled from 'styled-components'
import {Link} from "react-router-dom";




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
const Button = styled.button`
  text-transform: uppercase;
  color: black;
  font-size: 15px;
  font-weight: lighter;
  margin-left: 15px;
  margin-top: 20px;
  background: white;
 
    &:focus {
     outline:0;
    }
  
    &:hover {
    font-weight: bolder
    }
`

const coverUrl = comics => `${comics.thumbnail.path}.${comics.thumbnail.extension}`

class ComicsMenu extends Component {

  state = {
    comicsList: []
  }

  componentDidMount () {
    fetch(`https://gateway.marvel.com/v1/public/comics?limit=100&apikey=5b4ca4fb9704024334914e17aabbb5a3`)
      .then(response => response.json())
      .then(payload => this.setState({comicsList: payload.data.results}))
  }

  render() {
      const urlToDelete = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"

    return(
      <Fragment>
          <Header>
              <Img src={background} alt=""/>
              <H1>Komiksy</H1>
          </Header>
          <Link to="/"><Button><span className="arrow left"/>Powrót</Button></Link>
        <div>
            {
                this.state.comicsList.filter(
                    comics => coverUrl(comics) !== urlToDelete
                ).map(
                comics => (
                    <div className="comics_container">
                        <img src={coverUrl(comics)} />
                        {/*<h3>{comics.title}</h3>*/}
                    </div>
                )
            )}
        </div>
      </Fragment>
    )
  }

}

export default ComicsMenu