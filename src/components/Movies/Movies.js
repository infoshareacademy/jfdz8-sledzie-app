import React, { Component, Fragment } from 'react'
import {database} from "../../firebase";
import './Movies.css'
import styled from 'styled-components'
import filmwebImg from './filmweb_icon.jpg'
import imdbImg from './imdb.jpg'

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 40px;
`
const Video = styled.div`
  float: left;
  width: 50%;
`
const Feature = styled.div`
  padding-top: 50px;
  overflow: auto;
  height: 390px;
  margin-top: 80px;
  box-shadow: 10px 10px 5px #D3D3D3;
`

const Title = styled.p`
  font-weight: bold;
  font-size: 25px;
  display: inline
`

const Director = styled.div`
  font-size: 16px;
  font-style: italic;
  font-family: Montserrat, sans-serif;
`

const Description = styled.div`
  font-size: 18px;
  padding-right: 40px;
  text-align: justify; 
  font-family: Montserrat, sans-serif; 
`

const FilmwebImg = styled.img`
  width: auto;
  height: 8%;
  float: right;
`

const ImdbImg = styled.img`
  width: auto;
  height: 8%;
  float: right;
  padding-right: 40px
`

class Movies extends Component {

  state = {
    details: null
  }

  componentDidMount() {
    this.getMoviesDescriptions()
  }

  getMoviesDescriptions = () => {
    database.ref(`/heroes/${this.props.id}`)
      .once('value')
      .then(snapshot => {
        this.setState({details: snapshot.val()});
      });
  }

  render () {
      return (
        <Fragment>
          <div>
              {
                this.state.details && this.state.details.movies.map(
                  movie => (
                    <Fragment>
                      <Container>
                        <Video>
                          <iframe width="700" height="390"  allowFullScreen src={`https://www.youtube.com/embed/${movie.url}?showinfo=0`} />
                        </Video>
                        <Feature>
                          <Title>{movie.title}{" "}{movie.year}</Title>
                          <a href={movie.imdb} target="_blank">
                            <ImdbImg src={imdbImg} alt="imdb.com"/>
                          </a>
                          <a href={movie.filmweb} target="_blank">
                            <FilmwebImg src={filmwebImg} alt="filmweb.pl"/>
                          </a>
                          <br/>
                          <br/>
                          <Director>Reżyseria: {movie.directedBy}</Director><br/>
                          <Description>{movie.description}</Description>
                        </Feature>
                      </Container>
                    </Fragment>
                  ))
              }
          </div>
        </Fragment>


      )
  }

}

export default Movies