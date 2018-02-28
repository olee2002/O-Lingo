import React, { Component } from 'react'
import styled from 'styled-components'
import './App.css';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      
          <div id="navbuttons">

            <button
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </button>
            {
              !isAuthenticated() && (
                <button
                  onClick={this.login.bind(this)}>
                  Log In
                  </button>
              )
            }
            {
              isAuthenticated() && (
                <button
                  onClick={this.goTo.bind(this, 'profile')}>
                  Profile
                  </button>
              )
            }
            {
              isAuthenticated() && (
                <button
                  onClick={this.goTo.bind(this, 'lessons')}>
                  Lessons
                  </button>
              )
            }
            {
              isAuthenticated() && (
                <button
                  onClick={this.goTo.bind(this, 'googlemap')}>
                  Map
                  </button>
              )
            }
            {
              isAuthenticated() && (
                <button
                  onClick={this.logout.bind(this)} >
                  Log Out
                  </button>
              )
            }
          </div>
       
    );
  }
}

export default App;

///////////////////////////////////////////////////////////////////////////////
//// STYLED-COMPONENTS
///////////////////////////////////////////////////////////////////////////////



