import React, { Component } from 'react';
import './Navbar.css';

import NavItem from './NavItem';
import Logo from '../Logo/Logo';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar-logo">
          <Logo size="small" />
        </div>
        <div>
          <nav>
            <ul className="navitem-container">
              <NavItem exact text="HOME" linkTo="/" />
              <NavItem text="ABOUT" linkTo="/about" />
              <NavItem text="WORKS" linkTo="/works" />
              <NavItem text="CONTACT" linkTo="/contact" />
              <NavItem text="BLOG" linkTo="/blog" />
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
