import React, { Component } from 'react';

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
        <div>
          <div>

            <a href="/"> Welcome to O-Lingo!</a>

            <button

              className="btn-margin"
              onClick={this.goTo.bind(this,'home')}
            >
              Home
            </button>
            {
              !isAuthenticated() && (
                <button
                  id="qsLoginBtn"

                  className="btn-margin"
                  onClick={this.login.bind(this)}>
                  Log In
                  </button>
              )
            }
            {
              isAuthenticated() && (
                <button
                  id="qsLogoutBtn"

                  className="btn-margin"
                  onClick={this.logout.bind(this)}
                >
                  Log Out
                  </button>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
