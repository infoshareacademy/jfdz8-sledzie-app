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
import MoviesMenu from '../MovieMenu/MovieMenu'
import Movies from "../Movies/Movies";
import Movie from '../Movie/Movie'


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

    const movies = [
        {id: 101, name: "Iron Man"},
        {id: 102, name: "Incredible Hulk"},
        {id: 103, name: "Iron Man 2"},
        {id: 104, name: "Thor"},
        {id: 105, name: "Captain America: The First Avenger"},
        {id: 106, name: "Avengers"},
        {id: 107, name: "Iron Man 3"},
        {id: 108, name: "Thor: The Dark World"},
        {id: 109, name: "Captain America: The Winter Soldier"},
        {id: 110, name: "Guardians of the Galaxy"},
        {id: 111, name: "Avengers: Age of Ultron"},
        {id: 112, name: "Ant-Man"},
    ]

    return (
      <div className="App">
        <Fragment>
          <Router>
            <Fragment>
              <LoginBar/>
              <NavMenu/>

              <Route exact path="/"/>
              <Route
                path="/heroes"
                render={() => <Characters />}
              />
              <Route
                path="/komiksy"
                render={() => <ComicsMenu />}
              />
              <Route
                path="/filmy"
                render={() => <MoviesMenu />}
              />
              {/*<Route*/}
                {/*path="/hero/1009268"*/}
                {/*render={() => <Hero id={1009268} name={"Deadpool"}/>}*/}
              {/*/>*/}
              {/*<Route*/}
                {/*path="/hero/1009368"*/}
                {/*render={() => <Hero id={1009368} name={"Ironman"}/>}*/}
              {/*/>*/}
              {/*<Route*/}
                {/*path="/hero/1009282"*/}
                {/*render={() => <Hero id={1009282} name={"Doctor Strange"}/>}*/}
              {/*/>*/}
              {/*<Route*/}
                {/*path="/hero/1009351"*/}
                {/*render={() =><Hero id={1009351} name={"Hulk"}/>}*/}
              {/*/>*/}
              {/*<Route*/}
                {/*path="/hero/1009610"*/}
                {/*render={() => <Hero id={1009610} name={"Spiderman"}/>}*/}
              {/*/>*/}
              {/*<Route*/}
                {/*path="/hero/1009664"*/}
                {/*render={() => <Hero id={1009664} name={"Thor"}/>}*/}
              {/*/>*/}
              {/*<Route*/}
                {/*path="/hero/1009652"*/}
                {/*render={() => <Hero id={1009652} name={"Thanos"}/>}*/}
              {/*/>*/}
              {/*<Route*/}
                {/*path="/hero/1009220"*/}
                {/*render={() => <Hero id={1009220} name={"Kapitan Ameryka"}/>}*/}
              {/*/>*/}
              {/*<Route*/}
                {/*path="/hero/1009189"*/}
                {/*render={() => <Hero id={1009189} name={"Czarna Wdowa"}/>}*/}
              {/*/>*/}
              {/*<Route*/}
                {/*path="/hero/comics/1009268"*/}
                {/*render={() => <Comics id={1009268}/>}*/}
              {/*/>*/}
              {/*<Route*/}
                {/*path="/hero/comics/1009368"*/}
                {/*render={() => <Comics id={1009368}/>}*/}
              {/*/>*/}
              <Route
                path="/LogIn"
                render={() => <LogIn />}
              />
              <Route
                path="/CreateAccount"
                render={() => <CreateAccount />}
              />
            {movies.map((movie => (
                <Fragment key={movie.id}>
                    <Route
                        path={`/movie/${movie.id}`}
                        render={() => <Movie id={movie.id}/>}
                    />
                </Fragment>
            )))}

            {heroes.map((hero => (
                <Fragment key={hero.id}>
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
