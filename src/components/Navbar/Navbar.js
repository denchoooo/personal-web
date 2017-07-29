import React, { Component } from 'react';
import './Navbar.css';

import NavItem from './NavItem';
import Logo from '../Logo/Logo';
import SocialIcon from '../SocialIcon/SocialIcon';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-left">
          <div className="navbar-logo">
            <Logo size="small" />
          </div>
          <div className="navmenu">
            <nav>
              <ul className="navitem-container">
                <NavItem exact text="Home" linkTo="/" />
                <NavItem text="About" linkTo="/about" />
                <NavItem text="Works" linkTo="/works" />
                <NavItem text="Contact" linkTo="/contact" />
                <NavItem text="Blog" linkTo="/blog" />
              </ul>
            </nav>
          </div>
        </div>
        <div className="navbar-right">
          <div className="socials-container-navbar">
            <SocialIcon
              to="https://github.com/denichodev"
              className="fa fa-github"
            />
            <SocialIcon
              to="https://github.com/denichodev"
              className="fa fa-linkedin"
            />
            <SocialIcon
              to="https://twitter.com/denichodev"
              className="fa fa-twitter"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
