import React, { Component } from 'react';
import './Navbar.css';

import NavItem from './NavItem';
import Logo from '../Logo/Logo';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.setState = {};
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
              <NavItem text="HOME" linkTo="/" />
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
