import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="container-home">
        <div className="text-area">
          <h1 className="home-text heading4">
            Hello,<br />I'm <span className="text-primary">Deni</span>{' '}
            <span className="text-secondary">Cho</span>
            <br />a web developer.
          </h1>
          <div className="home-text-line" />
          <h2 className="home-subtext">Front End Developer / Web Designer</h2>
        </div>
      </div>
    );
  }
}

export default Home;
