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
        <div className="navbar-right">Right</div>
      </div>
    );
  }
}

export default Navbar;
