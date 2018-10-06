import React, { Component, Fragment } from 'react'
import {database} from "../../firebase";
import './Movie.css'
import styled from 'styled-components'
import filmwebImg from '../Movies/filmweb_icon.jpg'
import imdbImg from '../Movies/imdb.jpg'


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
  font-size: 18px;
  padding-right: 40px;
  text-align: justify; 
  font-family: Montserrat, sans-serif; 
`

const FilmwebImg = styled.img`
  width: auto;
  height: 8%;
  float: right;
  
  &:hover {
    opacity: 0.5 
  }
`

const ImdbImg = styled.img`
  width: auto;
  height: 8%;
  float: right;
  padding-right: 40px;
  
   &:hover {
    opacity: 0.5 
  }
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
              <Video>
                <iframe width="700" height="390" title="movie" allowFullScreen src={`https://www.youtube.com/embed/${this.state.details && this.state.details.url.toString()}?showinfo=0`} />
              </Video>
              <Feature>
                <Title>{ this.state.details && this.state.details.title.toString() }{" "}{ this.state.details && this.state.details.year.toString() }</Title>
                <a href={ this.state.details && this.state.details.imdb.toString() } target="_blank">
                  <ImdbImg src={imdbImg} alt="imdb.com"/>
                </a>
                <a href={ this.state.details && this.state.details.filmweb.toString() } target="_blank">
                  <FilmwebImg src={filmwebImg} alt="filmweb.pl"/>
                </a>
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