import React, { Component, Fragment } from 'react'
import {database} from "../../firebase";
import './Movies.css'
import styled from 'styled-components'
import filmwebImg from './filmweb_icon.jpg'
import imdbImg from './imdb.jpg'
import roundFilmweb from './roundfilmweb.jpg'
import roundImdb from './roundimdb.png'


const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap; 
  
   @media (min-width: 992px) {
  } 
`
const Wrapper = styled.div`
  flex: 1;
  overflow: hidden;
  position: relative;
  padding-bottom: 56.25%;
  
  @media (min-width: 992px) {
    
  }
    
`
const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
   @media (min-width: 992px) {
      
  }
`

const Feature = styled.div`
  padding-top: 50px;
  padding-bottom: 80px;
  overflow: hidden;
  height: auto;
  box-shadow: 10px 10px 5px #D3D3D3;
  position: relative

    @media (min-width: 992px) {
       
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
  
    @media (min-width: 992px) {
    display: inline;
    height: 4%;
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
      display:inline;   
      height: 4%;
        &:hover {
          opacity: 0.5 
      }
    )
`

const Div = styled.div`
  position: absolute;
  bottom: 0;
  right: 45%;
  padding-top: 20px;
  padding-bottom: 15px;

    @media (min-width: 992px) {
      display: none
    }
`
const RoundImdb = styled.img`
  height: 50px;
  padding-right: 15px;
`

const RoundFilmweb = styled.img`
  height: 50px
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
                        <Wrapper>
                          <Video  title="movie" allowFullScreen src={`https://www.youtube.com/embed/${movie.url}?showinfo=0`} />
                        </Wrapper>
                        <Feature>
                          <Title>{movie.title}{" "}{movie.year}</Title>
                          <a href={movie.imdb} target="_blank">
                            <ImdbImg src={imdbImg} alt="imdb.com"/>
                          </a>
                          <a href={movie.filmweb} target="_blank">
                            <FilmwebImg src={filmwebImg} alt="filmweb.pl"/>
                          </a>

                          <Div>
                            <a href={movie.imdb} target="_blank">
                              <RoundImdb src={roundImdb} alt="imdb.com"/>
                            </a>
                            <a href={movie.filmweb} target="_blank">
                              <RoundFilmweb src={roundFilmweb} alt="filmweb.pl"/>
                            </a>
                          </Div>


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