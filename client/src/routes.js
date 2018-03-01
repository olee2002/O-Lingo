import React from 'react';
import { Redirect, Route, Router, BrowserRouter } from 'react-router-dom'
import App from './App'
import Home from './Home/Home'
import Profile from './Profile/Profile';
import Callback from './Callback/Callback'
import Auth from './Auth/Auth'
import history from './history'
import LanguageList from './Components/LanguageList'
import PropTypes from 'prop-types'
import { LocaleProvider } from 'react-translations'
import Homepage from './Home/Homepage'
import MapContainer from './Components/MapContainer'

const auth = new Auth();

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Route path="/" render={(props) => <App auth={auth} {...props} />} />
        <Route exact path="/home" render={(props) => <Home auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
          console.log("Authenticating User")
          handleAuthentication(props)
          console.log("User authenticated. Redirecting to Callback page.")

          return <Callback {...props} />
        }} />
        <Route exact path="/profile" render={(props) => (
          !auth.isAuthenticated() ? (
            <Redirect to="/home" />
          ) : (
              <Profile auth={auth} {...props} />
            )
        )} />
        <Route exact path="/googlemap" render={(props) => (
          !auth.isAuthenticated() ? (
            <Redirect to="/home" />
          ) : (
              <MapContainer {...props} />
            )
        )} />
        <Route exact path="/lessons" render={(props) => (
          !auth.isAuthenticated() ? (
            <Redirect to="/home" />
          ) : (
              <LanguageList {...props} />
            )
        )} />
       
      </div>
    </Router>
  );
}
