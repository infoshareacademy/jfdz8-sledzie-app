import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Hero from '../Hero/Hero'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`

class Characters extends Component {

  render() {
    return (
      <React.Fragment>
      <Router>
      <div>
        <ul>
          <StyledLink to="/">Main</StyledLink>
          <StyledLink to="/hero/deadpool">Deadpool</StyledLink>
          <StyledLink to="/hero/ironman">Iron Man</StyledLink>
          <StyledLink to="/hero/doctorstrange">Doctor Strange</StyledLink>
          <StyledLink to="/hero/blackpanther">Black Panther</StyledLink>
          <StyledLink to="/hero/hulk">Hulk (Bruce Banner)</StyledLink>
          <StyledLink to="/hero/spiderman">Spider-Man</StyledLink>
          <StyledLink to="/hero/thor">Thor</StyledLink>
          <StyledLink to="/hero/thanos">Thanos</StyledLink>
          <StyledLink to="/hero/captainamerica">Captain America</StyledLink>
          <StyledLink to="/hero/blackwidow">Black Widow</StyledLink>
        </ul>

        <Route exact path="/"/>
        <Route path="/hero/deadpool"
               render={() => <Hero id={1009268}/>}
        />
        <Route path="/hero/ironman"
               render={() => <Hero id={1009368}/>}
        />
        <Route path="/hero/doctorstrange"
               render={() => <Hero id={1009282}/>}
        />
        <Route path="/hero/blackpanther"
               render={() => <Hero id={1009187}/>}
        />
        <Route path="/hero/hulk"
               render={() =><Hero id={1009351}/>}
        />
        <Route path="/hero/spiderman"
               render={() => <Hero id={1009610}/>}
        />
        <Route path="/hero/thor"
               render={() => <Hero id={1009664}/>}
        />
        <Route path="/hero/thanos"
               render={() => <Hero id={1009652}/>}
        />
        <Route path="/hero/captainamerica"
               render={() => <Hero id={1009220}/>}
        />
        <Route path="/hero/blackwidow"
               render={() => <Hero id={1009189}/>}
        />
      </div>

     </Router>
     </React.Fragment>

    )
  }
}

export default Characters