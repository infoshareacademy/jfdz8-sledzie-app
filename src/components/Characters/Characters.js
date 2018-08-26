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

          <Route exact path="/" render={() => <p> Main Page</p> } />
          <Route path="/deadpool"
                 render={() => <Hero id={1009268}/>}
          />
          <Route path="/ironman"
                 render={() => <Hero id={1009368}/> }
          />
          <Route path="/doctorstrange"
                 render={() => <Hero id={1009282}/>}
          />
          <Route path="/blackpanther"
                 render={() => <Hero id={1009187}/> }
          />
          <Route path="/hulk"
                 render={() =><Hero id={1009351}/> }
          />
          <Route path="/spiderman"
                 render={() => <Hero id={1009610}/> }
          />
          <Route path="/thor"
                 render={() => <Hero id={1009664}/>}
          />
          <Route path="/thanos"
                 render={() => <Hero id={1009652}/> }
          />
          <Route path="/captainamerica"
                 render={() => <Hero id={1009220}/>}
          />
          <Route path="/blackwidow"
                 render={() => <Hero id={1009189}/>}
          />

        </ul>
      </div>
      </Router>

    )
  }
}

export default Characters