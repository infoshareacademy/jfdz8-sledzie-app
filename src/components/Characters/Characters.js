import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import background2 from './background.jpg'
import Hero from '../Hero/Hero'
import styled from 'styled-components'

const Header = styled.header`
  height: 250px;
  width: 100%;
  overflow: hidden;
`

const Img = styled.img`
  object-fit: contain
`

const Div = styled.div`
  margin-top: 40px;
`
const Ul = styled.div`
  text-align: center;
  margin-top: 20px;
  font-weight: bolder;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding-right: 15px;  
  padding-top: 15px;
  font-size: 25px
  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  transition:.5s;
  
    &:hover {
    color: red;
    }
`
const Button = styled.button`

  text-transform: uppercase;
  font-size: 15px;
  color: red;
  font-size: 25px;
  font-weight: bolder;
  margin-left: 15px;
  background: white;
`
class Characters extends Component {

  render() {
    return (
      <React.Fragment>
        <Header>
          <Img src={background2} alt=""/>
        </Header>
        <Router>
        <Div>
          <Ul>
            <StyledLink to="/hero/deadpool">Deadpool</StyledLink>
            <StyledLink to="/hero/ironman">Iron Man</StyledLink>
            <StyledLink to="/hero/doctorstrange">Doctor Strange</StyledLink>
            <StyledLink to="/hero/blackpanther">Black Panther</StyledLink>
            <StyledLink to="/hero/hulk">Hulk</StyledLink>
            <StyledLink to="/hero/spiderman">Spider-Man</StyledLink>
            <StyledLink to="/hero/thor">Thor</StyledLink>
            <StyledLink to="/hero/thanos">Thanos</StyledLink>
            <StyledLink to="/hero/captainamerica">Captain America</StyledLink>
            <StyledLink to="/hero/blackwidow">Black Widow</StyledLink>
            <StyledLink to="/hero/loki">Loki</StyledLink>
            <StyledLink to="/"><Button>Powrót</Button></StyledLink> <br/>
          </Ul>

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
          <Route path="/hero/loki"
                 render={() => <Hero id={1009407}/>}
          />
        </Div>

       </Router>
     </React.Fragment>

    )
  }
}

export default Characters