import React, {Component} from 'react'
import styled from 'styled-components'

const Video = styled.video`
    width: auto%;
    height: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    z-index: -100;
    transform: translateX(-50%) translateY(-50%);
    background-size: cover;
    transition: 1s opacity;
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