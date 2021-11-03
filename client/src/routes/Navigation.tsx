import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function Navigation(): ReactElement {
  return (
    <Router>
      <Switch>
        <h2>Navigation</h2>
      </Switch>
    </Router>
  );
}
