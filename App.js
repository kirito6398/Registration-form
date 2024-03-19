// Frontend: App.js or index.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import FormComponent from './FormComponent';
import Page2 from './page2';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Form</Link>
            </li>
            <li>
              <Link to="/page2">Page 2</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route path="/">
            <FormComponent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
