import React, { Component, Fragment } from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import LoginBar from '../LoginBar/LoginBar'
import Characters from "../Characters/Characters";
import Hero from '../Hero/Hero'


class App extends Component {
  render() {

    return (
      <div className="App">
        <Router>
          <Fragment>
            <LoginBar />
            <Route path="/heros"
                   render={() => <Characters />}
            />
            <Route exact path="/"/>
            <Route path="/heros/hero/deadpool"
                   render={() => <Hero id={1009268} name={"Deadpool"}/>}
            />
            <Route path="/heros/hero/ironman"
                   render={() => <Hero id={1009368} name={"Ironman"}/>}
            />
            <Route path="/heros/hero/doctorstrange"
                   render={() => <Hero id={1009282} name={"Doctor Strange"}/>}
            />
            <Route path="/heros/hero/blackpanther"
                   render={() => <Hero id={1009187} name={"Black Panther"}/>}
            />
            <Route path="/heros/hero/hulk"
                   render={() =><Hero id={1009351} name={"Hulk"}/>}
            />
            <Route path="/heros/hero/spiderman"
                   render={() => <Hero id={1009610} name={"Spiderman"}/>}
            />
            <Route path="/heros/hero/thor"
                   render={() => <Hero id={1009664} name={"Thor"}/>}
            />
            <Route path="/heros/hero/thanos"
                   render={() => <Hero id={1009652} name={"Thanos"}/>}
            />
            <Route path="/heros/hero/captainamerica"
                   render={() => <Hero id={1009220} name={"Captain America"}/>}
            />
            <Route path="/heros/hero/blackwidow"
                   render={() => <Hero id={1009189} name={"Black Widow"}/>}
            />
            <Route path="/heros/hero/loki"
                   render={() => <Hero id={1009407} name={"Loki"}/>}
            />

          </Fragment>

        </Router>
      </div>
    );
  }
}

export default App;
