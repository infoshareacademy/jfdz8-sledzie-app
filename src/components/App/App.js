import React, { Component, Fragment } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LoginBar from '../LoginBar/LoginBar'
import NavMenu from '../NavMenu/NavMenu';
import Characters from "../Characters/Characters";
import Hero from '../Hero/Hero'
import Comics from '../Comics/Comics'

class App extends Component {

  render() {
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
                path="/hero/1009268"
                render={() => <Hero id={1009268} name={"Deadpool"}/>}
              />
              <Route
                path="/hero/1009368"
                render={() => <Hero id={1009368} name={"Ironman"}/>}
              />
              <Route
                path="/hero/1009282"
                render={() => <Hero id={1009282} name={"Doctor Strange"}/>}
              />
              <Route
                path="/hero/1009351"
                render={() =><Hero id={1009351} name={"Hulk"}/>}
              />
              <Route
                path="/hero/1009610"
                render={() => <Hero id={1009610} name={"Spiderman"}/>}
              />
              <Route
                path="/hero/1009664"
                render={() => <Hero id={1009664} name={"Thor"}/>}
              />
              <Route
                path="/hero/1009652"
                render={() => <Hero id={1009652} name={"Thanos"}/>}
              />
              <Route
                path="/hero/1009220"
                render={() => <Hero id={1009220} name={"Kapitan Ameryka"}/>}
              />
              <Route
                path="/hero/1009189"
                render={() => <Hero id={1009189} name={"Czarna Wdowa"}/>}
              />


              <Route
                path="/hero/comics/1009268"
                render={() => <Comics id={1009268}/>}
              />
              <Route
                path="/hero/comics/1009368"
                render={() => <Comics id={1009368}/>}
              />
              <Route
                path="/hero/comics/1009282"
                render={() => <Comics id={1009282}/>}
              />
              <Route
                path="/hero/comics/1009351"
                render={() => <Comics id={1009351}/>}
              />
              <Route
                path="/hero/comics/1009610"
                render={() => <Comics id={1009610}/>}
              />
              <Route
                path="/hero/comics/1009664"
                render={() => <Comics id={1009664}/>}
              />
              <Route
                path="/hero/comics/1009652"
                render={() => <Comics id={1009652}/>}
              />
              <Route
                path="/hero/comics/1009220"
                render={() => <Comics id={1009220}/>}
              />
              <Route
                path="/hero/comics/1009189"
                render={() => <Comics id={1009189}/>}
              />





              {/*<Route*/}
                {/*path="/comics"*/}
                {/*render={() => <Comics/>}*/}
              {/*/>*/}
              {/*<Route*/}
                {/*path="/movies"*/}
                {/*render={() => <Movies/>}*/}
              {/*/>*/}
            </Fragment>
          </Router>
        </Fragment>
      </div>
    );
  }
}

export default App;
