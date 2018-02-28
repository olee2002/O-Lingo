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
      <div>
        <div id="navbar">

          <div id="navbutton"
            onClick={this.goTo.bind(this, 'home')}
          >
            <img id="icon" src="./image/home.png" /> Home
            </div>
          {
            !isAuthenticated() && (
              <div id="navbutton"
                onClick={this.login.bind(this)}>
                <img id="icon" src="./image/login.png" /> Log In
                  </div>
            )
          }
          {
            isAuthenticated() && (
              <div id="navbutton"
                onClick={this.goTo.bind(this, 'profile')}>
                <img id="icon" src="./image/profile.png" /> Profile
                  </div>
            )
          }
          {
            isAuthenticated() && (
              <div id="navbutton"
                onClick={this.goTo.bind(this, 'lessons')}>
                <img id="icon" src="./image/lesson.png" />Lessons
                  </div>
            )
          }
          {
            isAuthenticated() && (
              <div id="navbutton"
                onClick={this.goTo.bind(this, 'googlemap')}>
                <img id="icon" src="./image/map.svg" />Map
                  </div>
            )
          }
          {
            isAuthenticated() && (
              <div id="navbutton"
                onClick={this.logout.bind(this)} >
                <img id="icon" src="./image/logout.png" />Log Out
                  </div>
            )
          }
        </div>
        <div id="footer">
          <img id="icon" src="./image/cat.png" />
          Copyright © 2018, O-Lingo App, LLC All Rights Reserved.
        <div>
            <a href="https://github.com/olee2002/O-Lingo" target="_blank" title="GitHub">
              <img id="icon" src="./image/github.svg" />github</a>
          </div>
          <div>
            <a href="mailto:babylee2002@gmail.com" target="" title="Email">
              <img id="icon" src="./image/mail.png" />mail</a>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

///////////////////////////////////////////////////////////////////////////////
//// STYLED-COMPONENTS
///////////////////////////////////////////////////////////////////////////////



