import React, { Component } from 'react';
import './Characters.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Hero from '../Hero/Hero'

class Characters extends Component {

  // state = {
  //   characters: []
  // }

  render() {
    return (
      <Router>
      <div>
        <h1>Characters List</h1>
        <ul>
          <Link to="/">Main</Link>
          <Link to="/hero/deadpool">Deadpool</Link>
          <Link to="/hero/ironman">Iron Man</Link>
          <Link to="/hero/doctorstrange">Doctor Strange</Link>
          <Link to="/hero/blackpanther">Black Panther</Link>
          <Link to="/hero/hulk">Hulk (Bruce Banner)</Link>
          <Link to="/hero/spiderman">Spider-Man</Link>
          <Link to="/hero/thor">Thor</Link>
          <Link to="/hero/thanos">Thanos</Link>
          <Link to="/hero/captainamerica">Captain America</Link>
          <Link to="/hero/blackwidow">Black Widow</Link>
        </ul>

        <Route exact path="/" render={() => <p> Main Page</p> } />
        <Route path="/hero/deadpool" render={() => <Hero id={1009268}/>}/>
        <Route path="/hero/ironman"
               render={() => <Hero id={1009368}/> }
        />
        <Route path="/hero/doctorstrange"
               render={() => <Hero id={1009282}/>}
        />
        <Route path="/hero/blackpanther"
               render={() => <Hero id={1009187}/> }
        />
        <Route path="/hero/hulk"
               render={() =><Hero id={1009351}/> }
        />
        <Route path="/hero/spiderman"
               render={() => <Hero id={1009610}/> }
        />
        <Route path="/hero/thor"
               render={() => <Hero id={1009664}/>}
        />
        <Route path="/hero/thanos"
               render={() => <Hero id={1009652}/> }
        />
        <Route path="/hero/captainamerica"
               render={() => <Hero id={1009220}/>}
        />
        <Route path="/hero/blackwidow"
               render={() => <Hero id={1009189}/>}
        />


      </div>
      </Router>

    )
  }
}

export default Characters