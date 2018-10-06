import React, { Component, Fragment } from 'react'
import background from './comics_img.png'
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
  filter: brightness(70%);
    
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
  font-family: Montserrat, sans-serif; 
  text-transform: uppercase;
  color: black;
  font-size: 15px;
  font-weight: lighter;
  margin-left: 15px;
  margin-top: 20px;
  background: white;
  cursor: pointer;
 
    &:focus {
     outline:0;
    }
  
    &:hover {
    font-weight: bolder
    }
`

const ComicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px
  margin-top: 60px
`

const CoverImg = styled.img`
  margin: 15px;
  width: 450px;
  padding-top: 20px;
  height: auto;
  box-shadow: 10px 10px 5px #D3D3D3;
  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.5s;
  
    &:hover {
      margin-top: -2px;
      opacity: 0.8
    }
    
    @media (min-width: 992px) {
      width: 300px;
    }
`

const ComicsWrapper = styled.div`
  text-align: center;
  padding-top: 10px

  @media (min-width: 992px) {
    width: 400px;
  }
`

const Title = styled.div`
  font-weight: bolder;
  font-size: 20px;
`

const coverUrl = comics => `${comics.thumbnail.path}.${comics.thumbnail.extension}`
const comicsTitle = comics => `${comics.title}`

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
          <Link to="/"><Button><span className="arrow left"/>Wróć do: główna</Button></Link>
        <ComicsContainer>
            {
                this.state.comicsList.filter(
                    comics => coverUrl(comics) !== urlToDelete
                ).map(
                comics => (
                    <ComicsWrapper>
                      <CoverImg src={coverUrl(comics)} />
                      <Title>{comicsTitle(comics)}</Title>
                    </ComicsWrapper>
                )
            )}
        </ComicsContainer>
      </Fragment>
    )
  }

}

export default ComicsMenu