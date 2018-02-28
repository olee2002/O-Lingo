import React, { Component } from 'react'
import YouTube from 'react-youtube'

class Youtube extends Component {


  render() {
    const onReady = (event) => {
      // access to player in all event handlers via event.target
      event.target.pauseVideo();
    }

    const opts = {
      height: '360',
      width: '540',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    }

    return (
      <YouTube
        videoId="2g811Eo7K8U"
        opts={opts}
        onReady={this._onReady}
      />
    )
  }
}
export default Youtube;