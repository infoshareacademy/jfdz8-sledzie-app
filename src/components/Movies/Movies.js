import React, { Component, Fragment } from 'react'
import {database} from "../../firebase";
import './Movies.css'
import styled from 'styled-components'
import image from './filmweb_icon.jpg'

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
  overflow: auto;
  height: 400px;
  margin-top: 80px;
  box-shadow: 10px 10px 5px #D3D3D3;
`

const Title = styled.div`
  margin-top: 40px;
  font-weight: bold;
  font-size: 25px;
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
const Img = styled.img`
  padding-top: 20px;
  width: 12%;
  height: auto;
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
                          <Title>{movie.title}{" "}{movie.year}</Title><br/>
                          <Director>Reżyseria: {movie.directedBy}</Director><br/>
                          <Description>{movie.description}</Description>
                          <a href={movie.filmweb} target="_blank"><Img src={image} alt="filmweb.pl"/></a>
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