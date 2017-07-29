import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import './App.css';

import Home from './Home/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-wrapper">
          <Navbar />
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
