import React, {Component} from 'react'
import styled from 'styled-components'

const Video = styled.video`
    width: 100%;
    height: auto;
`

class VideoBackground extends Component {

  render () {
    return (
      <Video autoPlay muted loop>
        <source src="http://www.jdm-option.pl/marvel/Marvel_Intro_1080p.mp4" type="video/mp4"/>
      </Video>

    )
  }

}

export default VideoBackground