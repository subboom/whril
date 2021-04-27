import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/global/index.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import InProgress from './pages/InProgress';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/">
          <InProgress />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
