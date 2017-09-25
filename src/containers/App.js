import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
import './App.css';

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
              <Route exact path="/about" component={withRouter(About)} />
              <Route exact path="/works" component={withRouter(Works)} />
              <Route exact path="/contact" component={withRouter(Contact)} />
              <Route path="/blog/:slug?" component={withRouter(NewBlog)} />
              <Route exact path="/" component={withRouter(Home)} />
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
