import React, { Component, Fragment } from 'react'
import './Comics.css'
import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px
  margin-top: 60px
`
const Img = styled.img`
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

const makeCoverUrl = comicBook => `${comicBook.thumbnail.path}.${comicBook.thumbnail.extension}`
const comicsTitle = comicBook => `${comicBook.title}`

class Comics extends Component {

  state = {
    comicBooks: []
  }

  componentDidMount () {
    fetch(`https://gateway.marvel.com:443/v1/public/characters/${this.props.id}/comics?apikey=5b4ca4fb9704024334914e17aabbb5a3`)
      .then(response => response.json())
      .then(payload => this.setState({comicBooks: payload.data.results}))
  }

  render() {
  const urlToDelete = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"

    return (
      <Fragment>
        <Div>
          {
            this.state.comicBooks.filter(
              comicBook => makeCoverUrl(comicBook) !== urlToDelete
            ).map(
              comicBook => (
                <ComicsWrapper>
                  <Img src={makeCoverUrl(comicBook)} alt=""/>
                  <Title>{comicsTitle(comicBook)}</Title>
                </ComicsWrapper>
              )
            )
          }
        </Div>
       </Fragment>
    )
  }
}

export default Comics