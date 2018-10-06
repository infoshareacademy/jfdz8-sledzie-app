import React, {Component, Fragment} from 'react'
import './App.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LoginBar from '../LoginBar/LoginBar'
import NavMenu from '../NavMenu/NavMenu';
import Characters from "../Characters/Characters";
import Hero from '../Hero/Hero'
import Comics from '../Comics/Comics'
import LogIn from "../LogIn/LogIn";
import CreateAccount from "../CreateAccount/CreateAccount";
import ComicsMenu from '../ComicsMenu/ComicsMenu'
import Movies from "../Movies/Movies";
import VideoBackground from "../Video_Background/VideoBackground"
import MoviesMenu from "../MoviesMenu/MoviesMenu";


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
              <LoginBar/>
              <NavMenu/>

              <Route exact path="/"
              render={() => <VideoBackground/>}/>
              <Route
                path="/LogIn"
                render={() => <LogIn />}
              />
              <Route
                path="/CreateAccount"
                render={() => <CreateAccount/>}
              />
              <Route
                key={Date.now()}
                path="/heroes"
                render={() => <Characters/>}
              />
              <Route
                path="/comics"
                render={() => <ComicsMenu/>}
              />
              <Route
                path="/movies"
                render={() => <MoviesMenu/>}
              />

            {heroes.map((hero => (
                <Fragment key={hero.id}>
                  <Route
                    path={`/hero/${hero.id}` }
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
