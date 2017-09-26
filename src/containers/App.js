import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
import './App.css';

import withTracker from './withTracker';
import Home from './Home/Home';
import Footer from '../components/Footer/Footer';
import About from '../containers/About/About';
import Works from '../containers/Works/Works';
import Contact from '../containers/Contact/Contact';
import NewBlog from '../containers/NewBlog/NewBlog';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-wrapper">
          <Navbar />
          <div className="content-wrapper">
            <Switch>
              <Route
                exact
                path="/about"
                component={withTracker(withRouter(About))}
              />
              <Route
                exact
                path="/works"
                component={withTracker(withRouter(Works))}
              />
              <Route
                exact
                path="/contact"
                component={withTracker(withRouter(Contact))}
              />
              <Route
                path="/blog/:slug?"
                component={withTracker(withRouter(NewBlog))}
              />
              <Route exact path="/" component={withTracker(withRouter(Home))} />
              <Redirect to="/" />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
