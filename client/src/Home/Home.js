import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'
import MapContainer from '../Components/MapContainer.js'
import LanguageList from '../Components/LanguageList.js'


class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
              <div>
              <h4>You are logged in!</h4>
              <br/>
              <h4>Choose the language to practice.</h4>
              <LanguageList/><br/>
              <br/>
                <h4>My Google Map Location</h4>
                <br/>
                <MapContainer/>
              </div>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.login.bind(this)}>
                  Log In
                </a>
                {' '}to continue.
              </h4>
            )
        }
      </div>
    );
  }
}

export default Home
