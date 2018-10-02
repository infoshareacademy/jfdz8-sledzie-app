import React, { Component, Fragment } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginBar from '../LoginBar/LoginBar'
import NavMenu from '../NavMenu/NavMenu';
import Characters from "../Characters/Characters";
import Hero from '../Hero/Hero'
import Comics from '../Comics/Comics'
import ComicsMenu from '../ComicsMenu/ComicsMenu'
import Movies from "../Movies/Movies";


class App extends Component {

  render() {

    const heroes = [
          {id: 1009268, name: "Deadpool"},
          {id: 1009368, name: "Ironman"},
          {id: 1009282, name: "Doctor Strange"},
          {id: 1009351, name: "Hulk"},
          {id: 1009610, name: "Spider-Man"},
          {id: 1009664, name: "Thor"},
          {id: 1009652, name: "Thanos"},
          {id: 1009220, name: "Kapitan Ameryka"},
          {id: 1009189, name: "Czarna Wdowa"}
      ]

    return (
      <div className="App">
        <Fragment>
          <Router>
            <Fragment>
              <LoginBar />
              <NavMenu />
              <Route exact path="/"/>
              <Route
                path="/heroes"
                render={() => <Characters />}
              />
              <Route
                path="/komiksy"
                render={() => <ComicsMenu />}
              />

            {heroes.map((hero => (
                <Fragment>
                  <Route
                    path={`/hero/${hero.id}`}
                    render={() => <Hero id={hero.id} name={hero.name}/>}
                  />
                  <Route
                    path={`/hero/comics/${hero.id}`}
                    render={() => <Comics id={hero.id}/>}
                  />
                  <Route
                    path={`/hero/movies/${hero.id}`}
                    render={() => <Movies id={hero.id}/>}
                  />
                </Fragment>
              )))}

            </Fragment>
          </Router>
        </Fragment>
      </div>
    );
  }
}

export default App;
