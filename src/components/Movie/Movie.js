import React, { Component, Fragment } from 'react'
import {database} from "../../firebase";
import styled from 'styled-components'
import filmwebImg from '../Movies/filmweb_icon.jpg'
import imdbImg from '../Movies/imdb.jpg'
import roundFilmweb from '../Movies/roundfilmweb.jpg'
import roundImdb from '../Movies/roundimdb.png'

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  margin-top: 50px
  
  @media (min-width: 992px) {
    flex-direction: row;
    margin-top: 100px
    }
  } 
`
const LinkWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 100%);
  padding-bottom: 15px;
    
  @media (min-width: 992px) {
    top: 5px;
    right: 5px;
    bottom: auto;
    left: auto;
    transform: none;
    padding-bottom: 0;
  }
`

const MovieWrapper = styled.div`
  overflow: hidden;
  position: relative;
  padding-bottom: 56.25%;
  
  @media (min-width: 992px) {
    flex: 1;
    padding-right: 30px;
  }
`

const FlexMovieWrapper = styled.div`
  @media (min-width: 992px) {
    flex: 1;
    padding-right: 30px;
  }
`

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Feature = styled.div`
  padding-top: 20px;
  padding-bottom: 80px;
  box-shadow: 10px 10px 5px #D3D3D3;
  
  @media (min-width: 992px) {
    flex: 1;
    padding-bottom: 15px;
    position: relative;
  }
`

const Title = styled.p`
  font-family: Marvel, sans-serif;
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
  font-size: 16px;
  padding-right: 40px;
  text-align: justify; 
  font-family: Montserrat, sans-serif; 
  
  @media (min-width: 992px) {
    font-size: 18px;
  }
`

const FilmwebImg = styled.img`
  display: none
  width: auto;
  height: 4%;
  float: right;
  padding-bottom: 10px;
  
  @media (min-width: 992px) {
    padding-top: 20px;
    display: inline;
    height: 50px;
    
      &:hover {
        opacity: 0.5 
    }
  }
`

const ImdbImg = styled.img`
  display: none;
  width: auto;
  height: 4%;
  float: right;
  padding-right: 40px;
 
  
  @media (min-width: 992px) { 
    padding-top: 20px;
    display:inline;   
    height: 50px;
  
      &:hover {
        opacity: 0.5 
      }
  }
`

const Div = styled.div`
  position: absolute;
  right: 10%;

  @media (min-width: 992px) {
    display: none
  }
`
const RoundImdb = styled.img`
  height: 40px;
  padding-right: 15px;
`

const RoundFilmweb = styled.img`
  height: 40px
`

class Movie extends Component {

  state = {
    details: null
  }

  componentDidMount() {
    this.getMoviesDescriptions()
  }

  getMoviesDescriptions = () => {
    database.ref(`/movies/${this.props.id}`)
      .once('value')
      .then(snapshot => {
        this.setState({details: snapshot.val()});
      });
  }

  render () {
    return (
      <Fragment>
        <div>
          <Fragment>
            <Container>
              <FlexMovieWrapper>
                <MovieWrapper>
                  <Video title="movie" allowFullScreen src={`https://www.youtube.com/embed/${this.state.details && this.state.details.url.toString()}?showinfo=0`} />
                </MovieWrapper>
              </FlexMovieWrapper>
              <Feature>
                <Title>{ this.state.details && this.state.details.title.toString() }{" "}{ this.state.details && this.state.details.year.toString() }</Title>
                <LinkWrapper>
                  <a href={ this.state.details && this.state.details.imdb.toString() } target="_blank">
                    <ImdbImg src={imdbImg} alt="imdb.com"/>
                  </a>
                  <a href={ this.state.details && this.state.details.filmweb.toString() } target="_blank">
                    <FilmwebImg src={filmwebImg} alt="filmweb.pl"/>
                  </a>
                </LinkWrapper>
                <Div>
                  <a href={ this.state.details && this.state.details.filmweb.toString() } target="_blank">
                    <RoundImdb src={roundImdb} alt="imdb.com"/>
                  </a>
                  <a href={ this.state.details && this.state.details.imdb.toString() } target="_blank">
                    <RoundFilmweb src={roundFilmweb} alt="filmweb.pl"/>
                  </a>
                </Div>
                <br/>
                <br/>
                <Director>Reżyseria: { this.state.details && this.state.details.directedBy.toString() }</Director><br/>
                <Description>{ this.state.details && this.state.details.description.toString() }</Description>
              </Feature>
            </Container>
          </Fragment>
        </div>
      </Fragment>
    )
  }
}

export default Movie