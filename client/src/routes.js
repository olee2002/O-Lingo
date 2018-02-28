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
import LessonBox from './Components/LessonBox'

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
        <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
        <Route path="/profile" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Profile auth={auth} {...props} />
            )
          )} />
        
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} />
        }} />
        {/* <Route path="/home/languages" component={LanguageList} />
        <Route path="/home/languages/:languageId" component={Language} />
        <Route path="/home/languages/:languageId/lessons" component={LessonBox} /> */}
      </div>
    </Router>
  );
}
export function ClientRouter ({ locale }) {
  return (
    <BrowserRouter>
      <TranslateApp locale={locale}/>
    </BrowserRouter>
  )
}

export function TranslateApp ({ locale }) {
  return (
    <LocaleProvider locale={locale}>
      <Route path="/:locale" component={Homepage}/>
    </LocaleProvider>
  )
}

ClientRouter.propTypes = {
  locale: PropTypes.string.isRequired,
}
App.propTypes = {
  locale: PropTypes.string.isRequired,
}
