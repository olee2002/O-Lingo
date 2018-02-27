import React from 'react';
import { Route, Router } from 'react-router-dom'
import App from './App'
import Home from './Home/Home'
import Callback from './Callback/Callback'
import Auth from './Auth/Auth'
import history from './history'
import LanguageList from './Components/LanguageList'
import Language from './Components/Language'
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
