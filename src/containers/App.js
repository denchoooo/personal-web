import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom';

// import Navbar from '../components/Navbar/Navbar';
import './App.css';

import withTracker from './withTracker';
// import Home from './Home/Home';
// import Footer from '../components/Footer/Footer';
// import About from '../containers/About/About';
// import Works from '../containers/Works/Works';
// import Contact from '../containers/Contact/Contact';
// import NewBlog from '../containers/NewBlog/NewBlog';
import Maintenance from './Maintenance';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={withTracker(withRouter(Maintenance))}
          />
          <Redirect to="/" />
        </Switch>
      </Router>
    );
  }
}

export default App;
