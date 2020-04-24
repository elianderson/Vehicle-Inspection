import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Inspections from './components/Inspections';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Inspections />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

