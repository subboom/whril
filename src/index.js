import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/global/index.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import InProgress from './pages/InProgress';
import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <InProgress />
        </Route>
        <Route path="/market">
          <Home />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
