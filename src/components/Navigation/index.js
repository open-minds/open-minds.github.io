import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Timeline, Index } from '../pages';
import Navbar from './Navbar';

function Navigation() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/timeline">
          <Timeline />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  );
}

export default Navigation;
