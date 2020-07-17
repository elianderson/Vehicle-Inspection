import { ReactQueryDevtools } from 'react-query-devtools'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navigation from './components/Navigation';
import Inspection from './components/Inspection';
import NewInspection from './components/NewInspection';
import Inspections from './components/Inspections';

function App() {
  return (
    <>
      <header className="pagelet">
        <h1><span className="visually-hidden">Phoenix Motors</span></h1>
      </header>
      <div className="pagelet">
        <Navigation />
        <Router>
          <Switch>
            <Route path="/inspections/new">
              <NewInspection />
            </Route>
            <Route path="/inspections/:id">
              <Inspection />
            </Route>
            <Route path="/">
              <Inspections />
            </Route>
          </Switch>
        </Router>
      </div>
      <ReactQueryDevtools initialIsOpen />
    </>
  );
}

export default App;

