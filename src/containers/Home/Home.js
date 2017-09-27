import React, { Component } from 'react';

import './Home.css';
import logo from '../../resources/svgs/logo.svg';

class Home extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyNav);
  }

  handleKeyNav = e => {
    const { history } = this.props;

    if (e.keyCode === 39) {
      history.push('/about');
    }

    if (e.keyCode === 37) {
      history.push('/blog');
    }
  };

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyNav);
  }

  render() {
    return (
      <div className="container-home animated fadeIn">
        <img className="logo-big" src={logo} alt="Logo Big" />
        <div className="text-area animated fadeIn">
          <h1 className="home-text heading4">
            Hello,<br />I’m <span className="text-primary">Deni</span>{' '}
            <span className="text-secondary">Cho</span>,
            <br />a web developer
          </h1>
          <div className="home-text-line line" />
          <h2 className="home-subtext">
            Front End Developer / Web Designer <br />
          </h2>
        </div>
      </div>
    );
  }
}

export default Home;
