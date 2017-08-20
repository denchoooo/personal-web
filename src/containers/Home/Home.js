import React, { Component } from 'react';
import ghost from '../../services/ghost/ghost';
import './Home.css';
import logo from '../../resources/svgs/logo.svg';
import axios from 'axios';

class Home extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="container-home">
        <img className="logo-big" src={logo} alt="Logo Big" />
        <div className="text-area">
          <h1 className="home-text heading4">
            Hello,<br />I’m <span className="text-primary">Deni</span>{' '}
            <span className="text-secondary">Cho</span>,
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
