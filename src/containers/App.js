import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar';
import './App.css';

import Home from './Home/Home';
import Footer from '../components/Footer/Footer';
import About from '../containers/About/About';
import Works from '../containers/Works/Works';
import Blog from '../containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-wrapper">
          <Navbar />
          <div className="content-wrapper">
            <Switch>
              <Route exact path="/about" component={About} />
              <Route exact path="/works" component={Works} />
              <Route exact path="/contact" component={Works} />
              <Route path="/blog/:id?" component={Blog} />
              <Route exact path="/" component={Home} />
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
