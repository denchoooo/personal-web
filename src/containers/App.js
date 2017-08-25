import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import './App.css';

import Home from './Home/Home';
import Footer from '../components/Footer/Footer';
import About from '../containers/About/About';
import Works from '../containers/Works/Works';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-wrapper">
          <Navbar />
          <div className="content-wrapper">
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/works" component={Works} />
            <Route exact path="/contact" component={Works} />
            <Route exact path="/blog" component={Works} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
