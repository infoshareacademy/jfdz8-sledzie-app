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
  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.5s;
  
    &:hover {
      margin-top: -2px;
      opacity: 0.8
    }
`
const makeCoverUrl = comicBook => `${comicBook.thumbnail.path}.${comicBook.thumbnail.extension}`

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
                <div>
                  <Img src={makeCoverUrl(comicBook)} alt=""/>
                </div>
              )
            )
          }
        </Div>
       </Fragment>
    )
  }
}

export default Comics