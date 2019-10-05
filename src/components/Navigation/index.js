import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { TimelinePage, Index as IndexPage } from '../pages';
import Navbar from './Navbar';

function Navigation() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/timeline">
          <TimelinePage />
        </Route>
        <Route path="/">
          <IndexPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default Navigation;
