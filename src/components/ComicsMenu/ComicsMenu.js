import React, { Component, Fragment } from 'react'


class ComicsMenu extends Component {

  state = {
    comicsList: []
  }
  componentDidMount () {
    fetch(`https://gateway.marvel.com:443/v1/public/comics?apikey=5b4ca4fb9704024334914e17aabbb5a3`)
      .then(response => response.json())
      .then(payload => this.setState({comicsList: payload.data.results}))
  }

  render() {
    return(
      <Fragment>
        <div>
          asdsadsad
        </div>
      </Fragment>
    )
  }

}

export default ComicsMenu