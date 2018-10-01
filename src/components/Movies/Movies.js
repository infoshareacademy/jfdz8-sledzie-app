import React, { Component, Fragment } from 'react'
import {database} from "../../firebase";

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
                      <div>{movie.title}{" "}{movie.year}</div>
                      <br/>
                      <div>Reżyseria: {movie.directedBy}</div>
                      <br/>
                      <div>{movie.description}</div>
                      <iframe src={`https://www.youtube.com/embed/${movie.url}`} />
                    </Fragment>
                  ))
              }
          </div>
        </Fragment>


      )
  }

}

export default Movies